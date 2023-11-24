import React, { useState } from 'react';
import '../styles/Feed.css'

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');

  const handlePost = () => {
    if (newPostContent.trim() !== '') {
      const newPost = {
        id: posts.length + 1,
        content: newPostContent,
      };

      setPosts([newPost, ...posts]);
      setNewPostContent('');
    }
  };

  return (
    <div className='feed'>
      <div className='post-form'>
        <textarea
          rows="5"
          cols="50"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          className='textarea'
          placeholder="What happend today?"
        />
        <button onClick={handlePost} className='button'>
          Post
        </button>
      </div>

      {posts.map((post) => (
        <div key={post.id} className='post'>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
