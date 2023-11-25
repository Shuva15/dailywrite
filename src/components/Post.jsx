import React from "react";
import editorjsHTML from 'editorjs-html'

const Post = (props) => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const edjsParser = editorjsHTML()
  const html = edjsParser.parse(props.content);


  return (
    <div className="post">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      <p className="byline">
        <span className="date">{formattedDate}</span>
      </p>
    </div>
  );
};

export default Post;
