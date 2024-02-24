
import { Link } from 'react-router-dom';
import './home.css';
import React, { useState, useEffect } from 'react';






const Home = () => {
    const[data, setData]=useState();
    const[record, setRecord]=useState(data);
    
   
    
    
    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(res =>res.json())
        .then(data=>
            {setData(data)
             setRecord(data)})
        
    },[])
    
    
    return (
        <section className='container mt-5 '>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {record?.users.map(user=> {
                return  (
                    
                    <div className="col" key={user.id}>
                        <div className="card">
                            <div className='card-body'>
                                <img src={user.image} width={80} height={80} alt='Avatar'/>
                                <Link to={'/user/' + user.id}>
                                    <h5>{user.firstName} {user.middleName} {user.lastName}</h5>
                                    </Link> 
                                <h6 className='email'>Email:{user.email}</h6>
                                
                               
       

                        </div>
                        </div>
                    </div>
                )
                })}
            </div>
        </section>
    );
}

export default Home;
