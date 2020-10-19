import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/style.css"
import Layout from '../components/Layout'
import img from "../images/img1.jpg"
import ParallaxImg from '../components/ParallaxImg'
import Head from '../components/head'
function About() {
    
    return (
        <Layout >
            <Head />
            <div className="mx-auto text-center">
                <h1>What Picberry is ?</h1>
                    <ParallaxImg title="" img={img} />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, 
                    deleniti ad dolore minima iusto vitae nemo voluptatum, necessitatibus recusandae, 
                    earum obcaecati sit doloremque est porro tempore expedita ut quae! Dolore.
                </p>
                <h3>Services Offered</h3>
                <ul>
                    <li>Wedding Photography</li>
                    <li>Wedding Couple Photography</li>
                    <li>Pre Wedding Photography</li>
                    <li>Candid Photography</li>
                    <li>Baby Shoot Photography</li>
                    <li>Product Photography</li>
                </ul>
            </div>
        </Layout>
    )
}

export default About
