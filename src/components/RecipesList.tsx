import { Link } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import React from 'react';
import slugify from 'slugify';
import { RecipeType } from './AllRecipies';

interface RecipesListProps {
  recipes: RecipeType[];
}

function RecipesList({ recipes }: RecipesListProps) {
  return (
    <div className="grid gap-2 md:grid-cols-3">
      {recipes.map(({ content, cookTime, id, image, prepTime, title }) => {
        const pathToImage = getImage(image as unknown as ImageDataLike);
        const slug = slugify(title, { lower: true });

        return (
          <Link key={id} to={`/${slug}`} className="w-full mb-8">
            <GatsbyImage
              image={pathToImage}
              className="mb-4 rounded-lg h-[250px] lg:h-[200px]"
              alt={title}
            />
            <h5 className="text-2xl font-bold ">{title}</h5>
            <p className="text-lg font-medium ">
              Prep : {prepTime}min | Cook : {cookTime}min
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default RecipesList;
