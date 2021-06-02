import React, { useState } from "react"
import { DateTime } from "luxon"
import classes from "./singleEvent.module.css"
import normalizeUrl from "normalize-url"

const SingleEvent = ({
  eventTitle,
  eventDescription,
  groupName,
  groupWebsite,
  isVirtual,
  location,
  meetingLink,
  date,
}) => {
  const [show, setShow] = useState(false)
  const readMore = show ? classes.EventDescription : classes.NotShow
  const dt = DateTime.fromISO(date)

  console.log(dt)
  return (
    <>
      <div className={classes.EventTitleContainer}>
        <span className={classes.EventTitle}>
          <span className={classes.DateLocation}>
            {dt.toLocaleString({
              month: "short",
              day: "numeric",
              year: "numeric",
            })}{" "}
            {location ? `- ${location}` : null} <br />
          </span>
          {eventTitle}
        </span>
        <button
          className={classes.Button}
          onClick={() => {
            setShow(prev => !prev)
          }}
        >
          {show ? "-" : "+"}
        </button>
      </div>
      <div className={readMore}>
        {eventDescription}
        <br />
        {meetingLink ? (
          <a href={normalizeUrl(`${meetingLink}`)}>
            Please check out this link for more information
          </a>
        ) : null}
        <br />
      </div>
    </>
  )
}

export default SingleEvent
