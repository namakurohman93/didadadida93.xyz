/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type ChildrenProps = { children: React.ReactNode }

const Figcaption = ({ children }: ChildrenProps) => {
  return (
    <div sx={{
      textAlign: `center`,
      variant: `styles.p`,
      fontSize: [`85%`, `90%`, `95%`, `100%`]
    }}>
      {children}
    </div>
  )
}

export default Figcaption
