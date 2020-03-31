import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalMetrics from "../components/globalmetrics"
import CountryMetrics from "../components/countrymetrics"

const Main = styled.div`
  position: absolute;
  left: 6rem;
  height: 100%;
  display: grid;
  width: calc(100% - 6rem);
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
`

const Title = styled.h2`
  color: #fea3a8;
  grid-column: 1 / 12;
  grid-row: 1 / 2;
  padding: 0 1.5rem;
  justify-self: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main>
      <Title>Covid-19</Title>
      <GlobalMetrics />
      <CountryMetrics />
    </Main>
  </Layout>
)

export default IndexPage
