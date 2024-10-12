import React, { useState } from 'react'

function Testimonials() {
    const [index,setIndex]=useState(0);
    const s=[
    "https://cdn.pixabay.com/photo/2024/03/23/08/13/tokyo-8650941_640.jpg",
    "https://cdn.pixabay.com/photo/2024/09/23/17/34/vietnam-9069634_640.png",
    "https://cdn.pixabay.com/photo/2024/09/23/05/54/wave-9067749_640.jpg"
]
const previous=()=>{
  if(index>0)
  {
    setIndex(index-1)
  }
}
const next=()=>{
    if(index!==s.length-1)
        {
          setIndex(index+1)
        }
}

  return (
    <div style={{backgroundColor:'blanchedalmond'}}>
      <h1>pictures</h1>
      <img src={s[index]} alt="image" style={{width:'450px',height:'300px'}}></img>
      <button style={{float:'left'}} onClick={previous}>Prev</button>
      <button style={{float:'right'}} onClick={next}>next</button>
      {/* {s.map((i)=>(
        <div key={Math.random()}>
        <img src={s[i]} alt="image" style={{width:'400px',height:'300px'}}></img>
        <h1>{s[i]}</h1>
        </div>
      ))} */}
    </div>
  )
}

export default Testimonials