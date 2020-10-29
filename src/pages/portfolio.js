import React from 'react'
import Layout from '../components/Layout'

// import { graphql,useStaticQuery } from "gatsby";

import Gallery from "react-responsive-gallery";
import BridalImage from "../images/bridal/bridalImage"
function Portfolio() {

    // const data = useStaticQuery(graphql`
    // query{
    //     allSanityPost{
    //         edges{
    //        node{
    //          mainImage{
    //              asset{
    //                  url
    //              }
    //          }
    //        }
    //      } 
    //    }
    //    } 
    // `)


    return (
            <Layout>

            <div className="row">
                <div className="col-sm-12 text-center mb-3">
                    <h1>We love what we do!</h1>
                </div>
            </div>

            <Gallery images={BridalImage()} useLightBox={true}/>
            
            {/* <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
            {
                data.allSanityPost.edges.map((edge,index)=>{
                    return(
                    
                            <div className="card mt-2 mb-3" key={index} style={{width: "20rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Gallery</h5>
                            </div>
                            <img src={edge.node.mainImage.asset.url} className="card-img-top" alt="..." />
                            
                        </div>
                        
                    )
                })
            }
            </div>
               */}

            </Layout>

    )
}

export default Portfolio
