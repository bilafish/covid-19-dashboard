import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PreventionTips from "../components/preventiontips"
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
  width: 60%;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0 1.5rem;
  }
`

const PreventionPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "prevention-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 941) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout page="prevention">
      <SEO title="Prevention" />
      <Main>
        <Title>Covid-19</Title>
        <Section>
          <Container>
            <h1>Prevention</h1>
            <p style={{ lineHeight: "2rem", color: "#FFF376" }}>
              <strong>
                Let's be socially responsible, we can do our part to fight
                COVID-19 together.
              </strong>
            </p>
            <p>
              You can protect yourself and your family, and do your part to
              prevent the spread of the virus by following these guidelines:
            </p>
            <PreventionTips />
            <p style={{ fontSize: "1rem", fontWeight: "100" }}>
              Source:{" "}
              <OutboundLink href="https://www.who.int/health-topics/coronavirus#tab=tab_2">
                World Health Organization (WHO)
              </OutboundLink>
            </p>
          </Container>
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

export default PreventionPage
