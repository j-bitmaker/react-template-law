import React from 'react';
import { Link } from 'react-router-dom';
import './button-list.css';
//import blackBright  from 'ansi-colors';

const ButtonList = () => (
    <div>
        <div className="jumbotron">
            <h1 className="display-4">
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
        <div className="button-list">
            <div className="row">
                <div className="col-md-3">
                    <Link to='/confident'>
                        <button type="button" id='confident' className="btn btn-primary btn-lg btn-block btn-huge">
                            Соглашение о <br/> конфиденциальности <br/> с сотрудником
                        </button>
                    </Link>
                </div>
                <div className="col-md-3"> 
                    <Link to='/contract-license'>
                        <button type="button" id='contract-license' className="btn btn-info btn-lg btn-block btn-huge">
                            <br/>Лицензионный договор <br/> &nbsp; 
                        </button>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to="/order-po">
                    <button type='button' id='cotract-author' className="btn btn-light btn-lg btn-block btn-huge">
                        Договор авторского <br/>заказа <br/> &nbsp; 
                    </button>
                    </Link>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-3">
                    <Link to='/contract-alienation'>
                        <button type='button' className="btn btn-info btn-lg btn-block btn-huge">
                            Договор об <br/> отчуждении <br/> исключительного права
                        </button>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to='contract-po'>
                        <button type='button' id="contract-po" className="btn btn-light btn-lg btn-block btn-huge">
                            Договор на <br/> разработку <br/> программного обеспечения
                        </button>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to="/order-pd">
                        <button type='button' id="order-pd" className="btn btn-primary btn-lg btn-block btn-huge">
                            Приказ о назначении <br/> ответстветственных по работе<br/> с ПДн работников
                        </button>
                    </Link>
                </div>
            </div>
            <br/>
            <div className="row">
                    <div className="col-md-3">
                        <Link to="/personal-data-list">
                            <button type='button' className="btn btn-primary btn-lg btn-block btn-huge">
                               <br/> Перечень <br/> персональных данных <br/> &nbsp; 
                            </button>
                        </Link>
                    </div>
                <div className="col-md-3">
                    <Link to='/contract-alienation'>
                        <button type='button' className="btn btn-secondary btn-lg btn-block btn-huge">
                            <br/> Договор об отчуждении <br/> исключительных прав <br/> &nbsp; 
                        </button>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to='/model-secure'>
                        <button type='button' id='model-secure' className="btn btn-info btn-lg btn-block btn-huge">
                            Модель угроз  безопасности информационной <br/> системы персональных <br/> данных
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    ) 

export default ButtonList;

    