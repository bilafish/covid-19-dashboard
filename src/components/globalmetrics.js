import React, { useState, useEffect } from "react"
import styled from "styled-components"
import LoadingLottie from "../components/lottie/loading"
import parseDate from "../utils/dateparser"
import thousands_separators from "../utils/numberformatter"
import UpIcon from "../images/icons/up-triangle.svg"

const Container = styled.div`
  grid-column: 1 / 8;
  grid-row: 2 / 6;
  align-self: start;
  justify-self: center;
  width: 100%;
  @media (min-width: 800px) {
    margin-left: 3rem;
  }
`
const Title = styled.div`
  font-size: 1.5rem;
  margin-left: 1.5rem;
  text-align: left;
  @media (max-width: 800px) {
    margin-left: 0;
    text-align: center;
  }
`

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
  box-shadow: 0.1rem 0.1rem 0.5rem #56667e;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  width: 100%;
  @media (max-width: 800px) {
    justify-content: center;
  }
`

const DataLastUpdatedLabel = styled.div`
  margin-left: 1.5rem;
  font-size: 0.8rem;
  text-align: center;
  @media (min-width: 800px) {
    text-align: left;
  }
`

const calculateDelta = (current, previous) => {
  return (((current - previous) / previous) * 100).toFixed(1)
}

const GlobalMetrics = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    // Using Promise.all to manage multiple fetch requests
    const promises = [
      fetch(`https://covid19.mathdro.id/api`),
      fetch(`https://covid19.mathdro.id/api/daily`),
    ]

    Promise.all(promises)
      .then((res) => {
        let responses = res.map((response) => response.json())
        return Promise.all(responses)
      })
      .then((json) => {
        const current = json[0]
        const daily = json[1]
        const yesterday = daily[daily.length - 1]
        // Calculate delta change in Confirmed cases
        const deltaConfirmed = calculateDelta(
          current.confirmed.value,
          yesterday.confirmed.total
        )
        const deltaDeaths = calculateDelta(
          current.deaths.value,
          yesterday.deaths.total
        )

        setData({
          confirmed: {
            value: thousands_separators(current.confirmed.value),
            delta: deltaConfirmed,
          },
          recovered: thousands_separators(current.recovered.value),
          deaths: {
            value: thousands_separators(current.deaths.value),
            delta: deltaDeaths,
          },
          lastUpdated: parseDate(current.lastUpdate),
        })
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <Container>
      <Title>Global Trend</Title>
      <CardContainer>
        {loading ? (
          <LoadingLottie />
        ) : (
          <>
            <BasicCard>
              <span>Confirmed</span>
              <h2 style={{ color: "#FFF376" }}>{data.confirmed.value}</h2>
              {data.deaths.delta > 0 ? (
                <span
                  style={{
                    fontWeight: "100",
                    color: "#e4e0d5",
                    fontSize: "0.95rem",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  {data.confirmed.delta}%
                  <UpIcon
                    width="0.8rem"
                    fill="#67a9b4"
                    style={{ marginLeft: "0.5rem" }}
                  />{" "}
                </span>
              ) : (
                <p></p>
              )}
            </BasicCard>
            <BasicCard>
              <span>Recovered</span>
              <h2 style={{ color: "#81D3E1" }}>{data.recovered}</h2>
            </BasicCard>
            <BasicCard>
              <span>Deaths</span>
              <h2 style={{ color: "#FEA3A8" }}>{data.deaths.value}</h2>
              {data.deaths.delta > 0 ? (
                <span
                  style={{
                    fontWeight: "100",
                    color: "#e4e0d5",
                    fontSize: "0.95rem",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  {data.deaths.delta}%
                  <UpIcon
                    width="0.8rem"
                    fill="#67a9b4"
                    style={{ marginLeft: "0.5rem" }}
                  />{" "}
                </span>
              ) : (
                <p></p>
              )}
            </BasicCard>
          </>
        )}
      </CardContainer>
      {data && (
        <DataLastUpdatedLabel>
          Last Updated at {data.lastUpdated}
        </DataLastUpdatedLabel>
      )}
    </Container>
  )
}

export default GlobalMetrics
