import { PageProps } from 'gatsby';
import React from 'react';

function BlogTemplate(props: PageProps) {
  console.log(props.params);
  return (
    <div>
      <p>블로그 실화?</p>
      <p>{props.params.title}</p>
    </div>
  );
}

export default BlogTemplate;
