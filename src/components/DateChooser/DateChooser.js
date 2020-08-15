import React from 'react';
import DatePickers from '../datapicker/DatePickers';


export default function DateChooser() {
  
  const date = new Date().getFullYear()+"-"+("0" + new Date().getMonth()).slice(-2)+"-"+("0" + new Date().getDay()).slice(-2);

  return (
   <div>
    <span>Select date:</span>
    <DatePickers label="From" date={date}/>
    <DatePickers label="To" date={date}/>
    </div>
  );
}