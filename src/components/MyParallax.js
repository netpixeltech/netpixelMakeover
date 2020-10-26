import React from 'react'
import bridal from "../images/bridal.jpg"
import cocktail from "../images/cocktail.jpg"
import mehndi from "../images/mehndi.jpg"
import reception from "../images/reception.jpg"

import ParallaxImg from './ParallaxImg';
import BottomImgs from './ParallaxBootom'

// import {graphql,useStaticQuery} from "gatsby"

function MyParallax() {

    // const data=useStaticQuery(graphql`
    // query{
    //     allSanityImagePost{
    //         edges{
    //           node{
    //            title
    //             mainImage{
    //               asset{
    //                 url
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    // `)

    //   let resource = data.allSanityPost.edges[2].node;
    return (
        <div>
             {/* {
                data.allSanityImagePost.edges.map((post,index)=>{
                  return <ParallaxImg key={index} imgtitle={post.node.title} img={post.node.mainImage.asset.url} />
                })
            }
            */}
             
            <ParallaxImg imgtitle={"Bridal"} img={bridal} />
            <ParallaxImg imgtitle={"Cocktail"} img={cocktail} />
            <ParallaxImg imgtitle={"Mehnadi"} img={mehndi} />
            <ParallaxImg imgtitle={"Reception"} img={reception} />
           
           
            
            <BottomImgs />
        </div>
    )
}

export default MyParallax
