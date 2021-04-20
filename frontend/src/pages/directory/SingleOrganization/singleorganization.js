import React, { useState } from "react"
import classes from "./singleorganization.module.css"
import normalizeUrl from "normalize-url"
import TwitterIcon from "../../../assets/i-twitter.svg"
import InstagramIcon from "../../../assets/i-instagram.svg"
import SlackIcon from "../../../assets/i-slack.svg"
import EmailIcon from "../../../assets/i-email.svg"

const Singleorganization = ({
  name,
  groupDescription,
  email,
  website,
  twitter,
  instagram,
  label,
  slack,
}) => {
  const [show, setShow] = useState(false)
  const readMore = show ? classes.Show : classes.NotShow

  return (
    <dl className={classes.SingleGroupContainer}>
      <div className={classes.HeaderContainer}>
        <div className={classes.Group}>
          <dt className={classes.visuallyHidden}>Group Name</dt>
          <dd>
            <h2>{name}</h2>
          </dd>
          <dt className={classes.visuallyHidden}>Icon</dt>
          <dd>icon here</dd>
        </div>
      </div>
      <dt className={classes.visuallyHidden}>Role description</dt>
      <dd className={classes.Description}>{groupDescription}</dd>
      <div className={readMore}>
        <dt className={classes.visuallyHidden}>Open Volunteer Roles</dt>
        <dd>dfghj</dd>
        <div className={classes.Links}>
          <div className={classes.Social}>
            {instagram ? (
              <a href={`${instagram}`}>
                <img src={InstagramIcon} alt="instagram" />
              </a>
            ) : null}

            {twitter ? (
              <a href={`${twitter}`}>
                <img src={TwitterIcon} alt="twitter" />
              </a>
            ) : null}
            {slack ? (
              <a href={`${slack}`}>
                <img src={SlackIcon} alt="slack" />
              </a>
            ) : null}
            {email ? (
              <a href={`mailto:${email}`}>
                <img src={EmailIcon} alt="email" />
              </a>
            ) : null}
          </div>
          <div className={classes.Website}>
            {website ? (
              <a href={`${normalizeUrl(website)}`}>Org Website</a>
            ) : null}
          </div>
        </div>
      </div>
      <div className={classes.ButtonContainer}>
        <button
          className={classes.Button}
          onClick={() => {
            setShow(prev => !prev)
          }}
        >
          <p>{show ? "Less -" : "More +"}</p>
        </button>
      </div>
    </dl>
  )
}

export default Singleorganization
