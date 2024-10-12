
import React,{ useEffect, useState } from 'react'
import axios from 'axios'
function Meals() {
    const[data,setData]=useState([]);
    let url="https://www.themealdb.com/api/json/v1/1/categories.php";
    useEffect(()=>{
    axios.get(url).then(response=>{
    setData(response.data.categories);
    })
   },[]);
  return (
    <>
    <h1>Meals</h1>
    <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',gap:'20px',padding:'20px'}}>

    {data.map((i)=>(
        <div key={i.idCategory} style={{width:'350px',height:'400px',boxShadow:'1px 1px 2px 2px  rgba(0,0,0,0.1)',overflow:'hidden'}}>
            <h1>{i.strCategory}</h1>
            <img src={i.strCategoryThumb} alt="image" style={{width:'170px'}}></img>
            <p style={{maxHeight:'100px',textOverflow:'ellipsis'}}>{i.strCategoryDescription}</p>
        </div>
    ))}
    </div>
    </>
  )
}

export default Meals