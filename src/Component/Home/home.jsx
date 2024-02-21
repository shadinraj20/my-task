
import './home.css';
import React, { useState, useEffect } from 'react';






const Home = () => {
    const[data, setData]=useState();
    console.log(data);
    
    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(res =>res.json())
        .then(data=>setData(data))
        
    },[])
    

    return (
        <section className='container mt-5 '>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {data?.users.map(user=> {
                return  (
                    <div className="col" key={user.id}>
                        <div className="card">
                            <div className='card-body'>
                                <img src={user.image} width={80} height={80} alt='Avatar'/>
                                <h5>{user.firstName} {user.middleName} {user.lastName}</h5>
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