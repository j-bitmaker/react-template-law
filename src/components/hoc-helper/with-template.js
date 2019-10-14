import React, {Component} from 'react';
import ButtonPrint from '../button-print';
import './with-template.css'

const WithTemplate = (Form, Text, ...fields) =>{

return class extends Component{

		state= {};	
		refHOC = React.createRef();

	
    componentDidMount(){
		const allFields = {};
		fields.forEach(obj=>{
			for (let prop in obj){
				allFields[prop] = obj[prop];
			}
		});
		this.setState({
			...this.mainObj, //объект для всех шаблонов
			...allFields, //объекты лишь для определённых шаблонов
			currentHeight: this.refHOC.current.offsetHeight 
			//через React.createRef() определяем высоту div'а с текстом и приравниваем её к высоте div'а с полями ввода
		});
	

	}

	
	
	mainObj = {
		number: "_____________",
		city: "_______________",
		name: "_________________________________",
		day: "__",
		month: "______",
		year: "____",
		name_1: "__________________",
		address_doc_1: "_____________________",
		address_1: "______________________",
		name_2: "_____",
		pasport_num_2: "___________",
		pasport_from_2: "______________________",
		pasport_regist_2: "___________________________",
		adress_doc_2: "________",
		adress_2: "_________"
	}
	
	changeData = (e) => {

		const prop = e.target.id; //Id of same input (className="form-control") equals key of object key
		const stateObj = {};
		stateObj[prop] = e.target.value; //e.target.id==prop==ключ в state
		stateObj.refId = prop
		this.setState(stateObj);
		console.log(this.state.refId)
	}


    render(){
		console.log(this.props);
		return (
			<div className="row">
				<div className="col" ref={this.refHOC}>
					<Form changeData={this.changeData}/>
					<div className='button-print'>
						<ButtonPrint/>
					</div> 
				</div>
				<div className="col text" style={{height: this.state.currentHeight}}>
					<Text data={this.state}/>
				</div>
			</div>
		)
	}
}
}

export default WithTemplate;
