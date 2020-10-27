import React from 'react'
// import BlogPage from '../components/BlogPage'
import Layout from "../components/Layout"
import Blogdetail from './blogdetail'
import { graphql,useStaticQuery,Link } from "gatsby";

function Blog() {

    const data = useStaticQuery(graphql`
    query{
        allSanityPost{
            edges{
           node{
             title
             slug{
               current
             }
             mainImage{
                 asset{
                     url
                 }
             }
             body{
               children{
                 text
               }
             }
             
           }
         } 
       }
       } 
    `)
    return (
    <Layout>
        {
            data.allSanityPost.edges.map((postdata,index)=>{
                return(
                    
                    <div className="row mb-4">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-4 ">
                            <img src={postdata.node.mainImage.asset.url} alt="post" className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3 mt-2" key={index} >
                                <Link to={`/blog/${postdata.node.title}`}><h2 className="card-title" style={{color:"black"}}>{postdata.node.title}</h2></Link>
                                <p>{postdata.node.slug.current}</p>
                                <p>{Date(postdata.node.publishedAt)}</p>
                            </div>    
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>



                    
                )
            })
        }
    </Layout>
    )
}

export default Blog
