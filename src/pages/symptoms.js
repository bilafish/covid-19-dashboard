import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Footer = styled.footer`
  margin: 3rem 0 1rem 1rem;
  padding-left: 6rem;
  @media (max-width: 800px) {
    margin: 0 0 1rem 0;
    padding: 0;
  }
`

const SymptomsPage = () => {
  return (
    <Layout page="symptoms">
      <SEO title="Symptoms" />
      <Main>
        <Title>Covid-19</Title>
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
