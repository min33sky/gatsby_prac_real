import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import RecipesList from '../components/RecipesList';
import SEO from '../components/SEO';

const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`;

export default function About() {
  const data = useStaticQuery(query);
  const recommendRecipes = data.allContentfulRecipe.nodes;

  return (
    <Layout>
      <SEO title="About" description="This is About Page" />
      <main className="px-4 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <section className="grid gap-4 md:grid-cols-2 ">
          <article className="lg:max-h-96 md:max-h-[500px] mb-4 flex flex-col space-y-4 md:justify-around">
            <h1 className="text-4xl font-bold">
              I'm baby coloring book poke taxidermy
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus, molestias ullam delectus libero doloribus suscipit
              dolorem perspiciatis quos vitae voluptatum placeat. Laborum
              molestiae debitis earum aut! Voluptatibus enim alias sunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quam
              inventore vero minus praesentium veritatis voluptatum obcaecati
              corrupti, fugiat natus.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="px-4 py-2 text-lg text-white bg-indigo-500"
              >
                Contact
              </Link>
            </div>
          </article>

          <div className="lg:max-h-96 md:max-h-[500px]">
            <StaticImage
              src="../assets/images/about.jpeg"
              alt="person Pouring Salt in Bowl"
              className="h-[500px] md:h-full object-cover rounded-md"
              placeholder="blurred"
            />
          </div>
        </section>

        <h2 className="my-8 text-3xl tracking-wider text-center">
          Look at This Awesomesouce!
        </h2>

        <RecipesList recipes={recommendRecipes} />
      </main>
    </Layout>
  );
}
