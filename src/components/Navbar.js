import React from 'react'
import {  Link } from "gatsby"
import logo from "../images/logo1.png"
function Navbar() {

    return (

<div className="container-fluid">
<header>
    
   <div className="row logo">
      
            <div className="col-md-2">

            </div>
            <div className="col-md-8 text-center">
                <img className="logoimg" src={logo} alt="reveka logo" />
            </div>
            <div className="col-md-2 social">
               <a href = "https://www.facebook.com/" ><i className="fab fa-facebook"></i></a> 
               <a href = "https://www.instagram.com/"><i className="fab fa-instagram"></i></a> 
            </div>

        
   </div>
    <div className="row justify-content-center" >
    <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        {/* <!-- routes  --> */}
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/">Work</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/">Services</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/">Academy</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/">Blog</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/">Book Now</Link>
        </li>
        </ul>
        
        
    </div>
    </nav>
 
    </div>
   

</header></div>

       
    )
}

export default Navbar
