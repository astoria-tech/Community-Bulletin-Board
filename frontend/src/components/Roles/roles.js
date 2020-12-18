import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SingleRole from "./SingleRole/singleRole"
import classes from "./roles.module.css"

const Roles = () => {
  const data = useStaticQuery(graphql`
    query GetRolesQuery {
      allRole {
        totalCount
        edges {
          node {
            description {
              Community_Group
              Group_Description
              How_To_Get_Started
              Is_it_approved_
              Is_this_group_based_in_Astoria__Queens_
              Is_this_role_remote_or_in_person_
              More_Information
              Role
              Role_Description
              Status
              Tech_Needs
              Time_Commitment
              Website
              How_to_get_started_link
            }
            id
          }
        }
      }
    }
  `)

  return (
    <section>
      {data.allRole.edges.map(role => {
        if (role.node.description.Is_it_approved_) {
          return (
            <SingleRole
              key={role.node.id}
              role={role.node.description.Role}
              roleDescription={role.node.description.Role_Description}
              communityGroup={role.node.description.Community_Group}
              isRemote={
                role.node.description.Is_this_role_remote_or_in_person_[0] ===
                "remote"
                  ? true
                  : false
              }
              status={role.node.description.Status}
              techNeeds={role.node.description.Tech_Needs}
              isInAstoria={
                role.node.description.s_this_group_based_in_Astoria__Queens_
              }
              website={role.node.description.Website}
              groupDescription={role.node.description.Group_Description}
              howToGetStarted={role.node.description.How_To_Get_Started}
              howToGetStartedLink={
                role.node.description.How_to_get_started_link
              }
              timeCommitment={role.node.description.Time_Commitment}
              moreInformation={role.node.description.More_Information}
            />
          )
        } else return null
      })}
    </section>
  )
}

export default Roles
