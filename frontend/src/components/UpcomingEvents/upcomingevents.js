import React, { useState, useEffect } from "react"
import axios from "axios"
import SingleEvent from "./SingleEvent/singleEvent"
import classes from "./upcomingevents.module.css"
import ErrorMessage from "../ErrorMessage/errorMessage"
import Button from "../UI/Button/Button"
import { Link } from "gatsby"

const UpcomingEvents = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get("/api/getEvents")
      .then(res => {
        console.log(res.data)
        setLoading(false)
        setEvents(res.data)
      })
      .catch(err => {
        setLoading(false)
        setError(err)
      })
  }, [])

  let showEvents = null
  if (loading)
    showEvents = <p style={{ textAlign: "center" }}>Loading events...</p>
  else if (error) {
    showEvents = <ErrorMessage />
  } else {
    showEvents = (
      <>
        {events &&
          events.map(event => {
            return (
              <div className={classes.EventContainer} key={event.id}>
                <SingleEvent
                  eventTitle={event.fields["Event Title"]}
                  key={event.id}
                  eventDescription={event.fields["Event Description"]}
                  eventType={event.fields["Event Type"]}
                  groupName={event.fields["Group Name"]}
                  groupWebsite={event.fields["Group Website"]}
                  isVirtual={
                    event.fields["Is this event virtual or in person?"]
                  }
                  location={event.fields["Location"]}
                  meetingLink={event.fields["Meeting Link"]}
                  date={event.fields["Date"]}
                />
              </div>
            )
          })}
      </>
    )
  }

  return (
    <section className={classes.Events}>
      <header>
        <h2>Upcoming events</h2>
        <span className={classes.DesktopOnly}>
          <Button link="/submitEvent">Submit an Event</Button>
        </span>
      </header>
      <div className={classes.MobileOnly}>
        <span className={classes.SubmitEvent}>
          Hosting an upcoming event in our community?{" "}
          <Link to="/submitEvent">Submit Your Event Here.</Link>
        </span>
      </div>

      {showEvents}
    </section>
  )
}

export default UpcomingEvents
