import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Roles from '../components/Roles/roles'
import './index.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
<Roles />
  </Layout>
)

export default IndexPage
