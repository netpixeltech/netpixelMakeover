import React from 'react'
import Navbar from './navbar'
import Footer from "./Footer"

// import "bootstrap/dist/css/bootstrap.min.css"
function Layout(props) {
    return (
        <div>
            
            <Navbar />
            {props.children}
            <Footer />
        
        </div>
           
        
    )
}

export default Layout
