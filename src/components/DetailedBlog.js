import { Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getBlog } from "../actions/blogs";
import "./MyEditor.css";

const DetailedBlog = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { blog } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getBlog(id));
  }, [dispatch]);

  return blog ? (
    <Container maxWidth="md">
      <div style={{ fontWeight: "bold", fontSize: 38 }}>{blog.title}</div>
      <p>{blog.description}</p>
      <img width="100%" src={blog.thumbnail} />
      <div className="view" dangerouslySetInnerHTML={{ __html: blog.body }} />
    </Container>
  ) : (
    <span></span>
  );
};

export default DetailedBlog;
