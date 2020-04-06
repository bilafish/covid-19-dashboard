import React, { useState, useEffect } from "react"
import styled from "styled-components"
import LoadingLottie from "../components/lottie/loading"
import SearchBar from "../components/searchbar"
import LineChartTrend from "../components/linechart"
import Map from "../components/map/heatmap"
import { countriesHashmap, countries } from "../utils/countrieshashmap"
import thousands_separators from "../utils/numberformatter"
import arraySorter from "../utils/arraysorter"

const Container = styled.div`
  background: #6b809e;
  border-radius: 1rem;
  margin: 1.5rem 2rem 1.5rem 2rem;
  padding: 0 0 0.5rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  box-shadow: 0.1rem 0.1rem 0.5rem #56667e;

  @media (min-width: 800px) {
    grid-column: 1 / 12;
    grid-row: 5/11;
    margin: 0 0 0 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    margin: 1rem 0rem 0rem 5rem;
    flex-direction: row;
    justify-content: space-evenly;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LeftPanel = styled.div`
  padding-top: 1rem;
  padding-left: 1rem;
  @media (max-width: 800px) {
    width: 100%;
    padding: 1rem 1rem;
  }
`

const MapPanel = styled.div`
  width: 500px;
  height: 350px;
  z-index: 100;
  background: #60738f;
  border-radius: 1rem;
  padding: 1rem;
  align-self: center;
  margin-right: 1rem;
  @media (max-width: 800px) {
    width: 80%;
    margin: 1rem 0 0.5rem 0;
  }
`

const CountriesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  overflow: auto;
  height: 18rem;
  @media (max-width: 800px) {
    height: 22rem;
  }
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
        let countriesCount = countries.map((item) => {
          return { ...item }
        })
        for (let result of resultData) {
          if (countriesHashmap.hasOwnProperty(result.countryRegion)) {
            countriesCount[
              countriesHashmap[result.countryRegion]
            ].confirmedCount += result.confirmed
          } else {
            countriesCount.push({
              country: result.countryRegion,
              confirmedCount: result.confirmed,
            })
          }
        }
        // Sort country data by highest confirmed cases
        countriesCount.sort(arraySorter("confirmedCount", "desc"))
        setData(countriesCount)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <Container>
      <LeftPanel>
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
      </LeftPanel>
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
      <MapPanel>
        <Map />
      </MapPanel>
    </Container>
  )
}

export default CountryMetrics
