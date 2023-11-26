import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import "../styles/Editor.css";
import data from "../lib/data";

const Editor = () => {
  const ejInstance = useRef();

  const editor = new EditorJS({
    holderId: "editorjs",
    onReady: () => {
      ejInstance.current = editor;
    },
    autofocus: true,
    onChange: async () => {
      let content = await editor.saver.save();
      console.log(content);
    },
    tools: {
      header: {
        class: Header,
        inlineToolbar: ["link"],
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
    },
  });

  editor.isReady
    .then(() => {
      console.log("Editor.js is ready to work!");
      /** Do anything you need after editor initialization */
    })
    .catch((reason) => {
      console.log(`Editor.js initialization failed because of ${reason}`);
    });

  const handlePostBtn = () => {
    editor
      .save()
      .then((outputData) => {
        console.log("Article data: ", outputData);
        data.push(outputData)
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
      
  };

  return (
    <div className="write-page">
      <div id="editorjs"></div>
      <button onClick={handlePostBtn} className="post-button">
        Post
      </button>
    </div>
  );
};

export default Editor;
