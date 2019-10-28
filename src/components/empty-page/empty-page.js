import React from 'react';


const EmptyPage = () =>(
        <div className="container">
            <div className="row">
                <div className="error-actions">
                    Ой!
                    Кажется, этот шаблон ещё не готов...
                    Зайдите чуть позже!
                    <input type="button" className="btn btn-primary btn-lg" value="На главную"/>
                    <input type="button" className="btn btn-default btn-lg" value="Помощь"/>
                </div>
            </div>
        </div>
    )
export default EmptyPage;