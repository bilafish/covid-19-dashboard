import React from "react"
import styled from "styled-components"
import Logo from "../images/logo.svg"
import GithubIcon from "../images/icons/github.svg"
import SymptomsIcon from "../images/icons/symptoms.svg"
import PreventionIcon from "../images/icons/prevention.svg"
import HomeIcon from "../images/icons/home.svg"
import { navigate } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const BasicNav = styled.div`
  position: fixed;
  width: 5rem;
  height: 100%;
  background: #fea3a8;
  left: 0;
  top: 0;
  text-align: center;
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0 0 1rem;
  margin-bottom: 1rem;
`

const NavItem = styled.div`
  background: ${(props) => (props.active ? "#2c4975" : "")};
  width: 100%;
  border-radius: 1rem 0 0 1rem;
  padding: 1rem 0;
  cursor: pointer;
`

const SideNavBar = (props) => {
  return (
    <BasicNav>
      <Logo width="3rem" />
      <NavContainer>
        <NavItem
          onClick={(event) => {
            event.preventDefault()
            navigate("/")
          }}
          active={props.active === "home" ? true : false}
        >
          <HomeIcon fill={props.active === "home" ? "#fdf9ed" : "#2c4975"} />
        </NavItem>
        <NavItem
          onClick={(event) => {
            event.preventDefault()
            navigate("/symptoms")
          }}
          active={props.active === "symptoms" ? true : false}
        >
          <SymptomsIcon
            fill={props.active === "symptoms" ? "#fdf9ed" : "#2c4975"}
          />
        </NavItem>
        <NavItem
          onClick={(event) => {
            event.preventDefault()
            navigate("/prevention")
          }}
          active={props.active === "prevention" ? true : false}
        >
          <PreventionIcon
            fill={props.active === "prevention" ? "#fdf9ed" : "#2c4975"}
          />
        </NavItem>
      </NavContainer>
      <OutboundLink href="https://github.com/bilafish/covid-19-dashboard">
        <GithubIcon
          style={{ position: "relative", top: "calc(100vh - 25rem)" }}
          fill="#cb8286"
        />
      </OutboundLink>
    </BasicNav>
  )
}

export default SideNavBar
