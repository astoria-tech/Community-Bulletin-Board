import React, { useState, useEffect } from "react"
import axios from "axios"
import classes from "./directory.module.css"
import ErrorMessage from "../../components/ErrorMessage/errorMessage"
import SingleOrganization from "./SingleOrganization/Singleorganization"
import Button from "../../components/UI/Button/button"
import { Link } from "gatsby"

const Directory = () => {
  const [groups, setGroups] = useState([])
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

  function displayGroupColumn(column) {
    return (
      <ul className={classes.Groups}>
        {column.map(group => {
          return (
            <li key={group.id}>
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

  let showGroups = null
  if (loading)
    showGroups = <p style={{ textAlign: "center" }}>Loading groups...</p>
  else if (error) {
    showGroups = <ErrorMessage />
  } else if (groups.length) {
    // SPLIT GROUPS IN TWO ARRAYS AND DISPLAY EACH IN A SEPARATE COLUMN TO PREVENT GAPS BETWEEN CONTAINERS WITH DIFFERENT HEIGHTS
    // TODO: COME UP WITH A BETTER APPROACH TO ACHIEVE THE SAME LAYOUT
    let groupsFirstColumn = [...groups].splice(0, groups.length / 2 + 1)
    let groupsSecondColumn = [...groups].splice(groups.length / 2 + 1)
    showGroups = (
      <div className={classes.GroupsContainer}>
        {displayGroupColumn(groupsFirstColumn)}
        {displayGroupColumn(groupsSecondColumn)}
      </div>
    )
  }

  return (
    <section className={classes.Directory}>
      <header className={classes.Header}>
        <h2>COMMUNITY DIRECTORY</h2>
        <div>{/* TODO: Filter Buttons */}</div>
      </header>
      {showGroups}
    </section>
  )
}

export default Directory
