import React from "react"
import classes from "./submitRole.module.css"
import Button from "../../components/UI/Button/button"
import { Link } from "gatsby"

const SubmitRole = () => {
  return (
    <section>
      <header className={classes.Header}>
        <div>
          <h2>SUBMIT A NEW ROLE</h2>
          <div className={classes.MobileOnly}>
            {" "}
            <span className={classes.ViewRoles}>
              <p>
                Are you a group in Astoria looking for volunteers? Roles are
                positions in your organization that require a commitment over a
                period of weeks or months and may require a specific skill set.
                Fill out the form and we will add your open role to the site
                upon approval! If you’re interested in volunteering,{" "}
                <Link to="/roles">View Open Roles!</Link>
              </p>
            </span>
          </div>
          <span className={classes.DesktopOnly}>
            <Button link="/roles">View Open Roles</Button>
          </span>
        </div>
      </header>
      <div className={classes.DesktopOnly}>
        <p>
          Are you a group in Astoria looking for volunteers? Roles are positions
          in your organization that require a commitment over a period of weeks
          or months and may require a specific skill set. Fill out the form
          below and we will add your open role to the site upon approval!
        </p>
      </div>

      <iframe
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shruLzApF5HT3A6rZ?backgroundColor=yellow"
        frameBorder="0"
        width="100%"
        height="3200"
        style={{ background: "transparent" }}
      ></iframe>
    </section>
  )
}

export default SubmitRole
