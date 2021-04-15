import React from "react"
import About from "../components/About/about"
import UpcomingEvents from "../components/UpcomingEvents/upcomingevents"
import "./index.css"

const IndexPage = () => {
  return (
    <>
      <UpcomingEvents />
      <About />
    </>
  )
}

export default IndexPage
