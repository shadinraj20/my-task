import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';


const header = () => {
  return (
    
    <div className='container mt-5'>
      <Link to='/' class="btn btn-outline-success">Home</Link>
      <Link to='/from' class="btn btn-outline-success">Add From</Link>
       
       <div className='mt-5'>
       <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        
       </div>
       
    </div>
  );
};

export default header;
