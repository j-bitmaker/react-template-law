import React from 'react';
import { Link } from 'react-router-dom';
import './button-list.css';
import order from '../icons/order.svg';
import prog from '../icons/prog.svg';
import list from '../icons/legal-paper.svg';
import secure from '../icons/secure.svg';
import person from '../icons/person.svg';
import handshake from '../icons/handshake.svg';
import deal from '../icons/deal.svg';
import mark from '../icons/mark.svg'
//import blackBright  from 'ansi-colors';

const ButtonList = () => (
    <div>
        <div className="jumbotron">
            <h1 className="header">
                Интеллектуальная собственность!
            </h1>
            <p className="lead">
                Отныне право - для людей!
            </p>
            <hr className="my-4"/>
            <p>
                Просто нажмите на раздел, который Вас интересует
            </p>
        </div>
        <div>
            <div className="row">
                <div className="col-md-4">
                    <Link to='/confident'>
                        <button type="button" id='confident' className="btn btn-primary btn-lg btn-block btn-huge">
                            Соглашение о конфиденциальности с сотрудником   <br/>
                            <img src={secure} width='200px' height='200px'/>
                        </button>
                    </Link>
                </div>
                <div className="col-md-4"> 
                    <Link to='/contract-license'>
                        <button type="button" id='contract-license' className="btn btn-info btn-lg btn-block btn-huge">
                            <br/>Лицензионный договор <br/> &nbsp; 
                            <img src={mark} width='200px' height='200px'/>
                        </button>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to="/order-po">
                    <button type='button' id='cotract-author' className="btn btn-light btn-lg btn-block btn-huge">
                        Договор авторского <br/>заказа <br/> &nbsp; 
                        <img src={person} width='200px' height='200px'/>
                    </button>
                    </Link>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-4">
                    <Link to='/contract-alienation'>
                        <button type='button' className="btn btn-info btn-lg btn-block btn-huge">
                            Договор об <br/> отчуждении <br/> исключительного права
                            <img src={handshake} width='200px' height='200px'/>
                        </button>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to='contract-po'>
                        <button type='button' id="contract-po" className="btn btn-secondary btn-lg btn-block btn-huge">
                            Договор на <br/> разработку <br/> программного обеспечения
                            <img src={prog} width='200px' height='200px'/>
                        </button>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to="/order-pd">
                        <button type='button' id="order-pd" className="btn btn-primary btn-lg btn-block btn-huge">
                            Приказ о назначении <br/> ответстветственных по работе<br/> с ПДн работников
                            <img src={order} width='200px' height='200px'/>
                        </button>
                        
                    </Link>
                </div>
            </div>
            <br/>
            <div className="row">
                    <div className="col-md-4">
                        <Link to="/personal-data-list">
                            <button type='button' className="btn btn-secondary btn-lg btn-block btn-huge">
                               <br/> Перечень <br/> персональных данных <br/> &nbsp; 
                               <img src={list} width='200px' height='200px'/>
                            </button>
                        </Link>
                    </div>
                <div className="col-md-4">
                    <Link to='/contract-alienation'>
                        <button type='button' className="btn btn-primary btn-lg btn-block btn-huge">
                            <br/> Договор об отчуждении <br/> исключительных прав <br/> &nbsp; 
                            <img src={deal} width='200px' height='200px'/>
                        </button>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to='/model-secure'>
                        <button type='button' id='model-secure' className="btn btn-info btn-lg btn-block btn-huge">
                            Модель угроз безопасности информационной системы <br/> персональных данных
                            <img src={secure} width='200px' height='200px'/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    ) 

export default ButtonList;
