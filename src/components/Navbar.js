import React from 'react'
import {  Link } from "gatsby"
function Navbar() {

    return (
        
<header>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-brand ml-auto logo">
                <Link>Reveka</Link>
            </ul>
            {/* <!-- social media plugins --> */}
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/"><i class="fab fa-facebook"></i></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/"><i class="fab fa-instagram"></i></Link>
            </li>
            </ul>  
        </div>
    </nav>

    <hr className="hr" style={{margin:0}}/>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        {/* <!-- routes  --> */}
        <ul className="navbar-nav mx-auto">
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


</header>


       
    )
}

export default Navbar
