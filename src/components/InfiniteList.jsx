import React from 'react';

function InfiniteList({ lists }) {
  console.log('lists', lists);
  if (!lists || lists.length === 0) return null;

  return (
    <div>
      {lists.map((img) => {
        return (
          <a href={img.links.html} target="_blank" key={img.id}>
            <img
              src={img.urls.regular}
              alt={img.alt_description}
              title={img.alt_description}
            />
          </a>
        );
      })}
    </div>
  );
}

export default InfiniteList;
