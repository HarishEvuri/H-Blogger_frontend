import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./MyEditor.css";

const MyEditor = ({ editorState, handleEditorState }) => {
  return (
    <div className="App">
      <Editor
        editorState={editorState}
        onEditorStateChange={(e) => handleEditorState(e)}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "fontFamily",
            "list",
            "colorPicker",
            "link",
            "embedded",
            "emoji",
            "image",
            "remove",
            "history",
          ],
          list: { options: ["unordered", "ordered"] },
          colorPicker: {
            colors: [
              "rgb(97,189,109)",
              "rgb(26,188,156)",
              "rgb(84,172,210)",
              "rgb(44,130,201)",
              "rgb(147,101,184)",
              "rgb(71,85,119)",
              "rgb(204,204,204)",
              "rgb(85,57,130)",
              "rgb(0,0,0)",
              "rgb(247,218,100)",
              "rgb(251,160,38)",
              "rgb(235,107,86)",
              "rgb(226,80,65)",
              "rgb(163,143,132)",
              "rgb(239,239,239)",
              "rgb(255,255,255)",
              "rgb(184,49,47)",
              "rgb(124,112,107)",
              "rgb(209,213,216)",
            ],
          },
        }}
      />
    </div>
  );
};

export default MyEditor;
