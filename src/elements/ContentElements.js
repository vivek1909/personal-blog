import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-row: 3 / span 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.dark1};
  padding: 4rem 6rem;
  box-shadow: ${props => props.theme.shadows.shadow1};
  z-index: 10;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 2rem 3rem;
  }
`
