import React from "react";
import editorjsHTML from 'editorjs-html'
import '../styles/Post.css'

const Post = (props) => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="post">
        <div className="post-container" dangerouslySetInnerHTML={{ __html: props.content }} />
        {console.log(props.content)}
      
        <div className="date">{formattedDate}</div>
      
    </div>
  );
};

export default Post;
