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
<<<<<<< HEAD
                        <div className="col-md-4">
                            <img src={postdata.node.mainImage.asset.url} alt="post" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
=======
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-4 ">
                            <img src={postdata.node.mainImage.asset.url} alt="post" className="img-fluid" />
                        </div>
                        <div className="col-md-4">
>>>>>>> 5f3e8f9123a49bcf4c7b5702ade2c25d8381d85c
                            <div className="mb-3 mt-2" key={index} >
                                <Link to={`/blog/${postdata.node.title}`}><h2 className="card-title" style={{color:"black"}}>{postdata.node.title}</h2></Link>
                                <p>{postdata.node.slug.current}</p>
                                <p>{Date(postdata.node.publishedAt)}</p>
                                {/* {
                                    post
                                } */}
                            </div>    
                        </div>
<<<<<<< HEAD
=======
                        <div className="col-md-2">
                        </div>
>>>>>>> 5f3e8f9123a49bcf4c7b5702ade2c25d8381d85c
                    </div>



                    
                )
            })
        }
    </Layout>
    )
}

export default Blog
