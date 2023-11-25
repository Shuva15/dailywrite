import React from 'react';
import '../styles/Feed.css'
import Post from './Post';
import data from '../lib/data';

const Feed = () => {
  

  return (
    <div className="feed">
      {data.map((post) => (
        <Post
          content={post}
        />
      ))}
    </div>
  );
};

export default Feed;
