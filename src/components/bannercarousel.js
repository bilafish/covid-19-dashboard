import React from "react"
import Slider from "infinite-react-carousel"
import CovidVirusLottie from "./lottie/covidvirus"
import MaskLottie from "./lottie/mask"
import ArrowIcon from "../images/icons/right-arrow.svg"
import styled from "styled-components"
import { navigate } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const StyledCarousel = styled.div`
  grid-column: 7 / 9;
  grid-row: 1 / 6;
  background: #5d98a2;
  color: inherit;
  height: 15rem;
  border-radius: 1rem;
  margin-bottom: 4rem;
  width: 15rem;
  opacity: 0.8;
  @media (max-width: 800px) {
    margin: 1rem 0 0 0;
    width: 80%;
  }
`

const StyledBanner = styled.div`
  cursor: pointer;
`

const BannerCarousel = () => {
  const settings = {
    arrows: false,
    dots: true,
  }
  return (
    <StyledCarousel>
      <Slider {...settings}>
        <OutboundLink href="https://www.who.int/health-topics/coronavirus#tab=tab_3">
          <StyledBanner
            onClick={(event) => {
              // navigate("/symptoms")
            }}
          >
            <CovidVirusLottie />
            <div
              style={{
                margin: "0 6px 0 6px",
                fontWeight: "600",
                fontSize: "1.1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ width: "70%" }}>
                Read about the known symptoms
              </span>
              <ArrowIcon width="25" fill="white" />
            </div>
          </StyledBanner>
        </OutboundLink>

        <OutboundLink href="https://www.who.int/health-topics/coronavirus#tab=tab_2">
          <StyledBanner>
            <MaskLottie />
            <div
              style={{
                margin: "0 6px 0 6px",
                fontWeight: "600",
                fontSize: "1.1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ width: "65%" }}>Fight Covid-19 together</span>
              <ArrowIcon width="25" fill="white" />
            </div>
          </StyledBanner>
        </OutboundLink>
      </Slider>
    </StyledCarousel>
  )
}

export default BannerCarousel
