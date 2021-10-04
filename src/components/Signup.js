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

import { signUp } from "../api";
import { useDispatch } from "react-redux";
import { auth } from "../actions/auth";

export default function Signup({ closeSignup, openSignin }) {
  const [errorInfo, setErrorInfo] = useState("");
  const dispatch = useDispatch();

  const gotoSignin = () => {
    closeSignup();
    openSignin();
  };

  const handleSignupForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    try {
      const { data } = await signUp({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });

      if (data.message) setErrorInfo(data.message);
      else {
        dispatch(auth(data));
        closeSignup();
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
          Sign up
        </Typography>
        {errorInfo !== "" ? (
          <Alert severity="error">{errorInfo}</Alert>
        ) : (
          <span></span>
        )}
        <Box component="form" onSubmit={handleSignupForm} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                required
                fullWidth
                label="First Name"
                color="teritiary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Last Name"
                name="lastName"
                color="teritiary"
              />
            </Grid>
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
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
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
            Sign Up
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" color="primary.contrastText" onClick={gotoSignin}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
