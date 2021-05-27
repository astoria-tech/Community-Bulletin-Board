import React, { useState } from "react"
import classes from "./singleorganization.module.css"
import normalizeUrl from "normalize-url"
import {
  EmailIcon,
  TwitterIcon,
  InstagramIcon,
  SlackIcon,
  HousingIcon,
  SustainabilityIcon,
  YouthIcon,
  PetsIcon,
  CommunityIcon,
  BurgerIcon,
  AgricultureIcon,
  MainIcon,
} from "../../../assets/index"

const Singleorganization = ({
  name,
  groupDescription,
  email,
  website,
  twitter,
  instagram,
  label,
  slack,
}) => {
  const [show, setShow] = useState(false)
  const readMore = show ? classes.Show : classes.NotShow

  function displayIcon(label) {
    switch (label) {
      case "community":
        return CommunityIcon
      case "youth":
        return YouthIcon
      case "housing":
        return HousingIcon
      case "sustainability":
        return SustainabilityIcon
      case "pets":
        return PetsIcon
      case "food":
        return BurgerIcon
      case "agriculture":
        return AgricultureIcon
      default:
        return MainIcon
    }
  }

  return (
    <dl className={classes.SingleGroupContainer}>
      <div className={classes.HeaderContainer}>
        <h2>{name}</h2>
        <span className={classes.Icon}><img src={displayIcon(label?label[0]:null)} alt={`${label?label[0]:null}`} /></span>
      </div>
      <dt className={classes.visuallyHidden}>Role description</dt>
      <dd className={classes.Description}>{groupDescription}</dd>
      <div className={readMore}>
        <div className={classes.Links}>
          <div className={classes.Social}>
            {instagram ? (
              <a href={`${instagram}`}>
                <img src={InstagramIcon} alt="instagram" />
              </a>
            ) : null}

            {twitter ? (
              <a href={`${twitter}`}>
                <img src={TwitterIcon} alt="twitter" />
              </a>
            ) : null}
            {slack ? (
              <a href={`${slack}`}>
                <img src={SlackIcon} alt="slack" />
              </a>
            ) : null}
            {email ? (
              <a href={`mailto:${email}`}>
                <img src={EmailIcon} alt="email" />
              </a>
            ) : null}
          </div>
          <div className={classes.Website}>
            {website ? (
              <a href={`${normalizeUrl(website)}`}>Org Website</a>
            ) : null}
          </div>
        </div>
      </div>
      <div className={classes.ButtonContainer}>
        <button
          className={classes.Button}
          onClick={() => {
            setShow(prev => !prev)
          }}
        >
          <p>{show ? "Less -" : "More +"}</p>
        </button>
      </div>
    </dl>
  )
}

export default Singleorganization
