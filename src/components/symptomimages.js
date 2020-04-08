import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const formatFilename = (filename) => {
  let name = filename.substring(0, filename.length - 4)
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
  return capitalizedName
}

const SymptomImages = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativePath: { in: ["cough.png", "fever.png", "tiredness.png"] }
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
      }}
    >
      {data.allFile.nodes.map((image) => (
        <div style={{ width: "100px", height: "10rem", textAlign: "center" }}>
          <Img fluid={image.childImageSharp.fluid} />
          <span>{formatFilename(image.relativePath)}</span>
        </div>
      ))}
    </div>
  )
}

export default SymptomImages
