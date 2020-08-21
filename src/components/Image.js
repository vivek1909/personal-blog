import React from "react"
import { ImageWrapper } from "../elements"
import { useStaticQuery, graphql } from "gatsby"

export const Image = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      feature: file(relativePath: { eq: "feature.jpg" }) {
        publicURL
      }
    }
  `)

  return (
    <ImageWrapper>
      <img
        src={data.feature.publicURL}
        alt="featured"
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
