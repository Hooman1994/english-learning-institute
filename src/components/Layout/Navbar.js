import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Image from "../../assets/images/main-logo.webp";
import FadeMenu from "../MenuItems/MenuItem";
import { menuItems } from "../../utility/data";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";

export default function PrimarySearchAppBar() {
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={handleMenuClose}
        style={{
          direction: "rtl",
          marginRight: "10px",
          fontFamily: "IRANsans",
          fontSize: "18px",
        }}
      >
        پروفایل
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        style={{
          direction: "rtl",
          marginRight: "10px",
          fontFamily: "IRANsans",
          fontSize: "18px",
        }}
      >
        ویرایش اطلاعات
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0100b0, #0300a7, #05009e, #070096, #08008d)",
          }}
        >
          <Toolbar>
            <IconButton>
              <img
                src={Image}
                alt="Logo"
                style={{
                  width: "100px",
                  height: "100px",
                  fontFamily: "IRANsans",
                }}
                onClick={() => {
                  navigate("/");
                }}
              ></img>
            </IconButton>
            <Form
              buttonTitle="ثبت نام"
              variant="outlined"
              size="large"
              style={{
                marginRight: "10px",
                backgroundColor: "white",
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily: "IRANsans",
              }}
              formType="Register"
            />
            <Form
              buttonTitle="ورود"
              variant="contained"
              size="large"
              style={{
                marginRight: "10px",
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily: "IRANsans",
              }}
              formType="Login"
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                fontFamily: "IRANsans",
              }}
            ></Typography>

            <Box sx={{ flexGrow: 1 }} />
            {menuItems.length &&
              menuItems.map((item, index) => {
                return (
                  <div key={item.id}>
                    <FadeMenu
                      id={item.id}
                      title={item.title}
                      subMenu={item.subMenu}
                    />
                  </div>
                );
              })}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </Box>
    </>
  );
}
