import { Link } from "gatsby"
import React, { useState } from "react"
import { MenuIcon } from "@heroicons/react/outline"
import logo from "../assets/images/logo.svg"

function Header() {
  const [show, setShow] = useState(false)

  return (
    <header className=" mb-4 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <div className="flex flex-col items-center p-4 md:flex-row">
        <div className="flex w-full items-center justify-between md:w-1/4">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="md:hidden">
            <MenuIcon
              onClick={() => setShow(prev => !prev)}
              className="h-6 cursor-pointer"
            />
          </div>
        </div>

        <div
          className={`flex flex-col h-0 md:h-auto md:text-sm overflow-hidden transition-all duration-300 md:flex md:flex-row w-full divide-y-2 md:divide-y-0 md:justify-between md:px-4  ${
            show ? "h-80" : "h-0"
          }`}
        >
          <div className="md:flex md:space-x-4 divide-y-2 md:divide-y-0 ml-4">
            <Link
              className="block cursor-pointer text-center w-full py-4 text-2xl"
              to="/"
            >
              Home
            </Link>
            <Link
              className="block cursor-pointer text-center w-full py-4 text-2xl"
              to="/recipes"
            >
              Recipes
            </Link>
            <Link
              className="block cursor-pointer text-center w-full py-4 text-2xl"
              to="/tags"
            >
              Tags
            </Link>
            <Link
              className=" block cursor-pointer text-center w-full py-4 text-2xl"
              to="/about"
            >
              About
            </Link>
          </div>
          <div>
            <Link
              className="block text-pink-500 cursor-pointer text-center w-full py-4 text-2xl"
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
