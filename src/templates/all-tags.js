import React from 'react';
import Link from 'gatsby-link';

const AllTags = ({ pathContext }) => {
  const { tags } = pathContext;

  if (tags) {
    return (
      <div>
        <h3>Tags</h3>
        <ul>
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default AllTags;
