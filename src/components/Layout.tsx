import React from "react"
import Header from "@components/Header"
import Footer from "@components/Footer"

interface Layout {
  children: React.ReactNode
}

function Layout({ children }: Layout) {
  return (
    <>
      <Header />
       {children}
      <Footer />
    </>
  )
}

export default Layout
