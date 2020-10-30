import React from 'react'
import "../styles/style.css"
<<<<<<< HEAD
=======
import Layout from '../components/Layout'
>>>>>>> 5f3e8f9123a49bcf4c7b5702ade2c25d8381d85c
import Head from '../components/head'
import MyParallax from '../components/MyParallax'
import { Parallax } from 'react-parallax';
import HeroImg from "../images/img1.jpg"
import ContactUs from '../components/Contact'
import ContactForm from '../components/ContactForm'
<<<<<<< HEAD
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
    return (
        <div >
          <Navbar />
          <Head />
=======

function Home() {
    return (
        <Layout >
          <Head />
         
>>>>>>> 5f3e8f9123a49bcf4c7b5702ade2c25d8381d85c
         <Parallax
        blur={0}
        bgImage={HeroImg}
        bgImageAlt="the cat"
        strength={400}
        >
           
        <div className="hero-img">
            <p style={{color:"white"}}>We captures best memories for you</p>
        </div>
        </Parallax>
     
         

        <div className="">
          <h2 className="head-title" > An Image is more than 1000 words. </h2>  
        </div>
        
        <MyParallax />

        <ContactForm />

        <ContactUs />

       <div className="row">
      
      
       </div>
<<<<<<< HEAD
      <Footer />
         </div>
=======

         </Layout>
>>>>>>> 5f3e8f9123a49bcf4c7b5702ade2c25d8381d85c
       
    )
}

export default Home
