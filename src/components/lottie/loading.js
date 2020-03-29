import React from "react"
import Lottie from "react-lottie"
import animationData from "./json/loading.json"

const LoadingLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return <Lottie options={defaultOptions} height={100} width={100} />
}

export default LoadingLottie
