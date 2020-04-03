import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalMetrics from "../components/globalmetrics"
import CountryMetrics from "../components/countrymetrics"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;

  @media (min-width: 800px) {
    padding-left: 6rem;
    height: 100%;
    display: grid;
    width: calc(100% - 6rem);
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }
`

const Title = styled.h2`
  color: #fea3a8;
  padding: 0 1.5rem;
  justify-self: center;
  @media (min-width: 800px) {
    padding: 0;
    margin-left: 3.5rem;
    width: 100%;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Main>
        <Title>Covid-19</Title>
        <GlobalMetrics />
        <CountryMetrics />
      </Main>
      <footer style={{ margin: "3rem 0 1rem 1rem", paddingLeft: "6rem" }}>
        © {new Date().getFullYear()}, Built with 💜
        {` `}
        <OutboundLink href="https://www.gatsbyjs.org">Gatsby</OutboundLink>
      </footer>
    </Layout>
  )
}

export default IndexPage
