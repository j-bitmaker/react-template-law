import React from 'react';
import WithTemplate from '../helper-hoc/with-template';
import OrderPDText from '../template-page-text/order-pd-text';
import Input from '../helper-form/input';
import {day, month, year} from '../helper-form/select-item';
import Select from '../helper-form/select';
import './template-page.css';


const OrderPDForm = ({changeData}) => {

return (
	<div id='quests' className='form-row quests'>
		<form className='forms'>
			<p>Номер договора</p>
			<Input id='number' name='s_1' placeholder='Номер' changeData={changeData}/>
			<p>Дата подписания</p>
			<div className="form-row form-group">
			<div className="col">
			<Select name='s_1' id='day' changeData={changeData} child={day}/>
			</div>
			<div className="col">
			<Select name='s_1' id='month' changeData={changeData} child={month}/>
			</div>
			<div className="col">
			<Select name='s_1' id='year' changeData={changeData} child={year}/>
			</div>
			</div>
			<p>Город</p>
			<Input id="city" name="s_1" placeholder="Город" changeData={changeData}/>
			<p>Название ООО</p>
			<Input id="entity" name="s_1" placeholder="Территория дейсвтия довора" changeData={changeData}/>
			<p> ФИО работников</p>
			<Input id="name_1" name="s_1" placeholder="ФИО назначенного работника" changeData={changeData}/>
			<Input id="name_2" name="s_1" placeholder="ФИО запасного работника" changeData={changeData}/>
		</form>		
	</div>
)
}

export default WithTemplate(OrderPDForm, OrderPDText);
