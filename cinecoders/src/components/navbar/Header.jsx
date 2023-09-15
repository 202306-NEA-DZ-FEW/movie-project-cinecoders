import React from "react"
import NavBar from "./Nav"

const Header = () => {
  return (
    <header className="bg-black mx-auto sticky top-0 z{1000} p-8">
      <NavBar />
    </header>
  )
}

export default Header