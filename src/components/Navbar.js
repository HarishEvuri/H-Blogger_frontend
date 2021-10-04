import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Container,
  Avatar,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import DraftsIcon from "@mui/icons-material/Drafts";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CreateIcon from "@mui/icons-material/Create";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserInfo } from "../api";
import { auth } from "../actions/auth";

import Signup from "./Signup";
import Signin from "./Signin";
import MobileMenu from "./MobileMenu";
import Progress from "./Progress";
import AccountMenu from "./AccountMenu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  borderColor: alpha(theme.palette.common.black, 0.15),
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.auth);

  useEffect(async () => {
    const { data } = await getUserInfo();

    if (!data.message) dispatch(auth(data));
  }, [dispatch]);

  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenSignin = () => {
    setOpenSignin(true);
  };

  const handleCloseSignin = () => {
    setOpenSignin(false);
  };

  const handleOpenSignup = () => {
    setOpenSignup(true);
  };

  const handleCloseSignup = () => {
    setOpenSignup(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              H-BLOGGER
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            {authData ? (
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  onClick={() => history.push("/blogs/create")}
                >
                  <CreateIcon />
                </IconButton>
                <IconButton size="large" color="inherit">
                  <BookmarksIcon />
                </IconButton>
                <IconButton size="large" color="inherit">
                  <DraftsIcon />
                </IconButton>
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={handleProfileMenuOpen}
                >
                  <Avatar
                    src={authData.image}
                    sx={{
                      width: 28,
                      height: 28,
                      backgroundColor: "inherit",
                      color: "black",
                    }}
                    variant="rounded"
                  >
                    {`${authData.firstName.charAt(0)}${authData.lastName.charAt(
                      0
                    )}`}
                  </Avatar>
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  size="small"
                  startIcon={<LoginIcon />}
                  color="secondary"
                  variant="contained"
                  sx={{ marginLeft: 1, padding: 1 }}
                  onClick={handleOpenSignin}
                >
                  SignIn
                </Button>
                <Button
                  size="small"
                  startIcon={<PersonAddIcon />}
                  color="secondary"
                  variant="contained"
                  sx={{ marginLeft: 2, padding: 1 }}
                  onClick={handleOpenSignup}
                >
                  SignUp
                </Button>
              </Box>
            )}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
        <Progress />
      </AppBar>
      <MobileMenu
        mobileAnchorEl={mobileAnchorEl}
        setMobileAnchorEl={setMobileAnchorEl}
      />
      <AccountMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      <Dialog
        open={openSignup}
        onClose={handleCloseSignup}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <Signup
            openSignin={handleOpenSignin}
            closeSignup={handleCloseSignup}
          />
        </DialogContent>
      </Dialog>
      <Dialog
        open={openSignin}
        onClose={handleCloseSignin}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <Signin
            openSignup={handleOpenSignup}
            closeSignin={handleCloseSignin}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
