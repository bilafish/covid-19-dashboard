import React, { useState, useEffect } from "react"
import styled from "styled-components"
import LoadingLottie from "../components/lottie/loading"
import parseDate from "../utils/dateparser"
import thousands_separators from "../utils/numberformatter"

const BasicCard = styled.div`
  background: #6b809e;
  padding: 1rem 1rem;
  border-radius: 0.7rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 10rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
`

const GlobalMetrics = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    // get data from API endpoint
    fetch(`https://covid19.mathdro.id/api`)
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        setData({
          confirmed: thousands_separators(resultData.confirmed.value),
          recovered: thousands_separators(resultData.recovered.value),
          deaths: thousands_separators(resultData.deaths.value),
          lastUpdated: parseDate(resultData.lastUpdate),
        })
      }) // set data
      .catch((error) => console.log(error))
  }, [])
  return (
    <>
      <h2 style={{ color: "#fea3a8" }}>Covid-19</h2>
      <span style={{ fontSize: "1.5rem" }}>Global Trend</span>
      <Container>
        {data ? (
          <>
            <BasicCard>
              <span>Confirmed</span>
              <h1 style={{ color: "#FFF376" }}>{data.confirmed}</h1>
            </BasicCard>
            <BasicCard>
              <span>Recovered</span>
              <h1 style={{ color: "#81D3E1" }}>{data.recovered}</h1>
            </BasicCard>
            <BasicCard>
              <span>Deaths</span>
              <h1 style={{ color: "#FEA3A8" }}>{data.deaths}</h1>
            </BasicCard>
          </>
        ) : (
          <LoadingLottie />
        )}
      </Container>
      {data && <p>Last Updated at {data.lastUpdated}</p>}
    </>
  )
}

export default GlobalMetrics
