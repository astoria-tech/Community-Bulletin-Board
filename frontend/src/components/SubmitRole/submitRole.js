import React from "react"
import classes from "./submitRole.module.css"

const SubmitRole = () => {
  return (
    <section className={classes.SubmitRoleContainer}>
      <h5>Submit A Role</h5>
      <p>
        Are you a group in Astoria looking for volunteers? Roles are positions
        in your organization that require a commitment over a period of weeks or
        months and may require a specific skill set. Reach out to us to add the
        volunteer position to this site!
      </p>

      <a href="mailto:team@astoria.digital"><button className={classes.Button}>Contact Us</button></a>
    </section>
  )
}

export default SubmitRole
