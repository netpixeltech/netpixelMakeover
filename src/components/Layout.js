import React from 'react'
import Navbar from './Navbar'
import Footer from "./Footer"
import Head from './head'

// import "bootstrap/dist/css/bootstrap.min.css"
function Layout(props) {
    return (
        <div>
            <Head />
            <Navbar />
<<<<<<< HEAD
           <div className="container">
             {props.children}
           </div>
=======
            {props.children}
>>>>>>> 5f3e8f9123a49bcf4c7b5702ade2c25d8381d85c
            <Footer />
        
        </div>
           
        
    )
}

export default Layout
