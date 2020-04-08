import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SymptomImages = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp(
        filter: {
          id: {
            in: [
              "f0ede24a-25dc-507c-8530-6c95349074a2"
              "bc25c7d5-6fa4-5027-9e1d-8717e06fdc28"
              "13014824-9772-517d-9164-b55480346070"
            ]
          }
        }
      ) {
        edges {
          node {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ width: "100px", height: "10rem", textAlign: "center" }}>
        <Img fluid={data.allImageSharp.edges[2].node.fluid} />
        <span>Fever</span>
      </div>
      <div style={{ width: "100px", height: "10rem", textAlign: "center" }}>
        <Img fluid={data.allImageSharp.edges[1].node.fluid} />
        <span>Cough</span>
      </div>
      <div style={{ width: "100px", height: "10rem", textAlign: "center" }}>
        <Img fluid={data.allImageSharp.edges[0].node.fluid} />
        <span>Tiredness</span>
      </div>
    </div>
  )
}

export default SymptomImages
