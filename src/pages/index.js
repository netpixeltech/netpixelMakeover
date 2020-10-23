import React from 'react'
import "../styles/style.css"
import Layout from '../components/Layout'
import Head from '../components/head'
import MyParallax from '../components/MyParallax'
import { Parallax } from 'react-parallax';
import HeroImg from "../images/img1.jpg"
import ContactUs from '../components/Contact'
import ContactForm from '../components/ContactForm'

function Home() {
    return (
        <Layout >
          <Head />
         
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

         </Layout>
       
    )
}

export default Home
