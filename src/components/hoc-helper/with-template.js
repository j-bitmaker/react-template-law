import React, {Component} from 'react';


const WithTemplate = (Form, Text, ...fields) =>{

return class extends Component{
	state= {};	
	
    componentDidMount(){
		const allFields = {};
		fields.forEach(obj=>{
			for (let prop in obj){
				allFields[prop] = obj[prop];
			}
		});
		
		this.setState({...this.mainObj, ...allFields})
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
		console.log(e.target);
		const prop = e.target.id; //Id of same input (className="form-control") equals key of object key
		const stateObj = {};
		stateObj[prop] = e.target.value; //e.target.id==prop==ключ в state
		this.setState(stateObj);
	}


    render(){
		return (
			<div className="row">
				<div className="col">
					<Form changeData={this.changeData}/> 
				</div>
				<div className="col">
					<Text data={this.state} />
				</div>
			</div>
		)
	}
}
}

export default WithTemplate;
