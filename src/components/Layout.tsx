import React from "react"
import Header from "./Header"

interface ILayout {
  children: React.ReactNode
}

function Layout({ children }: ILayout) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
