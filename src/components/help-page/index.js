import React from 'react';
import './help-page.css';

const HelpPage = () => {
    
    return(
            <div className="container">  
                <form className="text-center border border-light p-5" action="#!">
                    <p className="h4 mb-4">Связаться с нами</p>
                    <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Имя"/>
                    <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail"/>
                    <label>Тип сообщения</label>
                    <select className="browser-default custom-select mb-4">
                        <option value="0" disabled>Другое</option>
                        <option value="1">Отзыв о сервисе</option>
                        <option value="2">Сообщение об ошибке</option>
                        <option value="3">Предложить улучшения</option>
                    </select>
                    <div className="form-group">
                        <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Сообщение"></textarea>
                    </div>
                    <div className="custom-control custom-checkbox mb-4">
                        <input type="checkbox" className="custom-control-input" id="defaultContactFormCopy"/>
                
                    </div>
                    <button className="btn btn-info btn-block" type="submit">Отправить</button>
                </form>
            </div>
    )
}

export default HelpPage; 