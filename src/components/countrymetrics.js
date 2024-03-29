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
  overflow-y: auto;
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

const CountryMetrics = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [graphData, setGraphData] = useState([])
  const [searchValue, setSearchValue] = useState("")
  let filteredData = data.filter((country) => {
    return (
      country.country.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    )
  })

  useEffect(() => {
    const promises = [
      fetch(`https://covid19.mathdro.id/api/confirmed`),
      fetch(`https://covid19.mathdro.id/api/daily`),
    ]

    Promise.all(promises)
      .then((res) => {
        let responses = res.map((response) => response.json())
        return Promise.all(responses)
      })
      .then((json) => {
        const confirmed = json[0]
        const daily = json[1]
        // Parse countries confirmed cases data
        let countriesCount = countries.map((item) => {
          return { ...item }
        })
        for (let result of confirmed) {
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

        // Parse graph data of daily confirmed/death cases
        let graph = daily.map((day) => {
          return {
            date: day.reportDate,
            confirmed: day.totalConfirmed,
            deaths: day.deaths.total,
          }
        })
        setGraphData(graph)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
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
            <table>
              {filteredData.map((country, index) => (
                <tr key={index}>
                  <td
                    style={{
                      textAlign: "left",
                      paddingLeft: "3rem",
                      color: "#FFF376",
                    }}
                  >
                    <strong>
                      {thousands_separators(country.confirmedCount)}
                    </strong>
                  </td>
                  <td
                    style={{
                      textAlign: "left",
                      fontWeight: "100",
                      width: "40%",
                    }}
                  >
                    {country.country}
                  </td>
                </tr>
              ))}
            </table>
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
        {loading ? <LoadingLottie /> : <LineChartTrend data={graphData} />}
      </div>
      <MapPanel>
        <Map />
      </MapPanel>
    </Container>
  )
}

export default CountryMetrics
