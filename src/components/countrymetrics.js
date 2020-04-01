import React, { useState, useEffect } from "react"
import styled from "styled-components"
import LoadingLottie from "../components/lottie/loading"
import SearchBar from "../components/searchbar"
import LineChartTrend from "../components/linechart"
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
    margin: 0 0 0 1rem;
    height: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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
  height: 70%;
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
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState("")
  let filteredData = data.filter((country) => {
    return (
      country.country.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    )
  })

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
        // Sort country data by highest confirmed cases
        countries.sort(arraySorter("confirmedCount", "desc"))
        setData(countries)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <Container>
      <div style={{ width: "40%", paddingTop: "1rem", paddingLeft: "1rem" }}>
        <Header>
          <SearchBar handler={setSearchValue} />
          <h4>Confirmed Cases by Country</h4>
        </Header>
        <CountriesList>
          {loading ? (
            <LoadingLottie />
          ) : (
            <>
              {filteredData.map((country, index) => (
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
      <div
        style={{
          alignSelf: "center",
          paddingTop: "1rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <LineChartTrend />
      </div>
    </Container>
  )
}

export default CountryMetrics
