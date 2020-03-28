import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalMetrics from "../components/globalmetrics"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GlobalMetrics />
  </Layout>
)

export default IndexPage
