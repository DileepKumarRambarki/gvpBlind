import HomePage from './HomePage/HomePage.jsx';
import SignupPage from './SignupPage/SignupPage.jsx';
import Login from "./Login/Login.jsx";
import { useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css'
function App(){
  
  return(

    <>
        <Router>
          <Routes>
            <Route path="/SignupPage" element={<SignupPage/>} />
            <Route path="/HomePage" element={<HomePage/>}/>
            
            <Route  path='/' element={<Login/>}/>
          </Routes>
        </Router>
    </>
    

  
  );
}
export default App