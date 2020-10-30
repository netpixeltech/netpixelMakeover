import React from 'react'
// import img1 from "../bridal/img1.jpg"
// import img2 from "../bridal/img2.jpg"
// import img3 from "../bridal/img3.jpg"
// import img4 from "../bridal/img4.jpg"
// import img5 from "../bridal/img5.jpg"
// import img6 from "../bridal/img6.jpg"
// import img7 from "../bridal/img7.jpg"
import { SRLWrapper } from "simple-react-lightbox";
import { graphql,useStaticQuery,Link } from "gatsby";


function BridalImage() {

const data = useStaticQuery(graphql`
query{
    
allSanityGallery{
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

// const  bridalImage =[]




    return (
      <SRLWrapper>
       {
        data.allSanityGallery.edges.map(edge=>{
          return <img src={edge.node.image.asset.url} className="img-fluid my-2" alt="bridal" style={{width:"32%",height:"15rem",order:1}} />
        })
       }
      </SRLWrapper>
    )
}

export default BridalImage


