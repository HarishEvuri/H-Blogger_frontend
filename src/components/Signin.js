import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { signIn } from "../api";
import { useDispatch } from "react-redux";
import { auth } from "../actions/auth";

export default function Signin({ closeSignin, openSignup }) {
  const [errorInfo, setErrorInfo] = useState("");
  const dispatch = useDispatch();

  const gotoSignup = () => {
    closeSignin();
    openSignup();
  };

  const handleSigninForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const { data } = await signIn({ email, password });

      if (data.message) setErrorInfo(data.message);
      else {
        dispatch(auth(data));
        closeSignin();
      }
    } catch (error) {
      setErrorInfo("Server is not active !");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 3,
          marginBottom: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main", width: 50, height: 50 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        {errorInfo !== "" ? (
          <Alert severity="error">{errorInfo}</Alert>
        ) : (
          <span></span>
        )}
        <Box component="form" onSubmit={handleSigninForm} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email Address"
                name="email"
                color="teritiary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                color="teritiary"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                component="button"
                color="primary.contrastText"
                onClick={gotoSignup}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
