import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Header from "./header"
import SideNavBar from "./sidenavbar"

const Layout = (props) => {
  const matches = useMediaQuery("(min-width:800px)")
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      {!matches && <Header siteTitle={data.site.siteMetadata.title} />}
      <div
        style={{
          margin: `0 auto`,
          textAlign: "center",
        }}
      >
        {matches && <SideNavBar active={props.page} />}
        <main>{props.children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
