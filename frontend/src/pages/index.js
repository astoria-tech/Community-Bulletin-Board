import React from "react"
import Layout from "../components/layout"
import Roles from "../components/Roles/roles"
import SubmitRole from "../components/SubmitRole/submitRole"
import About from "../components/About/about"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <Roles />
    <SubmitRole />
    <About />
  </Layout>
)

export default IndexPage
