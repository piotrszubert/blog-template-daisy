"use client"

import { useEffect, useState } from "react"

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const updateScrollPercentage = () => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight - windowHeight
    const scrollPosition = window.scrollY
    const percentage = (scrollPosition / documentHeight) * 100

    setScrollPercentage(percentage)
  }

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPercentage)
    return () => {
      window.removeEventListener("scroll", updateScrollPercentage)
    }
  }, [])

  const radialStyle = {
    "--value": scrollPercentage,
  }

  return (
    <progress
      className="progress progress-info"
      value={scrollPercentage}
      max="100"
    ></progress>
  )
}

export default ScrollProgress
