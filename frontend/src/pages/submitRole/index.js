import React from "react"
import classes from "./submitRole.module.css"

const SubmitRole = () => {
  return (
    <section className={classes.SubmitRoleContainer}>
      <h5>Submit A Role</h5>
      <p>
        Are you a group in Astoria looking for volunteers? Roles are positions
        in your organization that require a commitment over a period of weeks or
        months and may require a specific skill set. Fill out the form below and 
        we will add your open role to the site upon approval!
      </p>

      <iframe 
        className="airtable-embed airtable-dynamic-height" 
        src="https://airtable.com/embed/shruLzApF5HT3A6rZ?backgroundColor=yellow" 
        frameborder="0" 
        onmousewheel="" 
        width="100%" 
        height="3134" 
        style={{background: 'transparent', border: '1px solid #ccc'}}>
        </iframe>

      <a href="mailto:team@astoria.digital">
        <button className={classes.Button}>Contact Us</button>
      </a>
    </section>
  )
}

export default SubmitRole
