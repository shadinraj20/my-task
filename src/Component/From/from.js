import React from 'react';

const from = () => {
  return (
      <div className='container mt-5'>
        <div class="mb-3 ms-auto">
    <label for="exampleFormControlInput1" class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Company Name</label>
    <input type="Company Name" class="form-control" id="exampleFormControlInput1" placeholder="Company Name"/>
    
    <button className="btn btn-primary mt-5">Submite</button>

  </div>
  </div>
  </div>
      </div>
    );
  };

export default from;
