import React from "react"
import Layout from "../components/Layout"

function Error() {
  return (
    <Layout>
      <main className="h-[82vh] w-full flex items-center justify-center">
        <section className="flex flex-col items-center">
          <h1 className="text-9xl">404</h1>
          <h3 className="text-xl">Page not found</h3>
        </section>
      </main>
    </Layout>
  )
}

export default Error
