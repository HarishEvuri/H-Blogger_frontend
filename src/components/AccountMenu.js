import React from "react";
import { IconButton, MenuItem, Menu, Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { useSelector, useDispatch } from "react-redux";
import { signout } from "../actions/auth";

const AccountMenu = ({ anchorEl, setAnchorEl }) => {
  const { authData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isMenuOpen = Boolean(anchorEl);

  const menuId = "primary-search-account-menu";

  const handleSignout = () => {
    dispatch(signout());
    setAnchorEl(null);
  };

  return authData ? (
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
      onClose={() => setAnchorEl(null)}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          color="inherit"
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
            {`${authData.firstName.charAt(0)}${authData.lastName.charAt(0)}`}
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
  ) : (
    <span></span>
  );
};

export default AccountMenu;
