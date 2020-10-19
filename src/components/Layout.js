import React from 'react'
import Navbar from './navbar'

// import "bootstrap/dist/css/bootstrap.min.css"
function Layout(props) {
    return (
        <div className="container-fluid">

            <Navbar />
            {props.children}
            
        </div>
    )
}

export default Layout
