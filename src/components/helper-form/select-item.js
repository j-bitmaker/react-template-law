import React from 'react';
	
const options = i => (<option key={i} id={i}>{i}</option>)

const dayArr = ['число'];
const monthArr = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октяборь", "ноябрь", "декабрь"];
const yearArr = ['год'];

for (let i=1; i<=31; i++){
dayArr.push(i);
	}
for (let i=1971; i<=2020; i++){
yearArr.push(i);
    }

export const day = dayArr.map(options);
export const month = monthArr.map(options);
export const year = yearArr.map(options);