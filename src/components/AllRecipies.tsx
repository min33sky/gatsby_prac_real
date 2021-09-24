import React from 'react';
import RecipesList from './RecipesList';
import TagsList from './TagsList';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImageProps, IGatsbyImageData } from 'gatsby-plugin-image';

export type RecipeType = {
  content: {
    tags: string[];
  };
  cookTime: number;
  id: string;
  image: {
    gatsbyImageData: IGatsbyImageData;
  };
  prepTime: number;
  title: string;
};

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`;

function AllRecipies() {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulRecipe.nodes;

  return (
    <article className="flex flex-col mx-auto lg:flex-row">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </article>
  );
}

export default AllRecipies;
