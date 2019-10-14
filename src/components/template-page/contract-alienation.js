import React from 'react';
import WithTemplate from '../hoc-helper/with-template';
import ContractAlienationText from '../template-page-text/contract-alienation-text';
import Input from '../template-page-form-helper/input';
import {day, month, year} from '../template-page-form-helper/select-item';
import Select from '../template-page-form-helper/select';
import './template-page.css';

const ContractAlienationForm = ({changeData}) => {

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

const ContractAlienation = WithTemplate(ContractAlienationForm, ContractAlienationText);

export default ContractAlienation;
