import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"

// This component only appears for smaller device widths < 800px
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#FEA3A8`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0`,
        padding: `0`,
        textAlign: `center`,
      }}
    >
      <Logo width="3rem" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
