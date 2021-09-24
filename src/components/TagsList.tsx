import { Link } from 'gatsby';
import React from 'react';
import slugify from 'slugify';
import { setupTags } from '../utils/setupTags';
import { RecipeType } from './AllRecipies';

interface TagsListProps {
  recipes: RecipeType[];
}

function TagsList({ recipes }: TagsListProps) {
  const tags = setupTags(recipes);
  console.log('태그 필터링: ', tags);

  return (
    <div className="flex flex-col w-full mb-10 lg:max-w-[250px] ">
      <h4 className="mb-8 text-4xl font-bold">Recipes</h4>
      <div className="grid grid-cols-3 lg:grid-cols-1">
        {tags.map((tag, index) => {
          const [name, number] = tag;
          const tagSlug = slugify(name, { lower: true });
          return (
            <Link
              key={index}
              to={`/tags/${tagSlug}`}
              className="mb-2 text-lg first-letter:capitalize"
            >
              {name} ({number})
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TagsList;
