import React from 'react'

import { SRLWrapper } from "simple-react-lightbox";
import { graphql,useStaticQuery,Link } from "gatsby";


function CocktailImages() {

const data = useStaticQuery(graphql`
query{
    
allSanityGallery(
    filter:{galleryCategory:{elemMatch:{name:{eq:"Mehnadi"}}}}
){
edges{
  node{

    image{
      asset{
        url
      }
    }
    title
  }
}
}
}
   
`)

// const  CocktailImages =[]




    return (
      <SRLWrapper>
       {
        data.allSanityGallery.edges.map(edge=>{
          return <img src={edge.node.image.asset.url} className="img-fluid my-2 mx-3" alt="bridal" style={{width:"25%"}} />
        })
       }
      </SRLWrapper>
    )
}

export default CocktailImages





