import styled from "styled-components"

export const PostWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-row: 3 / span 5;
  background-color: ${props => props.theme.colors.dark1};
  color: ${props => props.theme.colors.dark3};
  padding: 4rem 6rem;
  box-shadow: ${props => props.theme.shadows.shadow1};
  z-index: 10;

  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.colors.dark3};
  }

  h1:not(:first-child),
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }

  code {
    font-family: ${props => props.theme.fonts.code};
    font-size: 1rem;
    color: ${props => props.theme.colors.dark2};
    background: ${props => props.theme.colors.main2};
    padding: 0 0.3rem;
  }

  h1 {
    color: ${props => props.theme.colors.main3};
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 400;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.375rem;
    line-height: 1.625rem;
    font-weight: 700;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  h5 {
    font-size: 1.25rem;
    line-height: 1.375rem;
    font-weight: 700;
  }

  h6 {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 400;
    color: ${props => props.theme.colors.dark3};
    margin-top: 1.5rem;
  }

  a {
    color: ${props => props.theme.colors.main1};
    text-decoration: underline;
  }

  strong {
    font-weight: 700;
    color: ${props => props.theme.colors.main3};
  }

  em {
    font-style: italic;
    color: ${props => props.theme.colors.main3};
  }

  del {
    text-decoration: line-through;
  }

  blockquote p {
    font-style: italic;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
  }

  ul,
  ol {
    color: ${props => props.theme.colors.dark3};
    margin: 1rem 0 1rem 2rem;
  }

  li {
    margin: 0.25rem 0;
  }

  hr {
    border: 0;
    height: 2px;
    background: ${props => props.theme.colors.light2};
    opacity: 0.5;
    max-width: 50%;
    margin: 0 auto;
    margin-top: 2rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 2rem 3rem;
  }
`
