import React from "react"
import SEO from "../components/seo"
import Layout from "../Layout/Layout"
import RoomPage from "../components/RoomPage/roomPage"

const Sala = ({ location }) => {
  return (
    <Layout>
      <SEO title="Sala" />
      <RoomPage location={location}/>
    </Layout>
  )
}

export default Sala
