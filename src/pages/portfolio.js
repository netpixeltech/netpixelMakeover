import { graphql } from 'gatsby'
import React from 'react'
import Layout from "../components/Layout"
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

const MyPage = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  // `images` is an array of objects with `thumb` and `full`
//   console.log(images);
  return (
      <div>
          <Layout>
              <h2 className="text-center mt-3 mb-4">Bridal</h2>
            <Gallery images={images} />
          </Layout>
      </div>
  )
}

export const query = graphql`
  query  {
    allFile(
        filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "bridal"}}
    ) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default MyPage
