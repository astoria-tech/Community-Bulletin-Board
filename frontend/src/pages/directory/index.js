import React, { useState, useEffect } from "react"
import axios from "axios"
import classes from "./directory.module.css"
import ErrorMessage from "../../components/ErrorMessage/errorMessage"
import SingleOrganization from "./SingleOrganization/singleorganization"
import FilterButton from "../../components/UI/FilterButton/filterbutton"
import Button from "../../components/UI/Button/button"
import {Link} from 'gatsby'

const Directory = () => {
  //groups are for stiring the data received from Airtable
  const [groups, setGroups] = useState([])
  //filteredGroups are for displaying the groups
  const [filteredGroups, setFilteredGroups] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState(new Map())

  // fetch all organizations
  useEffect(() => {
    setLoading(true)
    axios
      .get("/api/getCommunityGroups")
      .then(res => {
        setLoading(false)
        setGroups(res.data)
        //as no filters applied finitially, filteredGroups are the same as groups
        setFilteredGroups(res.data)
      })
      .catch(err => {
        setLoading(false)
        setError(err)
      })
  }, [])

  //set categories from the data received
  useEffect(() => {
    if (groups.length) {
      let labels = []
      for (let group of groups) {
        if (group.fields.Label && group.fields.Label.length) {
          for (let label of group.fields.Label) {
            if (!labels.includes(label)) {
              labels.push(label)
            }
          }
        }
      }
      setCategories(labels)
    }
  }, [groups])

  //filter groups if selected categories change
  useEffect(() => {
    //display all groups if no filter selected
    if (!selectedCategories.size) {
      setFilteredGroups(groups)
      //if filter was applied by user (=selectedCategories are not empty), filter based on that
    } else {
      setFilteredGroups(
        groups.filter(group => {
          for (let label of group.fields.Label) {
            if (selectedCategories.has(label)) {
              return true
            }
          }
        })
      )
    }
  }, [selectedCategories])

  function toggleCategory(category) {
    //check if the category was selected already, remove or add based on that
    if (selectedCategories.has(category)) {
      let selectedCategoriesCopy = new Map(selectedCategories)
      selectedCategoriesCopy.delete(category)
      setSelectedCategories(new Map(selectedCategoriesCopy))
    } else {
      setSelectedCategories(new Map(selectedCategories.set(category, " ")))
    }
  }

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
  let filterButtons = null
  if (loading)
    showGroups = <p style={{ textAlign: "center" }}>Loading groups...</p>
  else if (error) {
    showGroups = <ErrorMessage />
  } else if (groups.length) {
    // SPLIT GROUPS IN TWO ARRAYS AND DISPLAY EACH IN A SEPARATE COLUMN TO PREVENT GAPS BETWEEN CONTAINERS WITH DIFFERENT HEIGHTS
    // TODO: COME UP WITH A BETTER APPROACH TO ACHIEVE THE SAME LAYOUT
    let groupsFirstColumn = [...filteredGroups].splice(
      0,
      filteredGroups.length / 2 + 1
    )
    let groupsSecondColumn = [...filteredGroups].splice(
      filteredGroups.length / 2 + 1
    )
    showGroups = (
      <div className={classes.GroupsContainer}>
        {displayGroupColumn(groupsFirstColumn)}
        {displayGroupColumn(groupsSecondColumn)}
      </div>
    )
  }

  if (categories.length) {
    filterButtons = (
      <div className={classes.FilterButtonsContainer}>
         <h6>Filter By Category</h6>
        <div className={classes.FilterButtons}>
          {categories.map(category => {
            let btnType = "NotSelected"
            if (selectedCategories.has(category)) {
              btnType = "Selected"
            }
            return (
              <span className={classes.FilterButton} key={category}>
                <FilterButton
                  click={() => toggleCategory(category)}
                  btnType={btnType}
                >
                  {category}
                </FilterButton>
              </span>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <section className={classes.Directory}>
      <header className={classes.Header}>
        <h2>COMMUNITY DIRECTORY</h2>
        {filterButtons}
      </header>
      {showGroups}
      <div className={classes.Description}>
        <h2>WANT TO ADD YOUR ORGANIZATION?</h2>
        <p>
        We are looking to feature organizations across Astoria so that our neighbors can become better acqainted with services, aid groups, and other organizations that make our community strong. Interested in getting your organization added to our directory?
          <br />
          <br/>
          <Button link="/submitOrganization">Submit Your Org</Button>
        </p>
      </div>
      <div className={classes.Description}>
        <h2>ABOUT OUR COMMUNITY DIRECTORY</h2>
        <p>
        The community directory is a list showcasing local groups in Astoria, Queens. These groups are providing community services, keeping our infrastructure running, and aiding our neighbors in their times of need. Many of these organizations are run by volunteers and are always in need of a helping hand, which is why we’ve also compiled a list of <Link to="/roles">Open Volunteer Roles</Link> for those who want to get involved. This was created by a group of volunteers from <a href="http://astoria.digital/">Astoria Digital. </a>
        </p>
      </div>
    </section>
  )
}

export default Directory
