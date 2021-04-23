import React from "react"
import About from "../components/About/about"
import Container from "../components/Container/container"
import Accordeon from "../components/UI/Button/AccordeonComponent/accordeon"
import UpcomingEvents from "../components/UpcomingEvents/upcomingevents"
import "./index.css"

const IndexPage = () => {
  return (
    <>
      <Accordeon title={"Welcome to our Community Bulletin Board!"}>
        <p>
          This bulletin is a place for community members of Astoria, Queens
          (that’s you) to better connect with the community! Head over to the
          Community Directory to learn about some of the organizations doing
          work in Astoria and how you can help further their causes. Want to
          volunteer directly? Some of them have put up long-term volunteer roles
          on our Volunteer Board! Check them out and get involved!{" "}
        </p>

        <p>
          If you’re looking for upcoming community events or relevant dates
          regarding voting deadlines, town-halls, and other things of interest,
          head on down to our calendar below! Happy Exploring!
        </p>
      </Accordeon>
      <Accordeon title={"Get Involved in the Community!"}>
        <div className="GetInvolvedContainer">
          <Container
            title={"Volunteer Roles"}
            link={{ to: "/roles", text: "Explore Roles" }}
          >
            Roles are positions in a volunteer group that require a commitment
            over a period of weeks or months and may require a specific skill
            set. The aim of this project is to engage volunteers with much
            needed organizing and long term roles.{" "}
          </Container>
          <Container
            title={"Community Directory"}
            link={{ to: "/directory", text: "Explore Directory" }}
          >
            Learn more about community groups in our neighborhood to volunteer
            or donate, and connect with them through their website, social
            media, newsletters.
            <br />


          </Container>
        </div>
      </Accordeon>
      <UpcomingEvents />
      <About />
    </>
  )
}

export default IndexPage
