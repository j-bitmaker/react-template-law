import React from 'react';
import WithTemplate from '../helper-hoc/with-template';
import ContractAlienationText from '../template-page-text/contract-alienation-text';
import Input from '../helper-form/input';
import {day, month, year} from '../helper-form/select-item';
import Select from '../helper-form/select';
import './template-page.css';

const ContractAlienationForm = ({changeData}) => {

return (
    <div id='contract-alienation' className='form-row quests'>
        <form className="forms">
		<p>Город</p>
		<Input id='city' name='s_1' placeholder='Город' changeData={changeData}/>
		<p>Дата подписания и территория дейсвия</p>
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
		<Input id="territory" name="s_2_1" placeholder="Территория дейсвтия довора" changeData={changeData}/>
		<p>Договор действует с </p>
		<div className="form-row form-group">
		<div className="col">
		<Select name='s_7' id='start_day' changeData={changeData} child={day}/>
		</div>
		<div className="col">
		<Select name='s_7' id='start_month' changeData={changeData} child={month}/>
		</div>
		<div className="col">
		<Select name='s_7' id='start_year' changeData={changeData} child={year}/>
		</div>
		</div>
		<p>Договор действует до </p>
		<div className="form-row form-group">
		<div className="col">
		<Select name='s_7' id='end_day' changeData={changeData} child={day}/>
		</div>
		<div className="col">
		<Select name='s_7' id='end_month' changeData={changeData} child={month}/>
		</div>
		<div className="col">
		<Select name='s_7' id='end_year' changeData={changeData} child={year}/>
		</div>
		</div>
		<p> Действие и прекращение договора </p>
		<div className="form-row form-group">
		<div className="col">
		<Input id="count_days" name="s_7" placeholder="Итого дней действует" changeData={changeData}/>
		</div>
		<div className="col">
		<Input id="after_days" name="s_7" placeholder="Прекращается договор через" changeData={changeData}/>
		</div>
		</div>
		<div className="form-row form-group">
		<div className="col">
		<Input id="person_sum_1" name="s_7" placeholder="Максимальная пеня" changeData={changeData}/>
		</div>
		<div className="col">
		<Input id="person_sum_1" name="s_7" placeholder="Максимальная пеня" changeData={changeData}/>
		</div>
		</div>
		<p>Приложения к договору</p>
		<Input id="app_territory" name="s_2_1" placeholder="Опеределяющее территорию действия" changeData={changeData}/>
		<Input id="app_keys" name="s_2_2" placeholder="Определяющее порядок передачи ключей" changeData={changeData}/>
		<Input id="app_rights" name="s_4" placeholder="Определяющее порядок передачи неисключительных прав" changeData={changeData}/>
		<p>Сроки и даты</p>
		<Input id="days_before_price" name="s_3" placeholder="За сколько дней уведомлять об изменениях в прайс-листе" changeData={changeData}/>
		<Input id="day_commit" name="s_4" placeholder="День исполнения об-тв по перечислению суммы лицензиатом" changeData={changeData}/>
		<Input id="day_commit" name="s_7" placeholder="День исполнения об-тв по перечислению суммы лицензиатом" changeData={changeData}/>

		<p>Финансовые обязательства</p>
		<Input id="person_costs" name="s_4" placeholder="Кем оплачиваются расходы по перечисл. денежных средств" changeData={changeData}/>
		<Input id="fine_perc_1" name="s_6" placeholder="Пеня за несвоемременное перчисл. суммы вознаграждения" changeData={changeData}/>
		<Input id="person_sum_1" name="s_6" placeholder="Максимальная пеня" changeData={changeData}/>
		<Input id="fine_perc_2" name="s_6" placeholder="Пеня за несвоемременное предост. ключей" changeData={changeData}/>
		<Input id="person_sum_2" name="s_6" placeholder="Максимальная пеня" changeData={changeData}/>
		<p> Данные правообладателя </p>
		<Input id="name_entity_1" name="s_1" placeholder="Название организации" changeData={changeData}/>
		<Input id="name_1" name="s_1" placeholder="ФИО (Ивана Ивановича Иванова)" changeData={changeData}/>
		<Input id="address_1" name="s_8" placeholder="Адрес проживания/получения док-ов" changeData={changeData}/>
		<Input id="index_1" name="s_8" placeholder="Почтовый индекс" changeData={changeData}/>
		<Input id="phone_num_1" name="s_8" placeholder="Телефон" changeData={changeData}/>
		<Input id="e_mail_1" name="s_8" placeholder="E-mail" changeData={changeData}/>
		<Input id="pasport_num_1" name="s_8" placeholder="Серия и номер паспорта" changeData={changeData}/>
		<Input id="pasport_from_1" name="s_8" placeholder="Паспорт выдан " changeData={changeData}/>
		<div className="form-row form-group">
		<div className="col">
		<Input id="pasport_date_1" name="s_8" placeholder="Дата выдачи паспорта" changeData={changeData}/>
		</div>
		<div className='col'>
		<Input id="pasport_code_1" name="s_8" placeholder="Код подразделения" changeData={changeData}/>
		</div>	
		</div>
		<Input id="legal_address_1" name="s_8" placeholder="Юридический адрес" changeData={changeData}/>
		<div className="form-row">
		<div className="col">
		<Input id="INN_1" name="s_8" placeholder="ИНН" changeData={changeData}/>
		</div>
		<div className='col'>
		<Input id="KPP_1" name="s_8" placeholder="КПП" changeData={changeData}/>
		</div>
		<div className='col'>
		<Input id="ORGN_1" name="s_8" placeholder="ОРГН" changeData={changeData}/>
		</div>
		</div>
		<div className="form-row form-group">
		<div className="col">
		<Input id="pay_account_1" name="s_8" placeholder="Расчётный счёт" changeData={changeData}/>
		</div>
		<div className='col'>
		<Input id="cor_account_1" name="s_8" placeholder="Корреспондентский счёт" changeData={changeData}/>
		</div>
		<div className='col'>
		<Input id="BIK_1" name="s_8" placeholder="БИК" changeData={changeData}/>
		</div>
		</div>
		<p> Данные правопреемника</p>
		<Input id="name_2" name="s_1" placeholder="ФИО (Ивана Ивановича Иванова)" changeData={changeData}/>
		<Input id="address_2" name="s_8" placeholder="Адрес проживания/получения док-ов" changeData={changeData}/>
		<Input id="index_2" name="s_8" placeholder="Почтовый индекс" changeData={changeData}/>
		<Input id="phone_num_2" name="s_8" placeholder="Телефон" changeData={changeData}/>
		<Input id="e_mail_2" name="s_8" placeholder="E-mail" changeData={changeData}/>
		<Input id="pasport_num_2" name="s_8" placeholder="Серия и номер паспорта" changeData={changeData}/>
		<Input id="pasport_from_2" name="s_8" placeholder="Паспорт выдан " changeData={changeData}/>
		<div className="form-row form-group">
		<div className="col">
		<Input id="pasport_date_2" name="s_8" placeholder="Дата выдачи паспорта" changeData={changeData}/>
		</div>
		<div className='col'>
		<Input id="pasport_code_2" name="s_8" placeholder="Код подразделения" changeData={changeData}/>
		</div>	
		</div>
	</form>	
</div>

)
}

const ContractAlienation = WithTemplate(ContractAlienationForm, ContractAlienationText);


export default ContractAlienation;
