import React, { useState } from "react"
import classes from "./singleRole.module.css"
import normalizeUrl from 'normalize-url';

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

  //gatsby has known problem of appending the external link to current address if the link doesn't start with https

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
          <dd>{isRemote ? "Remote" : "On-site"}</dd>
        </div>
      </div>
      <dt className={classes.visuallyHidden}>Role description</dt>
      <dd>{roleDescription}</dd>
      <div className={readMore}>
        <dt>Tech Needs</dt>
        <dd>{techNeeds}</dd>
        <dt>Time Commitment</dt>
        <dd>{timeCommitment}</dd>
        <dt>How To Get Started</dt>
        <dd>
          {howToGetStarted}
          <br />
          <a href={howToGetStarted}>{howToGetStartedLink}</a>
        </dd>
        <dt>Contact us for more information</dt>
        <dd>
          <a href={`mailto:${moreInformation}`}>
            {moreInformation.toLowerCase()}
          </a>
        </dd>
        <dt>{communityGroup}</dt>
        <dd>{groupDescription}</dd>
        <dt className={classes.visuallyHidden}>Group website</dt>
        <dd>
          <a href={normalizeUrl(website)} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </dd>
      </div>
      <div className={classes.ButtonContainer}>
        <button
          className={classes.Button}
          onClick={() => {
            setShow(prev => !prev)
          }}
        >
          {show ? "Less -" : "More +"}
        </button>
      </div>
    </dl>
  )
}

export default SingleRole
