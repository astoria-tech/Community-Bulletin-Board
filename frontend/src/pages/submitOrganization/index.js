import React from "react"
import classes from "./submitOrganization.module.css"
import Button from "../../components/UI/Button/button"
import { Link } from "gatsby"

const SubmitOrganization = () => {
  return (
    <section>
      <header className={classes.Header}>
        <div>
          <h2>SUBMIT YOUR ORGANIZATION</h2>
          <div className={classes.MobileOnly}>
            {" "}
            <span className={classes.ViewRoles}>
              <p>
                We are looking to feature organizations across Astoria so that
                our neighbors can become better aacquainted with services, aid
                groups, and other organizations that make our community strong.
                Interested in getting your organization added to our directory?
                Fill out the form and we will add you upon approval.
                <Link to="/directory">View Our Directory!</Link>
              </p>
            </span>
          </div>
          <span className={classes.DesktopOnly}>
            <Button link="/directory">View The Directory</Button>
          </span>
        </div>
      </header>
      <div className={classes.DesktopOnly}>
        <p>
          We are looking to feature organizations across Astoria so that our
          neighbors can become better acqainted with services, aid groups, and
          other organizations that make our community strong. Interested in
          getting your organization added to our directory? Fill out the form
          and we will add you upon approval.
        </p>
      </div>
      <iframe
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrlOrCIIOAtz8yCh?backgroundColor=yellow"
        frameBorder="0"
        width="100%"
        height="3200"
        style={{ background: "transparent" }}
      ></iframe>
    </section>
  )
}

export default SubmitOrganization
