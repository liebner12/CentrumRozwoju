import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
const StyledImg = styled(Img)`
    border-radius: 4rem;
    height: 500px;
    object-fit: cover;

    @media (max-width: 768px){
        height: 400px;
    }
`

const CarouselImages = ({ image }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: allFile(
        filter: { relativeDirectory: { eq: "second" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return image == 1 ? (
    <StyledImg fluid={data.placeholderImage.nodes[0].childImageSharp.fluid} />
  ) : image == 2 ? (
    <StyledImg fluid={data.placeholderImage.nodes[1].childImageSharp.fluid} />
  ) : image == 3 ? (
    <StyledImg fluid={data.placeholderImage.nodes[2].childImageSharp.fluid} />
  ) : image == 4 ? (
    <StyledImg fluid={data.placeholderImage.nodes[3].childImageSharp.fluid} />
  ): image == 5 ? (
    <StyledImg fluid={data.placeholderImage.nodes[4].childImageSharp.fluid} />
  ): image == 6 ? (
    <StyledImg fluid={data.placeholderImage.nodes[5].childImageSharp.fluid} />
  ): image == 7 ? (
    <StyledImg fluid={data.placeholderImage.nodes[6].childImageSharp.fluid} />
  ): image == 8 ? (
    <StyledImg fluid={data.placeholderImage.nodes[7].childImageSharp.fluid} />
  ): image == 9 ? (
    <StyledImg fluid={data.placeholderImage.nodes[8].childImageSharp.fluid} />
  ): (
    <StyledImg fluid={data.placeholderImage.nodes[9].childImageSharp.fluid} />
  )
}

export default CarouselImages
