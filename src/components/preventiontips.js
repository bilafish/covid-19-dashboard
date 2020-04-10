import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PreventionTips = () => {
  const imageDescriptions = {
    "stay-home.png": "Stay at home as much as you can",
    "social-distance.png": "Avoid close contact with others (at least 1 metre)",
    "wash-hands.png": "Wash your hands regularly",
    "see-doctor.png": "Self-isolate from others if you feel unwell",
    "wear-mask.png": "Wear a mask if you're going out",
    "disinfect.png":
      "Disinfect spaces and items that could be exposed to the virus",
  }

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativePath: {
            in: [
              "stay-home.png"
              "social-distance.png"
              "wash-hands.png"
              "see-doctor.png"
              "wear-mask.png"
              "disinfect.png"
            ]
          }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {data.allFile.nodes.map((image) => (
        <div style={{ width: "200px", height: "20rem", textAlign: "center" }}>
          <Img fluid={image.childImageSharp.fluid} />
          <span>{imageDescriptions[image.relativePath]}</span>
        </div>
      ))}
    </div>
  )
}

export default PreventionTips
