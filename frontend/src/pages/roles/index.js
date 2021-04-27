import React, { useState, useEffect } from "react"
import axios from "axios"
import SingleRole from "./SingleRole/singleRole"
import classes from "./roles.module.css"
import ErrorMessage from "../../components/ErrorMessage/errorMessage"
import Button from "../../components/UI/Button/button"
import { Link } from "gatsby"

const Roles = () => {
  const [roles, setRoles] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get("/api/getOpen")
      .then(res => {
        setLoading(false)
        setRoles(res.data)
      })
      .catch(err => {
        setLoading(false)
        setError(err)
      })
  }, [])
  let showRoles = null
  if (loading)
    showRoles = <p style={{ textAlign: "center" }}>Loading roles...</p>
  else if (error) {
    showRoles = <ErrorMessage />
  } else {
    showRoles = (
      <>
        {roles &&
          roles.map(role => {
            return (
              <SingleRole
                key={role.id}
                role={role.fields.Role}
                roleDescription={role.fields["Role Description"]}
                communityGroup={role.fields["Community Group"]}
                isRemote={
                  role.fields["Is this role remote or in person?"][0] ===
                  "remote"
                    ? true
                    : false
                }
                status={role.fields.Status}
                techNeeds={role.fields["Tech Needs"]}
                isInAstoria={
                  role.fields["is this group based in Astoria Queens?"]
                }
                website={role.fields.Website}
                groupDescription={role.fields["Group Description"]}
                howToGetStarted={role.fields["How To Get Started"]}
                howToGetStartedLink={role.fields["How to get started link"]}
                timeCommitment={role.fields["Time Commitment"]}
                moreInformation={role.fields["More Information"]}
              />
            )
          })}
      </>
    )
  }

  return (
    <section className={classes.RolesContainer}>
      <div className={classes.RolesHeader}>
        <div>
          <h1>OPEN VOLUNTEER ROLES</h1>
          <div className={classes.MobileOnly}>
            {" "}
            <span className={classes.SubmitRole}>
              <p>
                Review roles posted below and reach out to the groups that you
                are interested in volunteering with. If you are a volunteer
                group, <Link to="/submitRole">Submit a Role!</Link>{" "}
              </p>
            </span>
          </div>
          <span className={classes.DesktopOnly}>
            <Button link="/submitRole">Submit A Role</Button>
          </span>
        </div>
      </div>
      {showRoles}
      <div className={classes.Description}>
        <h2>HAVE A ROLE THAT NEEDS FILLED?</h2>
        <p>
          Are you a group in Astoria looking for volunteers? Roles are positions
          in your organization that require a commitment over a period of weeks
          or months and may require a specific skill set. Fill out the form and
          we will add your open role to the site upon approval!
          <br />
          <br/>
          <Button link="/submitRole">Submit A Role</Button>
        </p>
      </div>
      <div className={classes.Description}>
        <h2>about our volunteer roles</h2>
        <p>
          Roles are positions in a volunteer group that require a commitment
          over a period of weeks or months and may require a specific skill set.
          The aim of this project is to engage volunteers with much needed
          organizing and long term roles. This was created by a group of
          volunteers from <a href="http://astoria.digital/">Astoria Digital</a>,
          collaborating with the{" "}
          <a href="https://www.astoriamutualaid.com/">
            Astoria Mutual Aid Network.
          </a>
        </p>
      </div>
    </section>
  )
}

export default Roles
