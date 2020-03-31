import React, { useState, useEffect } from "react"
import styled from "styled-components"
import LoadingLottie from "../components/lottie/loading"
import { countriesHashmap, countries } from "../utils/countrieshashmap"
import thousands_separators from "../utils/numberformatter"

const Container = styled.div`
  grid-column: 1 / 12;
  grid-row: 5 / 11;
  background: #6b809e;
  margin-left: 1rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-self: center;
  width: 38rem;
`

const SearchBar = styled.input.attrs((props) => ({
  // we can define static props
  type: "search",
  placeholder: "Search",
}))`
  -webkit-appearance: textfield;
  background-color: #2c4975;
  background-image: url(https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-magnifier-5.png&r=249&g=194&b=255);
  background-position: 9px center;
  background-repeat: no-repeat no-repeat;
  border: 1px solid #2c4975;
  border-radius: 10em;
  box-sizing: content-box;
  font-size: 1rem;
  outline: none;
  padding: 9px 10px 9px 32px;
  transition: all 0.5s;
  width: 5rem;
  color: #fdf9ed;

  ::-webkit-search-cancel-button {
    position: relative;
    right: 20px;
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 10px;
  }
`

const CountriesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  overflow: auto;
  height: 85%;
  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  scrollbar-color: red;
  ::-webkit-scrollbar-track {
    background: #7a8da8;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #cac7be;
    border-radius: 10rem;
    border: 5px solid #cac7be;
  }
`
const CountriesListRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 10rem;
  margin-bottom: 0.5rem;
`

const CountryMetrics = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/confirmed`)
      .then((response) => response.json())
      .then((resultData) => {
        for (let result of resultData) {
          if (countriesHashmap.hasOwnProperty(result.countryRegion)) {
            countries[countriesHashmap[result.countryRegion]].confirmedCount +=
              result.confirmed
          } else {
            console.log(result.countryRegion)
          }
        }
        console.log(countries)
        setData(countries)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <Container>
      <div style={{ width: "100%" }}>
        <h4>Confirmed Cases by Country</h4>
        <CountriesList>
          {loading ? (
            <LoadingLottie />
          ) : (
            <>
              {countries.map((country) => (
                <CountriesListRow>
                  <span
                    style={{
                      width: "50%",
                      textAlign: "left",
                      color: "#FFF376",
                    }}
                  >
                    <strong>
                      {thousands_separators(country.confirmedCount)}
                    </strong>
                  </span>
                  <span
                    style={{
                      width: "50%",
                      textAlign: "left",
                      fontWeight: "100",
                    }}
                  >
                    {country.country}
                  </span>
                </CountriesListRow>
              ))}
            </>
          )}
        </CountriesList>
      </div>
    </Container>
  )
}

export default CountryMetrics
