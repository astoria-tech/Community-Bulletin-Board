import React, { useState, useEffect } from "react"
import axios from "axios"
import classes from "./directory.module.css"
import ErrorMessage from "../../components/ErrorMessage/errorMessage"
import SingleOrganization from "./SingleOrganization/Singleorganization"
import Button from "../../components/UI/Button/button"
import { Link } from "gatsby"

const Directory = () => {
  const [groups, setGroups] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get("/api/getCommunityGroups")
      .then(res => {
        setLoading(false)
        setGroups(res.data)
      })
      .catch(err => {
        setLoading(false)
        setError(err)
      })
  }, [])

  let showGroups = null
  if (loading)
    showGroups = <p style={{ textAlign: "center" }}>Loading groups...</p>
  else if (error) {
    showGroups = <ErrorMessage />
  } else {
    showGroups = (
      <ul className={classes.Groups}>
        {groups &&
          groups.map((group, index) => {
            let gridRowValue = 1
            let gridColumnValue = 1
            if (index % 2 !== 0) {
              gridColumnValue = 2
            }
            if (index !== 0 || index !== 1) {
              gridRowValue = index / 2 + 1
            }
            return (
              <li
                key={group.id}
                style={{ gridRow: gridRowValue, gridColumn: gridColumnValue }}
              >
                <SingleOrganization
                  name={group.fields.Name}
                  email={group.fields.Email}
                  website={group.fields.Website}
                  groupDescription={group.fields["Group Description"]}
                  instagram={group.fields.Instagram}
                  twitter={group.fields.Twitter}
                  slack={group.fields.Slack}
                  label={group.fields.Label}
                />
              </li>
            )
          })}
      </ul>
    )
  }

  return (
    <section className={classes.Directory}>
      <header className={classes.Header}>
        <h2>COMMUNITY DIRECTORY</h2>
      </header>
      {showGroups}
      <div>{/* TODO: Filter Buttons */}</div>
    </section>
  )
}

export default Directory
