import React from 'react';
import WithTemplate from '../helper-hoc/with-template';
import ConfidentText from '../template-page-text/confident-text';
import Input from '../helper-form/input';
import {day, month, year} from '../helper-form/select-item';
import Select from '../helper-form/select';
import './template-page.css';

const ConfidentForm = ({changeData}) => {


return (
    <div id='quests' className='form-row quests'>
		<form className='forms'>
			<p>Город</p>
			<Input id='city' name='s_1' placeholder='Город' changeData={changeData}/>
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
			<p> Данные раскрывающего информацию </p>
			<Input id="name_1" name="s_1" placeholder="ФИО (Ивана Ивановича Иванова)" changeData={changeData}/>
			<Input id="address_1" name="s_2" placeholder="Адрес проживания/получения док-ов" changeData={changeData}/>
			<Input id="index_1" name="s_2" placeholder="Почтовый индекс" changeData={changeData}/>
			<Input id="phone_num_1" name="s_2" placeholder="Телефон" changeData={changeData}/>
			<Input id="e_mail_1" name="s_2" placeholder="E-mail" changeData={changeData}/>
			<Input id="pasport_num_1" name="s_2" placeholder="Серия и номер паспорта" changeData={changeData}/>
			<Input id="pasport_from_1" name="s_2" placeholder="Паспорт выдан " changeData={changeData}/>
			<div className="form-row form-group">
			<div className="col">
			<Input id="pasport_date_1" name="s_2" placeholder="Дата выдачи паспорта" changeData={changeData}/>
			</div>
			<div className='col'>
			<Input id="pasport_code_1" name="s_2" placeholder="Код подразделения" changeData={changeData}/>
			</div>	
			</div>
			<Input id="legal_address_1" name="s_2" placeholder="Юридический адрес" changeData={changeData}/>
			<div className="form-row">
			<div className="col">
			<Input id="INN_1" name="s_2" placeholder="ИНН" changeData={changeData}/>
			</div>
			<div className='col'>
			<Input id="KPP_1" name="s_2" placeholder="КПП" changeData={changeData}/>
			</div>
			<div className='col'>
			<Input id="ORGN_1" name="s_2" placeholder="ОРГН" changeData={changeData}/>
			</div>
			</div>
			<div className="form-row form-group">
			<div className="col">
			<Input id="pay_account_1" name="s_2" placeholder="Расчётный счёт" changeData={changeData}/>
			</div>
			<div className='col'>
			<Input id="cor_account_1" name="s_2" placeholder="Корреспондентский счёт" changeData={changeData}/>
			</div>
			<div className='col'>
			<Input id="BIK_1" name="s_2" placeholder="БИК" changeData={changeData}/>
			</div>
			</div>
			<p> Данные принимающего информацию </p>
			<Input id="name_2" name="s_1" placeholder="ФИО (Ивана Ивановича Иванова)" changeData={changeData}/>
			<Input id="address_2" name="s_2" placeholder="Адрес проживания/получения док-ов" changeData={changeData}/>
			<Input id="index_2" name="s_2" placeholder="Почтовый индекс" changeData={changeData}/>
			<Input id="phone_num_2" name="s_2" placeholder="Телефон" changeData={changeData}/>
			<Input id="e_mail_2" name="s_2" placeholder="E-mail" changeData={changeData}/>
			<Input id="pasport_num_2" name="s_2" placeholder="Серия и номер паспорта" changeData={changeData}/>
			<Input id="pasport_from_2" name="s_2" placeholder="Паспорт выдан " changeData={changeData}/>
			<div className="form-row form-group">
			<div className="col">
			<Input id="pasport_date_2" name="s_2" placeholder="Дата выдачи паспорта" changeData={changeData}/>
			</div>
			<div className='col'>
			<Input id="pasport_code_2" name="s_2" placeholder="Код подразделения" changeData={changeData}/>
			</div>	
			</div>
		</form>		
	</div>

            

)
}

export default WithTemplate(ConfidentForm, ConfidentText);