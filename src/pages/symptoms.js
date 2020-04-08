import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SymptomImages from "../components/symptomimages"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Main = styled.div`
  width: 100%;
  text-align: left;
  @media (min-width: 800px) {
    padding-left: 6rem;
  }
`

const Title = styled.h2`
  color: #fea3a8;
  padding: 0 1.5rem;
`

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
  width: 100%;
`

const Footer = styled.footer`
  margin: 9rem 0 1rem 1rem;
  padding-left: 6rem;
  @media (max-width: 800px) {
    margin: 1rem 0 1rem 0;
    padding: 0;
  }
`

const Container = styled.div`
  font-size: 1.2rem;
  width: 30%;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0 1.5rem;
  }
`

const SymptomsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "person-with-symptoms.png" }) {
        childImageSharp {
          fixed(width: 295, height: 357) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout page="symptoms">
      <SEO title="Symptoms" />
      <Main>
        <Title>Covid-19</Title>
        <Section>
          <Container>
            <h1>Symptoms</h1>
            <p>The most common symptoms of COVID-19 are:</p>
            <SymptomImages />
            <p style={{ lineHeight: "2rem" }}>
              People who have contracted the virus{" "}
              <strong>
                <span style={{ color: "#fea3a8" }}>
                  may take up to 14 days before showing any symptoms.
                </span>
              </strong>{" "}
              If you display any symptoms, do seek medical attention.
            </p>

            <p style={{ fontSize: "1rem", fontWeight: "100" }}>
              Source:{" "}
              <OutboundLink href="https://www.who.int/health-topics/coronavirus#tab=tab_3">
                World Health Organization (WHO)
              </OutboundLink>
            </p>
          </Container>
          <div>
            <Img fixed={data.placeholderImage.childImageSharp.fixed} />
          </div>
        </Section>
      </Main>
      <Footer>
        © {new Date().getFullYear()}, Built with 💜
        {` `}
        <OutboundLink href="https://www.gatsbyjs.org">Gatsby</OutboundLink>
      </Footer>
    </Layout>
  )
}

export default SymptomsPage
