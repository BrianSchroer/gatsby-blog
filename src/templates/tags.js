import React from 'react';
import Link from 'gatsby-link';

const Tags = ({ pathContext }) => {
  console.log(pathContext);
  const { posts, tagName } = pathContext;

  if (posts) {
    return (
      <div>
        <h3>Posts tagged "{tagName}":</h3>
        <ul>
          {posts.map(post => {
            const { id, frontmatter } = post;
            return (
              <li key={id}>
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Tags;
