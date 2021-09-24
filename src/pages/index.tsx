import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import AllRecipies from '../components/AllRecipies';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="This is home page" />
      <main className="px-2 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="relative mb-4">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="main-img"
            placeholder="tracedSVG"
            layout="fullWidth"
            className="md:max-h-96"
          />
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black opacity-50">
            <div className="flex flex-col items-center space-y-6 text-white">
              <h1 className="text-5xl font-bold tracking-wider">
                Simply Recipes
              </h1>
              <h3 className="text-2xl font-semibold tracking-wider">
                No Fluff, Just Recipes
              </h3>
            </div>
          </div>
        </div>

        <AllRecipies />
      </main>
    </Layout>
  );
}
