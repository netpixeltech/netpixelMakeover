import React from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'

export const query = graphql`
query(
    $title:String!
  ){
  sanityPost(
    title:{
      eq:$title
    }
  ){
      title
    publishedAt
    slug{
      current
    }
    mainImage{
        asset{
         url
       } 
       }
  }
  }
`
function Blog(props) {
    return (
        <Layout >
            {
                console.log(props.data.sanityPost)
            }
           <h1>{props.data.sanityPost.title}</h1>
            <small>{Date(props.data.sanityPost.publishedAt)}</small>
           <div style={{maxWidth:"100%"}}>
           <img src={props.data.sanityPost.mainImage.asset.url} alt="blog" className="img-fluid" />
           </div>
           <p className="lead">
               {props.data.sanityPost.slug.current}
           </p>
        </Layout>
    )
}

export default Blog
