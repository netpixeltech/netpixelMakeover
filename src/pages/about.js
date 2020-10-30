import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/style.css"
import Layout from '../components/Layout'

function About() {
    
    return (
        <Layout >
                <div className="text-center mt-3 mb-5">
                    <h2> About </h2>
                </div>
                <div className="row">
                   
                    <div className="col-md-8">
                        <p className="lead" >
                            Makeup artist Reveka, who is also the founder of ‘Reveka Makeovers & Studio’, is a woman on a mission as beautiful as it is powerful; an artist by heart who is turning the dreams into reality,an  entrepreneur 
                            exploring  the  potential   of makeup.   An  eye  for the  makeup   and her  immense hard-work has made her journey flawless and has become an inspiration to many girls. 
                        </p>
                        <p className="lead">
                        Being internationally certified from _, she has always believed that makeup is an art and beneath each   stroke,   it   requires   immense   knowledge,   aesthetics,  
                         grit,   determination   and   a   thoughtful process. The role of makeup in transforming a girl into a bride is not just only about making hergorgeous but creating a beautiful memory that is 
                         cherished forever. It’s been more than 5 years of blood, sweat, tears and endless hours of work in this 
                         industry and each and every minute spent is absolutely priceless. Dealing with the prejudice attached to the profession, as people tend to look at makeup as a frivolous pastime, meant only for the rich 
                         and the pampered. Good makeupis an art and is a serious profession which adds to a woman’s confidence quotient. Reveka is an aspiring entrepreneur who is empowering other women by training other makeup 
                         artist and doing away with the ‘frivolous’ tag attached to it. 
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img src="" alt="reveka"></img>
                    </div>
                   
                </div>
           </Layout>
    )
}

export default About
