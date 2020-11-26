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
  border-radius: 2rem;
  height: 300px;
  object-fit: cover;
  margin: 0 0 1rem 0;
  box-shadow: 0 12.5px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  @media (max-width: 768px) {
    height: 300px;
  }
  &:hover {
    transform: scale(1.05);
  }
  
  
`

const PersonelImages = ({ image }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: allFile(
        filter: { relativeDirectory: { eq: "personel" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return image == 0 ? (
    <StyledImg fluid={data.placeholderImage.nodes[0].childImageSharp.fluid} />
  ) : image == 1 ? (
    <StyledImg fluid={data.placeholderImage.nodes[1].childImageSharp.fluid} />
  ) : image == 2 ? (
    <StyledImg fluid={data.placeholderImage.nodes[2].childImageSharp.fluid} />
  ) : (
    <StyledImg fluid={data.placeholderImage.nodes[3].childImageSharp.fluid} />
  )
}

export default PersonelImages
