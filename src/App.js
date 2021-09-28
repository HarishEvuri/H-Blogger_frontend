import React, { useState } from "react";
import { EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import "./App.css";
import MyEditor from "./components/MyEditor";

const App = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div className="App">
      <MyEditor editorState={editorState} handleEditorState={setEditorState} />

      <div
        className="preview"
        dangerouslySetInnerHTML={{
          __html: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        }}
      />

      <div>{JSON.stringify(convertToRaw(editorState.getCurrentContent()))}</div>
    </div>
  );
};

export default App;
