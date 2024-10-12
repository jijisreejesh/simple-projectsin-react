import React, { useState } from 'react'
import style from './TodoStyle.module.css'

function TodoStyle() {
    let id,name;
const [todos,setTodos]=useState([]);
const [input,setInput]=useState('');
const add=()=>{
    setTodos((todos)=>
        [...todos,{
            text:input,
            id:Math.floor(Math.random()*10),
        }])
    setInput('');
}
const remove=(e)=>{
   setTodos(todos.filter((i)=>(
    i.id!==e)))
}
  return (
    <div className={style.header}>
       <h1>Todo List</h1> 
       <input type='text' placeholder="Enter the task" value={input} onChange={e=>setInput(e.target.value)}></input>
       <button id={style.btn1} onClick={add}>add</button>
       <br></br> 
        <ul>
            {todos.map((i)=>(
                <li key={i.id}>
                <span>{i.text}</span>
                <button id={style.btn1} onClick={()=>remove(i.id)}>remove</button>
                </li>
            ))}
        </ul>
        
    </div>
  )
}

export default TodoStyle