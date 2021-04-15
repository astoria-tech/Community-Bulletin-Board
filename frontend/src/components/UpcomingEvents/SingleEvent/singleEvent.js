import React, { useState } from "react"
import classes from "./singleEvent.module.css"

const SingleEvent = ({
  eventTitle,
  eventDescription,
  groupName,
  groupWebsite,
  isVirtual,
  location,
  meetingLink,
}) => {
  const [show, setShow] = useState(false)
  const readMore = show ? classes.Show : classes.NotShow

  return (
    <div>
      <div className={classes.EventContainer}>
        <div className={classes.Event}>
          <span>
            {" "}
            {eventTitle}{" "}
            <button
              className={classes.Button}
              onClick={() => {
                setShow(prev => !prev)
              }}
            >
              {show ? "-" : "+"}
            </button>
          </span>
          {show ? <div className={readMore}>{eventDescription}</div> : null}
        </div>
      </div>
    </div>
  )
}

export default SingleEvent
