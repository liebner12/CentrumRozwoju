import React from "react"
import SEO from "../components/seo"
import Landing from "../components/landingSection"
import Offert from "../components/offertSection"
import Layout from "../Layout/Layout"
import Room from "../components/roomSection"
import Contact from "../components/contactSection"
import About from "../components/aboutSection"
import 'bootstrap/dist/css/bootstrap.min.css';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <About />
    <Offert />
    <Room />
    <Contact />
  </Layout>
)

export default IndexPage
