import React from 'react';
//генератор инпут-полей для компонентов из template-page 
const Input = ({id, placeholder, changeData, name}) => (
	<div className="form-group">
	<input type="text" id={id} name={name} className="form-control" placeholder={placeholder} onChange={changeData}/>
	</div>
    )
export default Input;
