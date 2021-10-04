import React from "react";
import { IconButton, MenuItem, Menu, Avatar } from "@mui/material";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import DraftsIcon from "@mui/icons-material/Drafts";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CreateIcon from "@mui/icons-material/Create";

import { useSelector } from "react-redux";

const MobileMenu = ({ mobileAnchorEl, setMobileAnchorEl }) => {
  const { authData } = useSelector((state) => state.auth);
  const isMobileMenuOpen = Boolean(mobileAnchorEl);

  const mobileMenuId = "primary-search-account-menu-mobile";
  return authData ? (
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
      onClose={() => setMobileAnchorEl(null)}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <CreateIcon />
        </IconButton>
        <p>Create Blog</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <BookmarksIcon />
        </IconButton>
        <p>Bookmarks</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <DraftsIcon />
        </IconButton>
        <p>Drafts</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
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
            {`${authData.firstName.charAt(0)}${authData.lastName.charAt(0)}`}
          </Avatar>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
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
      onClose={() => setMobileAnchorEl(null)}
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
};

export default MobileMenu;
