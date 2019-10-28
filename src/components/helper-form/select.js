import React from 'react';
//генератор select-полей, id 
const Select = ({id, changeData, child}) => {
    return(
    <select className="form-control" id={id} onChange={changeData}>
    {child}
	</select>
    )
}
export default Select;