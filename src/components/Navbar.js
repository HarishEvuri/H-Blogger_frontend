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
  Dialog,
  DialogContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import DraftsIcon from "@mui/icons-material/Drafts";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CreateIcon from "@mui/icons-material/Create";

import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../api";
import { auth, signout } from "../actions/auth";

import Signup from "./Signup";
import Signin from "./Signin";

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

  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.auth);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileAnchorEl);

  useEffect(async () => {
    const { data } = await getUserInfo();

    if (!data.message) dispatch(auth(data));
  }, [dispatch]);

  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
  };

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

  const handleSignout = () => {
    dispatch(signout());
    handleProfileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          color="inherit"
        >
          <Avatar
            src="https://miro.medium.com/fit/c/164/164/0*JQ9YNUD02tlx_C1y"
            sx={{
              width: 28,
              height: 28,
              backgroundColor: "secondary",
              color: "white",
            }}
            variant="rounded"
          >
            HE
          </Avatar>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={handleSignout}>
        <IconButton size="large" color="inherit">
          <LogoutIcon />
        </IconButton>
        <p>SignOut</p>
      </MenuItem>
    </Menu>
  );

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
          <CreateIcon />
        </IconButton>
        <p>Create Blog</p>
      </MenuItem>
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
            alt="Harish Evuri"
            src=""
            sx={{
              width: 28,
              height: 28,
              backgroundColor: "secondary",
              color: "white",
            }}
            variant="rounded"
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
        <p>Sign Out</p>
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
                  <CreateIcon />
                </IconButton>
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
                  onClick={handleProfileMenuOpen}
                >
                  <Avatar
                    src={authData.image}
                    sx={{
                      width: 28,
                      height: 28,
                      backgroundColor: "white",
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
      {renderMenu}
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
