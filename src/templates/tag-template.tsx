import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { RecipeType } from '../components/AllRecipies';
import Layout from '../components/Layout';
import RecipesList from '../components/RecipesList';

function TagTemplate({ data, pageContext }: PageProps) {
  const recipes = data.allContentfulRecipe.nodes;

  return (
    <Layout>
      <main className="container mx-auto">
        <h2 className="mb-4 text-4xl font-bold">{pageContext.tag}</h2>
        <RecipesList recipes={recipes} />
      </main>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default TagTemplate;
