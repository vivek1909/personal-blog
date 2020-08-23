import React from "react"
import Img from "gatsby-image"
import { ImageWrapper } from "../elements"
import { useStaticQuery, graphql } from "gatsby"

export const Image = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "feature.jpg" } }) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

  return (
    <ImageWrapper>
      <Img
        fixed={fixed ? fixed : data.imageSharp.fixed}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </ImageWrapper>
  )
}
