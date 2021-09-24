import React from "react"

function Footer() {
  return (
    <footer className="bg-black w-full mt-4 text-white flex items-center h-12 justify-center">
      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-indigo-500">SimpleRecipes</span>. Built With{" "}
        <a
          href="https://www.gatsbyjs.com/"
          className="text-indigo-500 hover:text-pink-400"
        >
          Gatsby
        </a>
      </p>
    </footer>
  )
}

export default Footer
