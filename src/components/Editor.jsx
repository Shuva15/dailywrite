import React, { useState, useEffect } from 'react'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 

const Editor = () => {
    const [editor, setEditor] = useState(null);

    useEffect(() => {
      const editor = new EditorJS({
        holder: 'editorjs',
        tools: { 
            header: {
              class: Header, 
              inlineToolbar: ['link'],
            }, 
            list: { 
              class: List, 
              inlineToolbar: true 
            },
          },
      });
  
      setEditor(editor);
    }, []);
  
    return (
      <div id="editorjs"></div>
    );
}

export default Editor