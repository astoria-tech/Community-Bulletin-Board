import React, { useState } from "react"
import classes from "./singleRole.module.css"

const SingleRole = ({
  role,
  roleDescription,
  isRemote,
  techNeeds,
  timeCommitment,
  howToGetStarted,
  howToGetStartedLink,
  contactForMore,
  communityGroup,
  isInAstoria,
  groupDescription,
  status,
  website,
}) => {
  const [show, setShow] = useState(false)
  const readMore = show ? classes.Show : classes.NotShow
  return (
    <dl className={classes.SingleRoleContainer}>
      <div className={classes.HeaderContainer}>
        <div className={classes.Role}>
          <dt className={classes.visuallyHidden}>Role</dt>
          <dd>{role}</dd>
        </div>
        <div className={classes.Remote}>
          <dt className={classes.visuallyHidden}>Is it remote</dt>
          <dd>{isRemote ? "remote" : "on-site"}</dd>
        </div>
      </div>
      <dt className={classes.visuallyHidden}>Role description</dt>
      <dd>{roleDescription}</dd>
      <div className={readMore}>
        <dt>Tech Needs</dt>
        <dd>{techNeeds}</dd>
        <dt>Time Commitment</dt>
        <dd>{timeCommitment}</dd>
        <dt>Contact us for more information</dt>
        <dd>{contactForMore}</dd>
      </div>
      <button
        onClick={() => {
          setShow(prev => !prev)
        }}
      >
        {show ? "less" : "more"}
      </button>
    </dl>
  )
}

export default SingleRole
