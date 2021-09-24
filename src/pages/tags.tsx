import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import slugify from 'slugify';
import Layout from '../components/Layout';
import { setupTags } from '../utils/setupTags';

const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

function Tags() {
  const data = useStaticQuery(query);
  const tags = setupTags(data.allContentfulRecipe.nodes);
  return (
    <Layout>
      <div className="container grid gap-4 mx-auto md:grid-cols-3">
        {tags.map((tag, index) => {
          const [name, value] = tag;
          const tagSlug = slugify(name, { lower: true });
          return (
            <Link
              to={`/tags/${tagSlug}`}
              key={index}
              className="flex flex-col items-center justify-center py-4 text-white transition duration-200 bg-purple-500 rounded-md cursor-pointer hover:opacity-70"
            >
              <p className="text-2xl font-bold first-letter:capitalize">
                {name}
              </p>
              <p>{value} recipe</p>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}

export default Tags;
