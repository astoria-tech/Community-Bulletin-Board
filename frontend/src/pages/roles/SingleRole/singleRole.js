import React, { useState } from "react"
import classes from "./singleRole.module.css"
import normalizeUrl from "normalize-url"

const SingleRole = ({
  role,
  roleDescription,
  isRemote,
  techNeeds,
  timeCommitment,
  howToGetStarted,
  howToGetStartedLink,
  communityGroup,
  moreInformation,
  groupDescription,
  website,
}) => {
  const [show, setShow] = useState(false)
  const readMore = show ? classes.Show : classes.NotShow

  return (
    <dl className={classes.SingleRoleContainer}>
      <div className={classes.HeaderContainer}>
        <div className={classes.Role}>
          <dt className={classes.visuallyHidden}>Role</dt>
          <dd>
            <h2>{role}</h2>
          </dd>
        </div>
        <div className={classes.Remote}>
          <dt className={classes.visuallyHidden}>Is it remote</dt>
          <dd className={classes.IsRemote}>
            <h6>{isRemote ? "Remote" : "On-site"}</h6>
          </dd>
          <dd className={classes.TimeCommitment}>
            <h6>{timeCommitment}</h6>
          </dd>
        </div>
      </div>
      <dt className={classes.visuallyHidden}>Role description</dt>
      <dd className={classes.Description}>{roleDescription}</dd>
      <div className={readMore}>
        <dt>Tech Needs</dt>
        <dd>{techNeeds}</dd>
        <dt>Time Commitment</dt>
        <dd>{timeCommitment}</dd>
        <dt>How To Get Started</dt>
        <dd>
          {howToGetStarted}
          <br />
          <a href={howToGetStartedLink}>{howToGetStartedLink}</a>
        </dd>
        <dt>{communityGroup}</dt>
        <dd>{groupDescription}</dd>
        <div className={classes.ContactsContainer}>
          <div className={classes.Contact}>
            <a href={`mailto:${moreInformation}`}>
              Send {communityGroup} An Email
            </a>
          </div>
          <div className={classes.Contact}>
            <a href={normalizeUrl(`${website}`)}>Join {communityGroup} here</a>
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

export default SingleRole
