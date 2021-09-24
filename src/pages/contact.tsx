import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

function Contact() {
  return (
    <Layout>
      <main className="p-4 mx-auto md:max-w-screen-xl md:space-x-4">
        <section className="flex flex-col items-center w-full md:flex-row">
          <article className="flex flex-col py-10 space-y-6 text-lg ">
            <h1 className="text-3xl font-bold">Want To Get In Touch?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              voluptatibus cupiditate beatae?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              fugiat enim at consequatur veritatis ipsum laboriosam alias quae
              recusandae veniam.
            </p>
          </article>

          <article className="flex flex-col w-full py-10 space-y-4">
            <form className="p-10 border border-gray-200 rounded-lg shadow-lg ">
              <div>
                <label htmlFor="" className="block mb-4">
                  Your Name
                </label>
                <input type="text" className="w-full mb-4 border" />
              </div>
              <div>
                <label htmlFor="" className="block mb-4">
                  Your Email
                </label>
                <input type="text" className="w-full mb-4 border" />
              </div>
              <div>
                <label htmlFor="" className="block mb-4">
                  Message
                </label>
                <textarea
                  className="w-full mb-4 outline-none"
                  rows={6}
                ></textarea>
              </div>
              <button className="w-full py-2 text-white bg-blue-600 cursor-pointer">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
      <Footer />
    </Layout>
  )
}

export default Contact
