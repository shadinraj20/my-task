import React from 'react';
import './header.css';

const header = () => {
  return (
    
    <div className='mt-5'>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
        <button class="btn btn-outline-success me-2" type="button">Add From</button>
      </form>
    </div>
  );
};

export default header;
