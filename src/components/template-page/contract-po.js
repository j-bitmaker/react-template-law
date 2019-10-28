import React from 'react';
import WithTemplate from '../helper-hoc/with-template';
import ContractPOText from '../template-page-text/contract-po-text';
import Input from '../helper-form/input';
import {day, month, year} from '../helper-form/select-item';
import Select from '../helper-form/select'; 

const ContractPOForm = ({changeData}) => {
 

return (
    <div className='form-row quests'>
    <form className="forms">
		<p>Номер договора</p>
		<Input id='number' name='s_1' placeholder='Номер Договора' changeData={changeData}/>
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
		<p>Финансовые обязательства и форс-мажор</p>
		<Input id='po-cost' name='s_2' placeholder='Стоимость разработки ПО (цифрами)' changeData={changeData}/>
		<Input id='po-cost_str' name='s_2' placeholder='Стоимость разработки ПО (буквами)' changeData={changeData}/>
		<Input id='po_cost_first' name='s_2' placeholder='Аванс (цифрами)' changeData={changeData}/>
		<Input id='po_cost_first_str' name='s_2' placeholder='Аванс (буквами)' changeData={changeData}/>
		<Input id='po_cost_last' name='s_2' placeholder='Доплата после раработки ПО (цифрами)' changeData={changeData}/>
		<Input id='po-cost-last_str' name='s_2' placeholder='Доплата после разработки ПО (буквами)' changeData={changeData}/>
		<Input id='fine_perc_1' name='s_3' placeholder='Пеня в случае задержки оплаты работ (процент от невыплаченной суммы)' changeData={changeData}/>
		<Input id='fine-perc_2' name='s_3' placeholder='Пеня в случае нарушения сроков выполнения работы (процент от стоимости работы) ' changeData={changeData}/>
		<Input id='force_days' name='s_3' placeholder='Кол-во дней для уведломления после форс-мажора' changeData={changeData}/>		
		<p> Данные заказчика </p>
		<Input id="name_entity_1" name="s_1" placeholder="Название организации" changeData={changeData}/>
		<Input id="name_1" name="s_1" placeholder="ФИО (Ивана Ивановича Иванова)" changeData={changeData}/>
		<Input id="address_1" name="s_4" placeholder="Адрес проживания/получения док-ов" changeData={changeData}/>
		<Input id="index_1" name="s_4" placeholder="Почтовый индекс" changeData={changeData}/>
		<Input id="phone_num_1" name="s_4" placeholder="Телефон" changeData={changeData}/>
		<Input id="e_mail_1" name="s_4" placeholder="E-mail" changeData={changeData}/>
		<Input id="pasport_num_1" name="s_4" placeholder="Серия и номер паспорта" changeData={changeData}/>
		<Input id="pasport_from_1" name="s_4" placeholder="Паспорт выдан " changeData={changeData}/>
		<div className="form-row form-group">
		<div className="col">
		<Input id="pasport_date_1" name="s_4" placeholder="Дата выдачи паспорта" changeData={changeData}/>
		</div>
		<div className='col'>
		<Input id="pasport_code_1" name="s_4" placeholder="Код подразделения" changeData={changeData}/>
		</div>	
		</div>
		<Input id="legal_address_1" name="s_4" placeholder="Юридический адрес" changeData={changeData}/>
		<div className="form-row">
		<div className="col">
		<Input id="INN_1" name="s_4" placeholder="ИНН" changeData={changeData}/>
		</div>
		<div className='col'>
		<Input id="KPP_1" name="s_4" placeholder="КПП" changeData={changeData}/>
		</div>
		<div className='col'>
		<Input id="ORGN_1" name="s_4" placeholder="ОРГН" changeData={changeData}/>
		</div>
		</div>
		<div className="form-row form-group">
		<div className="col">
		<Input id="pay_account_1" name="s_4" placeholder="Расчётный счёт" changeData={changeData}/>
		</div>
		<div className='col'>
		<Input id="cor_account_1" name="s_4" placeholder="Корреспондентский счёт" changeData={changeData}/>
		</div>
		<div className='col'>
		<Input id="BIK_1" name="s_4" placeholder="БИК" changeData={changeData}/>
		</div>
		</div>
		<p> Данные исполнителя</p>
		<Input id="name_2" name="s_5" placeholder="ФИО (Ивана Ивановича Иванова)" changeData={changeData}/>
		<Input id="address_2" name="s_5" placeholder="Адрес проживания/получения док-ов" changeData={changeData}/>
		<Input id="index_2" name="s_5" placeholder="Почтовый индекс" changeData={changeData}/>
		<Input id="phone_num_2" name="s_5" placeholder="Телефон" changeData={changeData}/>
		<Input id="e_mail_2" name="s_5" placeholder="E-mail" changeData={changeData}/>
		<Input id="pasport_num_2" name="s_5" placeholder="Серия и номер паспорта" changeData={changeData}/>
		<Input id="pasport_from_2" name="s_5" placeholder="Паспорт выдан " changeData={changeData}/>
		<div className="form-row form-group">
		<div className="col">
		<Input id="pasport_date_2" name="s_5" placeholder="Дата выдачи паспорта" changeData={changeData}/>
		</div>
		<div className='col'>
		<Input id="pasport_code_2" name="s_5" placeholder="Код подразделения" changeData={changeData}/>
		</div>	
		</div>
		<Input id="legal_address_2" name="s_5" placeholder="Юридический адрес" changeData={changeData}/>
		<div className="form-row">
		<div className="col">
		<Input id="INN_2" name="s_5" placeholder="ИНН" changeData={changeData}/>
		</div>
		<div className='col'>
		<Input id="KPP_2" name="s_5" placeholder="КПП" changeData={changeData}/>
		</div>
		<div className='col'>
		<Input id="ORGN_2" name="s_5" placeholder="ОРГН" changeData={changeData}/>
		</div>
		</div>
		<div className="form-row form-group">
		<div className="col">
		<Input id="pay_account_2" name="s_5" placeholder="Расчётный счёт" changeData={changeData}/>
		</div>
		<div className='col'>
		<Input id="cor_account_2" name="s_5" placeholder="Корреспондентский счёт" changeData={changeData}/>
		</div>
		<div className='col'>
		<Input id="BIK_2" name="s_5" placeholder="БИК" changeData={changeData}/>
		</div>
		</div>
	</form>	
</div>
)
}

const ContractPO = WithTemplate(ContractPOForm, ContractPOText);

export default ContractPO;