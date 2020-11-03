import React from 'react'
import Layout from '../components/Layout'
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'
import BridalImages from "../components/galleryImeges/bridalImage"
import SimpleReactLightbox from "simple-react-lightbox";
import MehndiImages from '../components/galleryImeges/MehndiImages'
function Portfolio() {
  return (
   <Layout >
        {/* <Gallery images={images} /> */}
      <h2 className="text-center my-5">Bridal</h2>
      <SimpleReactLightbox>
          <BridalImages />
      </SimpleReactLightbox>

      <h2 className="text-center my-5">Mehndi</h2>
      <SimpleReactLightbox>
          <MehndiImages />
      </SimpleReactLightbox>
        
   </Layout>
  )
}

export default Portfolio
