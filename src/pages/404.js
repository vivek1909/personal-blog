import React from "react"
import { graphql } from "gatsby"
import { Container, Content, Image, Button } from "../components"
import { H1 } from "../elements"

const notFound = ({ data }) => {
  const featureImage = data.imageSharp.fixed

  return (
    <Container>
      <Image fixed={featureImage} />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Oops ... page not found 🥺
        </H1>
        <Button href="/">Go home</Button>
      </Content>
    </Container>
  )
}

export default notFound

export const notFoundQuery = graphql`
  query NotFoundQuery {
    imageSharp(fixed: { originalName: { eq: "not-found.jpg" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
