import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CardDetail.css';
const CardDetail = () => {
   const prams= useParams()
   
  const[data , setData]=useState();
  console.log(data);
    
   
    
useEffect(()=>{
        fetch('https://dummyjson.com/users/'+prams.id)
        .then(res =>res.json())
        .then(data=>setData(data))
        
    },[])
  return (
    <div className='container CardDetail mt-5'>
       <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src= "" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text"></p>
      </div>
    </div>
  </div>
    </div>
    </div>
  );
};

export default CardDetail;
