import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

import { useSelector } from "react-redux";

const Progress = () => {
  const { isLoading } = useSelector((state) => state.blogs);
  return isLoading ? (
    <LinearProgress color="secondary" />
  ) : (
    <LinearProgress color="secondary" variant="determinate" value={100} />
  );
};

export default Progress;
