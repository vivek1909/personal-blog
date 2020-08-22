import React from "react"
import { Container, Image, Content, Card } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <Image />
      <Content>
        <Card
          date="21/05/2020"
          title="Lol"
          excerpt="hello and welcome to my blog"
          slug="/first-post"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
