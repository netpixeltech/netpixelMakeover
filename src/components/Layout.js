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
            {props.children}
            <Footer />
        
        </div>
           
        
    )
}

export default Layout
