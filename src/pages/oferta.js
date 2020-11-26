import React from "react"
import SEO from "../components/seo"
import Layout from "../Layout/Layout"
import OffertPage from "../components/OfertPage/offertPage"
const Oferta = ({ location }) => {
  return (
    <Layout>
      <SEO title="Oferta" />
      <OffertPage location={location}/>
    </Layout>
  )
}

export default Oferta
