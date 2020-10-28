import React from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'
import BasePortableText from '@sanity/block-content-to-react'
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
      mainImage{
        asset{
          url
        }
      }
    publishedAt
    slug{
      current
    }
   
    _rawBody

   
  }
  }
`
function Blog(props) {

  const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
      mainImage: "Figure",
      authorReference: ({node}) => <span>{node.author.name}</span>
    }
  }

  

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
           <BasePortableText blocks={props.data.sanityPost._rawBody} serializers={serializers} />
        </Layout>
    )
}

export default Blog

// const React = require('react')
// const ReactDOM = require('react-dom')
// const BlockContent = require('@sanity/block-content-to-react')
// const client = require('@sanity/client')({
//   projectId: `zkyvt2x6`,
//   dataset: `production`,
//   useCdn: true
// })
 
// const serializers = {
//   types: {
//     code: props => (
//       <pre data-language={props.node.language}>
//         <code>{props.node.code}</code>
//       </pre>
//     )
//   }
// }
 
// client.fetch('*[_type == "article"][0]').then(article => {
//   ReactDOM.render(
//     <BlockContent blocks={article.body} serializers={serializers} />,
//     document.getElementById('root')
//   )
// })