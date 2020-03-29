import React from "react"
import styled from "styled-components"

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
`
//TODO: Add data fetching from endpoint https://covid19.mathdro.id/api
const GlobalMetrics = () => {
  return (
    <Container>
      <BasicCard>
        <span>Confirmed</span>
        <h1 style={{ color: "#FFF376" }}>659,367</h1>
      </BasicCard>
      <BasicCard>
        <span>Recovered</span>
        <h1 style={{ color: "#81D3E1" }}>139,304</h1>
      </BasicCard>
      <BasicCard>
        <span>Deaths</span>
        <h1 style={{ color: "#FEA3A8" }}>30,475</h1>
      </BasicCard>
    </Container>
  )
}

export default GlobalMetrics
