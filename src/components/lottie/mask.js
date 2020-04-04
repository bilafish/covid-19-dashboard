import React from "react"
import Lottie from "react-lottie"
import animationData from "./json/mask.json"

const MaskLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return <Lottie options={defaultOptions} height={150} width={150} />
}

export default MaskLottie
