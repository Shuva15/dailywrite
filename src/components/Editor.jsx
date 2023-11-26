import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import "../styles/Editor.css";
import * as fcl from "@onflow/fcl";
import * as types from "@onflow/types"
import { updatePosts } from "../cadence/transactions/updatePosts";
import editorjsHTML from 'editorjs-html'

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
      .then(async (outputData) => {
        const edjsParser = editorjsHTML()
        const html = edjsParser.parse(outputData);
        console.log(html)
        const transactionId = await fcl.send([
          fcl.transaction(updatePosts),
          fcl.args([
            fcl.arg(html, types.Array(types.String))
          ]),
          fcl.payer(fcl.authz),
          fcl.proposer(fcl.authz),
          fcl.authorizations([fcl.authz]),
          fcl.limit(9999)
        ]).then(fcl.decode);
  
        console.log(transactionId)
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
      
  };

  return (
    <div className="write-page">
      <h2>What's going on today!</h2>
      <div id="editorjs"></div>
      <button onClick={handlePostBtn} className="post-button">
        Post
      </button>
    </div>
  );
};

export default Editor;
