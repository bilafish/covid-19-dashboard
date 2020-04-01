import React, { useState, useEffect } from "react"
import styled from "styled-components"
import LoadingLottie from "../components/lottie/loading"
import SearchBar from "../components/searchbar"
import { countriesHashmap, countries } from "../utils/countrieshashmap"
import thousands_separators from "../utils/numberformatter"
import arraySorter from "../utils/arraysorter"

const Container = styled.div`
  background: #6b809e;
  border-radius: 1rem;
  height: 30rem;
  margin: 1.5rem 2rem 1.5rem 2rem;
  padding: 0.5rem 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-self: center;

  box-shadow: 0.1rem 0.1rem 0.5rem #56667e;
  @media (min-width: 800px) {
    grid-column: 1 / 12;
    grid-row: 5 / 11;
    width: 38rem;
    margin: 0 0 0 1rem;
    height: 90%;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CountriesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  overflow: auto;
  height: 75%;
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
        countries.sort(arraySorter("confirmedCount", "desc"))
        setData(countries)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <Container>
      <div style={{ width: "100%", paddingTop: "1rem" }}>
        <Header>
          <SearchBar />
          <h4>Confirmed Cases by Country</h4>
        </Header>
        <CountriesList>
          {loading ? (
            <LoadingLottie />
          ) : (
            <>
              {countries.map((country, index) => (
                <CountriesListRow key={index}>
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
