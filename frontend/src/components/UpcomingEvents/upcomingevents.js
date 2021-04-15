import React, { useState, useEffect } from "react"
import axios from "axios"
import SingleEvent from "./SingleEvent/singleEvent"
import classes from "./upcomingevents.module.css"
import ErrorMessage from "../ErrorMessage/errorMessage"

const UpcomingEvents = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get("/api/getEvents")
      .then(res => {
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
              <SingleEvent
                eventTitle={event.fields["Event Title"]}
                key={event.id}
                eventDescription={event.fields["Event Description"]}
                eventType={event.fields["Event Type"]}
                groupName={event.fields["Group Name"]}
                groupWebsite={event.fields["Group Website"]}
                isVirtual={event.fields["Is this event virtual or in person?"]}
                location={event.fields["Location"]}
                meetingLink={event.fields["Meeting Link"]}
              />
            )
          })}
      </>
    )
  }

  return (
    <section>
      <header>
        <h1>Upcoming events</h1>
      </header>
      {showEvents}
    </section>
  )
}

export default UpcomingEvents
