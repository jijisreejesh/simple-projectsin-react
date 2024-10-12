import React, { useState } from 'react'
import Styles from "./CounterStyle.module.css"
function Counter(){

    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        if(count>0)
          setCount(count-1)
    }

    return(
        <div className={Styles.header}> 
        <h1 className={Styles.heading}>Counter</h1>
        <label>{count}</label><br></br>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter;