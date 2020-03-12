import React from 'react'

export function getCurrentDate(separator='/'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    let hours = new Date().getHours(); //Current Hours
    let min = new Date().getMinutes(); //Current Minutes
    let sec = new Date().getSeconds(); //Current Seconds
    
    const separate = ':'
    const space = '   '

    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}${space}${hours}${separate}${min}${separate}${sec}`
    }

export function getCurHour() {
        return new Date().getHours(); 
    }

export function GetMessage(props) {
    const hour = props.hourData
        if(hour >= 4 && hour <= 9){
            return <h5>Good Morning</h5>
          }else if(hour >9 && hour <=14){
            return <h5>Good Afternoon</h5>
          }else if(hour >14 && hour <19){
              return <h5>Good Evening</h5>
          }else{
              return <h5>Good Night</h5>
          }
}