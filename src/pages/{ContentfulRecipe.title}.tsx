import { ClockIcon, UserIcon } from '@heroicons/react/outline';
import { graphql, Link, PageProps, useStaticQuery } from 'gatsby';
import {
  GatsbyImage,
  GatsbyImageProps,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from 'gatsby-plugin-image';
import React from 'react';
import slugify from 'slugify';
import Layout from '../components/Layout';

export type RecipyType = {
  contentfulRecipe: {
    content: {
      tags: string[];
      tools: string[];
      ingredients: string[];
      instructions: string[];
    };
    cookTime: number;
    description: {
      description: string;
    };
    image: {
      gatsbyImageData: IGatsbyImageData;
    };
    prepTime: number;
    serving: number;
    title: string;
  };
};

function RecipeTemplate({ data }: PageProps<RecipyType>) {
  const {
    content: { tags, ingredients, instructions, tools },
    cookTime,
    description: { description },
    image,
    prepTime,
    serving,
    title,
  } = data.contentfulRecipe;

  const pathToImage = getImage(image.gatsbyImageData);

  return (
    <Layout>
      <main className="container mx-auto">
        <div>
          <section className="mb-8">
            <GatsbyImage image={pathToImage} alt={title} className="" />
            <article>
              <h2 className="mb-8 text-4xl font-bold">{title}</h2>
              <p className="mb-8">{description}</p>

              <div className="flex items-center mb-8 justify-evenly">
                <div className="flex flex-col items-center">
                  <div>
                    <ClockIcon className="h-6" />
                  </div>
                  <h5>Prop Time</h5>
                  <p>{prepTime} Min</p>
                </div>
                <div className="flex flex-col items-center">
                  <div>
                    <ClockIcon className="h-6" />
                  </div>
                  <h5>Cook Time</h5>
                  <p>{cookTime} Min</p>
                </div>
                <div className="flex flex-col items-center">
                  <div>
                    <UserIcon className="h-6" />
                  </div>
                  <h5>Serving</h5>
                  <p>{serving}</p>
                </div>
              </div>

              <p className="flex items-center">
                Tags:{' '}
                {tags.map((tag, index) => {
                  const tagSlug = slugify(tag, { lower: true });
                  return (
                    <Link
                      key={index}
                      to={`/tags/${tagSlug}`}
                      className="px-2 py-1 mx-2 text-white bg-purple-600 rounded-md "
                    >
                      {tag}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>

          <section>
            <article>
              <h4 className="mb-4 text-3xl font-bold">Instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="mb-4">
                    <p className="font-bold text-purple-500">
                      step {index + 1}
                    </p>
                    <p>{item}</p>
                  </div>
                );
              })}
            </article>
            <article>
              <h4 className="mb-4 text-3xl font-bold">Ingredients</h4>
              {ingredients.map((item, index) => {
                return (
                  <div key={index} className="mb-4">
                    <p>{item}</p>
                  </div>
                );
              })}
            </article>
            <article>
              <h4 className="mb-4 text-3xl font-bold">Tools</h4>
              {tools.map((item, index) => {
                return (
                  <div key={index} className="mb-4">
                    <p className="text-purple-500">{item}</p>
                  </div>
                );
              })}
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        tags
        tools
        ingredients
        instructions
      }
      description {
        description
      }
      prepTime
      serving
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;
export default RecipeTemplate;
