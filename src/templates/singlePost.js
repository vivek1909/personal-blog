import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1 } from "../elements"
import { Container, Post, Image } from "../components"

const singlePost = ({ data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed

  return (
    <Container>
      <Image fixed={featureImage} />
      <Post>
        <H1 margin="0 0 3rem 0" color="main1">
          {data.mdx.frontmatter.title}
        </H1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
    </Container>
  )
}

export default singlePost

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        excerpt
        slug
        title
        featureImage {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
