import React from 'react';
import WithTemplate from '../helper-hoc/with-template';
import OrderPOText from '../template-page-text/order-po-text';
import Input from '../helper-form/input';
import {day, month, year} from '../helper-form/select-item';
import Select from '../helper-form/select';

const OrderPOForm = ({changeData}) => {

return (
<div className='form-row quests'>
<form>
<p>Город</p>
			<Input id='city' name='start' placeholder='Город' changeData={changeData}/>
			<p>Дата подписания</p>
			<div className="form-row form-group">
			<div className="col">
            <Select name='start' id='day' changeData={changeData} child={day}/>
			</div>
			<div className="col">
			<Select name='start' id='month' changeData={changeData} child={month}/>
			</div>
			<div className="col">
            <Select name='start' id='year' changeData={changeData} child={year}/>
			</div>
			</div>
			<p> Данные раскрывающего информацию </p>
			<Input id="name_1" name="start" placeholder="ФИО (Ивана Ивановича Иванова)" changeData={changeData}/>
			<Input id="address_1" name="end" placeholder="Адрес проживания/получения док-ов" changeData={changeData}/>
			<Input id="index_1" name="end" placeholder="Почтовый индекс" changeData={changeData}/>
			<Input id="phone_num_1" name="end" placeholder="Телефон" changeData={changeData}/>
			<Input id="e_mail_1" name="end" placeholder="E-mail" changeData={changeData}/>
			<Input id="pasport_num_1" name="end" placeholder="Серия и номер паспорта" changeData={changeData}/>
			<Input id="pasport_from_1" name="end" placeholder="Паспорт выдан " changeData={changeData}/>
			<div className="form-row form-group">
			<div className="col">
			<Input id="pasport_date_1" name="end" placeholder="Дата выдачи паспорта" changeData={changeData}/>
			</div>
			<div className='col'>
			<Input id="pasport_code_1" name="end" placeholder="Код подразделения" changeData={changeData}/>
			</div>	
			</div>
			<Input id="legal_address_1" name="end" placeholder="Юридический адрес" changeData={changeData}/>
			<div className="form-row">
			<div className="col">
            <Input id="INN_1" name="end" placeholder="ИНН" changeData={changeData}/>
			</div>
			<div className='col'>
			<Input id="KPP_1" name="end" placeholder="КПП" changeData={changeData}/>
			</div>
			<div className='col'>
			<Input id="ORGN_1" name="end" placeholder="ОРГН" changeData={changeData}/>
			</div>
			</div>
			<div className="form-row form-group">
			<div className="col">
			<Input id="pay_account_1" name="end" placeholder="Расчётный счёт" changeData={changeData}/>
			</div>
			<div className='col'>
			<Input id="cor_account_1" name="end" placeholder="Корреспондентский счёт" changeData={changeData}/>
			</div>
			<div className='col'>
			<Input id="BIK_1" name="end" placeholder="БИК" changeData={changeData}/>
			</div>
            </div>
            <p> Данные принимающего информацию </p>
			<Input id="name_2" name="start" placeholder="ФИО (Ивана Ивановича Иванова)" changeData={changeData}/>
			<Input id="address_2" name="end" placeholder="Адрес проживания/получения док-ов" changeData={changeData}/>
			<Input id="index_2" name="end" placeholder="Почтовый индекс" changeData={changeData}/>
			<Input id="phone_num_2" name="end" placeholder="Телефон" changeData={changeData}/>
			<Input id="e_mail_2" name="end" placeholder="E-mail" changeData={changeData}/>
			<Input id="pasport_num_2" name="end" placeholder="Серия и номер паспорта" changeData={changeData}/>
			<Input id="pasport_from_2" name="end" placeholder="Паспорт выдан " changeData={changeData}/>
			<div className="form-row form-group">
			<div className="col">
			<Input id="pasport_date_2" name="end" placeholder="Дата выдачи паспорта" changeData={changeData}/>
			</div>
			<div className='col'>
			<Input id="pasport_code_2" name="end" placeholder="Код подразделения" changeData={changeData}/>
			</div>	
			</div>  
</form>		
</div>
)
}

const OrderPO = WithTemplate(OrderPOForm, OrderPOText);

export default OrderPO;