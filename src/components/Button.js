import React from "react"
import { ButtonWrapper } from "../elements"

export const Button = ({ children, href }) => {
  return <ButtonWrapper to={href}>{children}</ButtonWrapper>
}
