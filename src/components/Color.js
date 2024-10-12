import React, { useState } from 'react'

function Color() {
    const [col,setcol]=useState("blue")
    const[color,setColor]=useState('black')
    function change(){
        setcol(col==="blue"?"black":"blue")
        setColor((color==='black')?"white":"black")
    }
  return (
    <div style={{backgroundColor:`${col}`,width:'100vh',height:'100vh'}}>
        <button onClick={change}>Change</button>
        <h1 style={{color:`${color}`}}>WELCOME</h1>
    </div>
  )
}

export default Color