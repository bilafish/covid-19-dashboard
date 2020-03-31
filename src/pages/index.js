import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalMetrics from "../components/globalmetrics"
import CountryMetrics from "../components/countrymetrics"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;

  @media (min-width: 800px) {
    position: absolute;
    left: 6rem;
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
    grid-column: 1 / 12;
    grid-row: 1 / 2;
  }
`

const IndexPage = () => {
  const matches = useMediaQuery("(min-width:800px)")
  return (
    <Layout>
      <SEO title="Home" />
      <Main>
        <Title>Covid-19</Title>
        <GlobalMetrics />
        <CountryMetrics />
        {!matches && (
          <footer style={{ marginBottom: "1.5rem" }}>
            © {new Date().getFullYear()}, Built with 💜
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        )}
      </Main>
    </Layout>
  )
}

export default IndexPage
