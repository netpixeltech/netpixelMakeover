import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Head from '../components/head'
import Layout from "../components/Layout"
import Navbar from '../components/Navbar'
function booknow() {
    return (
          <div>
            <Navbar />
            <Head />
            <ContactForm />
            <Footer />
          </div>
        
    )
}

export default booknow
