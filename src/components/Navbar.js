import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu,
  Container,
  Avatar,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import DraftsIcon from "@mui/icons-material/Drafts";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../api";
import { auth, signout } from "../actions/auth";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
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
  const [mobileAnchorEl, setMobileAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.auth);

  const isMobileMenuOpen = Boolean(mobileAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  useEffect(async () => {
    const { data } = await getUserInfo();
    dispatch(auth(data));
  }, [dispatch]);

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = authData ? (
    <Menu
      anchorEl={mobileAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <BookmarksIcon />
        </IconButton>
        <p>Bookmarks</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <DraftsIcon />
        </IconButton>
        <p>Drafts</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          color="inherit"
        >
          <Avatar
            alt="Harish"
            src="https://www.srmist.edu.in/sites/default/files/images/rank-7.jpg"
            sx={{
              width: 24,
              height: 24,
              backgroundColor: "secondary",
              color: "white",
            }}
          />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <LogoutIcon />
        </IconButton>
        <p>SignOut</p>
      </MenuItem>
    </Menu>
  ) : (
    <Menu
      anchorEl={mobileAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <LoginIcon />
        </IconButton>
        <p>SignIn</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <PersonAddIcon />
        </IconButton>
        <p>SignUp</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
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
                >
                  <BookmarksIcon />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <DraftsIcon />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  color="inherit"
                >
                  <Avatar
                    alt="Harish"
                    src="https://www.srmist.edu.in/sites/default/files/images/rank-7.jpg"
                    sx={{
                      width: 24,
                      height: 24,
                      bgcolor: "inherit",
                      color: "white",
                    }}
                  />
                </IconButton>
                <Button
                  size="small"
                  startIcon={<LogoutIcon />}
                  color="neutral"
                  sx={{ padding: 1 }}
                >
                  SignOut
                </Button>
              </Box>
            ) : (
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  size="small"
                  startIcon={<LoginIcon />}
                  color="neutral"
                  sx={{ marginLeft: 1, padding: 1 }}
                >
                  SignIn
                </Button>
                <Button
                  size="small"
                  startIcon={<PersonAddIcon />}
                  color="neutral"
                  sx={{ marginLeft: 1, padding: 1 }}
                >
                  SignUp
                </Button>
              </Box>
            )}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
