import React from "react"
import { graphql } from "gatsby"
import { SEO, Jumbo, Products } from "../components"

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripeSku {
      edges {
        node {
          id
          price
          product {
            name
            metadata {
              description
              img
              wear
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Jumbo data={data} />
      <Products products={data.allStripeSku.edges} /> 
    </>
  )
}

export default IndexPage
