import React from "react"
import { CardWrapper, P, H2 } from "../elements"
import { Button } from "../components"

export const Card = ({ date, title, excerpt, slug }) => {
  return (
    <CardWrapper>
      <P size="xSmall" textAlign="center" margin="0 0 0.5rem 0">
        {date}
      </P>
      <H2 color="light2" textAlign="center" margin="0 0 1rem 0">
        {title}
      </H2>
      <P size="small" textAlign="center" margin="0 0 1.5rem 0">
        {excerpt}
      </P>
      <Button href={slug}>Read More</Button>
    </CardWrapper>
  )
}
