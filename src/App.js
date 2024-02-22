
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/header';
import Home from './Component/Home/home';
import React from "react";
import From from './Component/From/from';
import CardDetail from './Component/CardDetail/CardDetail';

function App() {
  

  
 return (
    <div >
      <BrowserRouter>
      <Header></Header>
       <Routes>
       <Route path="/user/:id" element={<CardDetail/>}></Route>
        <Route path="/from" element={<From/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        
      </Routes>
      
      </BrowserRouter>
      
      
       
      
     


    
   </div>


  );
}

export default App;
