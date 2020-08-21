import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialIcons,
  FooterSocialWrapper,
  P,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
      codepen: file(relativePath: { eq: "codepen.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://twitter.com/vivek96_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.twitter.publicURL} alt="twitter logo" />
          </a>
          <a
            href="https://linkedin.com/in/vivek-mittal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="linkedin logo" />
          </a>
          <a
            href="https://instagram.com/vivek96_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.instagram.publicURL} alt="instagram logo" />
          </a>
          <a
            href="https://codepen.io/vivek-mittal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.codepen.publicURL} alt="codepen logo" />
          </a>
          <a
            href="https://github.com/vivek1909"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.github.publicURL} alt="github logo" />
          </a>
        </FooterSocialIcons>
        <P size="xSmall">© 2020</P>
        <P size="xSmall">All rights reserved</P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
