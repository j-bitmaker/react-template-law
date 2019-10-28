import React, {Component} from 'react';
import {basicData} from '../template-page-data';
import './with-template.css'

const WithTemplate = (Form, Text, ...fields) =>{

return class extends Component{

		refHOC = React.createRef();	

		state= {
			// currentHeight: this.refHOC.current.offsetHeight,
			print: false, //listener для кнонпки-вызова pdf
			addScroll: false //скроллить/не скроллить текст автоматически
		};	
		
    componentDidMount(){
		const allFields = {...basicData}; //объект для всех шаблонов
		fields.forEach(obj=>{
			for (let prop in obj){
				allFields[prop] = obj[prop];
			}
		});
		this.setState({
			...this.state, 	
			...allFields,	 //объекты лишь для определённых шаблонов
			currentHeight: this.refHOC.current.offsetHeight
			//через React.createRef() определяем высоту div'а с текстом и приравниваем её к высоте div'а с полями ввода,

		});
	}
	
	changeData = (e) => {

		const prop = e.target.id; //Id of same input (className="form-control") equals key of object key
		const stateObj = {};
		stateObj[prop] = e.target.value; //e.target.id==prop==ключ в state
		stateObj.refId = prop
		this.setState(stateObj);
		this.setState({
			scroll: e.target.name //значение scroll опеределяет, какую часть текста необходимо отобразить для того, чтобы она была видна видна пользователю
		}); 
	}

	printDoc = () =>{
		this.setState({print: true})
	}
	returnState = () =>{
		this.setState({print: false})
	}

	toggleScroll = () =>{
		this.setState(state =>{
		return {addScroll: !state.addScroll} //включен/отключен автоматиеческий скроллинг
		})
	}


    render(){
		return (
			<div className="row">
				<div className="col" ref={this.refHOC}>
				<div className="form-check">
				<input className="form-check-input" type="checkbox" onClick={this.toggleScroll} id="defaultCheck1"/>
					<label className="form-check-label" htmlFor="defaultCheck1">
						Покручивать текст автоматически во время ввода
					</label>
					<hr/>
				</div>
					<Form changeData={this.changeData}/>
					<div className='button-print'>
					<input className='btn btn-primary' 
					type='button' onClick={this.printDoc} value='Сохранить в PDF'/>
					</div> 
				</div>
				<div className="col text" style={{height: this.state.currentHeight}}>
					<Text data={this.state} returnState={this.returnState}/>
				</div>
			</div>
		)
	}
}
}

export default WithTemplate;
