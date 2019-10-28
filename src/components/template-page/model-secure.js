import React from 'react';
import WithTemplate from '../helper-hoc/with-template';
import ModelSecureText from '../template-page-text/model-secure-text';
import Input from '../helper-form/input';
import {day, month, year} from '../helper-form/select-item';
import Select from '../helper-form/select';

const ModelSecureForm = ({changeData}) => {

return (
    <div className='form-row quests'>
    <form>
	<p>Номер договора</p>
	<Input id='number' placeholder='Номер' changeData={changeData}/>
	<p>Город</p>
	<Input id='city' placeholder='Город' changeData={changeData}/>
	<p>Дата подписания</p>
	<div className="form-row form-group">
	<div className="col">
	<Select id='day' changeData={changeData} child={day}/>
	</div>
    <div className="col">
	<Select id='month' changeData={changeData} child={month}/>
	</div>
	<div className="col">
	<Select id='year' changeData={changeData} child={year}/>
	</div>
	</div>
	<p> Данные организации </p>
	<Input id='name_organ' placeholder='Название организации' changeData={changeData}/>
	<Input id="address_organ" placeholder="Адрес организации" changeData={changeData}/>
	<p> Данные работодателя </p>
	<Input id="name_1" name="name_1" placeholder="ФИО работодателя (Ивана Ивановича Иванова)" changeData={changeData}/>
	<Input id="address_doc_1" placeholder="Адрес получения документов" changeData={changeData}/>
	<Input id="address_1" placeholder="Адрес проживания" changeData={changeData}/>
	<p> Данные работника </p>
	<Input id="name_2" name="name_2" placeholder="ФИО работника (Сергея Сергееевича Сергеева)" changeData={changeData}/>
	<div className="form-row form-group">
	<div className="col">
	<Input id="pasport_num_2" placeholder="номер паспорта" changeData={changeData}/>
	</div>
    <div className="col">
	<Input id="pasport_from_2" placeholder="выдан паспорт" changeData={changeData}/>
	</div>
	</div>	
	<Input id="pasport_regist_2" placeholder="паспорт зарегистрирован по адресу" changeData={changeData}/>
	<Input id="address_doc_2" placeholder="адрес для получения докумнетов работника" changeData={changeData}/>	
	<Input id="address_2" placeholder="адрес работника" changeData={changeData} />	  
</form>		
</div>
)
}

const ModelSecure = WithTemplate(ModelSecureForm, ModelSecureText);

export default ModelSecure;