import React, { useState } from 'react'
import './Cal.css'
function Calculater() {
    const [num,setNum]=useState('');

    function clear(){
        setNum("")
    }

    function display(value){
        setNum(num+value)
    }
    function calculate(){
        var a=eval(num);
        setNum(a)
    }
  return (
   <form class='calculator' name='calc'>
    <input type='text' value={num} class="value"></input>
    <span className="num clear" onClick={()=>clear()}>C</span>
    <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span onClick={() => display("+")} className="plus">
        +
      </span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span onClick={calculate} className="num equal" >
        =
      </span>
   
   </form>
  )
}

export default Calculater
