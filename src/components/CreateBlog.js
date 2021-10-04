import React, { useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import MyEditor from "./MyEditor";
import { convertToRaw, EditorState } from "draft-js";
import { createBlog } from "../api";

const CreateBlog = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [thumbnail, setThumbnail] = useState();

  const handleSubmit = async () => {
    const body = JSON.stringify(convertToRaw(editorState.getCurrentContent()));

    const { data } = await createBlog({ title, description, thumbnail, body });
    console.log(data);
  };

  return (
    <Container maxWidth="md">
      <TextField
        inputProps={{
          style: {
            fontWeight: "bold",
            fontSize: 38,
            lineHeight: 1.3,
          },
        }}
        placeholder="Title"
        name="title"
        color="teritiary"
        variant="standard"
        multiline
        maxRows={4}
        fullWidth
        required
        sx={{ marginBottom: 2 }}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        placeholder="Description"
        name="description"
        multiline
        rows={2}
        fullWidth
        variant="outlined"
        color="teritiary"
        required
        sx={{ marginBottom: 2 }}
        onChange={(e) => setDescription(e.target.value)}
      />
      <img
        src={
          thumbnail ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        width="100%"
      />
      <TextField
        placeholder="Thumbnail link"
        name="thumbnail"
        color="teritiary"
        variant="outlined"
        fullWidth
        required
        onChange={(e) => setThumbnail(e.target.value)}
        sx={{ marginTop: 2, marginBottom: 2 }}
      />

      <MyEditor editorState={editorState} handleEditorState={setEditorState} />
      <Button variant="contained" color="secondary" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default CreateBlog;
