import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from './icon.png';

function NavBar()
{
    return(
      <div class="icon" style={{display:"flex"}}>
        <img src={logo} style={{height:"130px",width:"200px",marginLeft:"250px",marginTop:"20px"}} alt="logo"/>
        <div style={{position:"absolute", marginLeft:"600px",display: 'block',  padding:50 }}>
      <Navbar bg="dark" variant="dark" style={{width:"1000px"}}>
        <div style={{marginLeft:"70px"}}>
        <Navbar.Brand href="/portfolio" >
          Home
        </Navbar.Brand>
        
        <Navbar.Brand href="/projectcontainer" style={{marginLeft:"70px"}}>
          Project
        </Navbar.Brand>
        <Navbar.Brand href="./resume" style={{marginLeft:"70px"}}>
          Resume
        </Navbar.Brand>
        <Navbar.Brand href="/contact" style={{marginLeft:"70px",marginRight:"50px"}}>
          Contact
        </Navbar.Brand>
        </div>
      </Navbar>
    </div>
    </div>
  );
};
export default NavBar;