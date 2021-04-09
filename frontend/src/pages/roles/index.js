import React, { useState, useEffect } from "react"
import axios from "axios"
import SingleRole from "./SingleRole/singleRole"
import classes from "./roles.module.css"

const Roles = () => {
  const [roles, setRoles] = useState()
  useEffect(() => {
    axios.get("/api/getOpen").then(res => setRoles(res.data))
  }, [])
  return (
      <section className={classes.RolesContainer}>
        <header className={classes.RolesHeader}>
          <h2>Volunteer Roles Needed</h2>
        </header>
        <div className={classes.Description}>
          Roles are positions in a volunteer group that require a commitment
          over a period of weeks or months and may require a specific skill set.
        </div>
        {roles &&
          roles.map(role => {
            return (
              <SingleRole
                key={role.fields.id}
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
      </section>
  )
}

export default Roles
