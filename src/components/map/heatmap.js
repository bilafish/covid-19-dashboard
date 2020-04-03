import React, { useState } from "react"
import MapGL, { FlyToInterpolator } from "react-map-gl"
import "mapbox-gl/src/css/mapbox-gl.css"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const TOKEN = process.env.GATSBY_MAPBOX_TOKEN // Set your mapbox token here

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.829,
    longitude: -40,
    zoom: 0.9,
    bearing: 0,
    pitch: 0,
  })

  // Helper Functions
  const updateViewport = (viewport) => {
    setViewport(viewport)
  }

  const onViewportChange = (viewport2) => {
    viewport2.zoom = 14 //Whatever zoom level you want
    setViewport({ ...viewport, ...viewport2 })
  }

  const goToViewport = (longitude, latitude) => {
    onViewportChange({
      longitude,
      latitude,
      zoom: 13,
      transitionInterpolator: new FlyToInterpolator({ speed: 2 }),
      transitionDuration: "auto",
    })
  }

  return (
    <Container>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/bilafish/ck8ihuszd1auv1iqdcucvi8ol"
        onViewportChange={updateViewport}
        mapboxApiAccessToken={TOKEN}
      ></MapGL>
    </Container>
  )
}

export default Map
