import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ title, description }) {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[{ name: 'description', content: metaDescription }]}
    />
  );
}

export default SEO;
