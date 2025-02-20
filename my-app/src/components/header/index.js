import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Badge,
} from "@mui/material";
import {
  Person,
  ShoppingCart,
  Search,
  Menu as MenuIcon,
} from "@mui/icons-material";

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", color: "#1C1C1C" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Section */}
        <Box display="flex" alignItems="center">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
            }}
          >
            Brand
          </Typography>
        </Box>

        {/* Center Section */}
        <Box display="flex" alignItems="center" flex={1} mx={2}>
          <Button component={Link} to="/" sx={{ color: "inherit", mx: 1 }}>
            Home
          </Button>
          <Button
            component={Link}
            to="/ProductPage"
            sx={{ color: "inherit", mx: 1 }}
          >
            Products
          </Button>
        </Box>

        {/* Right Section */}
        <Box display="flex" alignItems="center">
          <IconButton color="inherit">
            <Search />
          </IconButton>

          {user ? (
            <>
              <Button
                component={Link}
                to="/profile"
                startIcon={<Person />}
                sx={{
                  color: "inherit",
                  textTransform: "none",
                  ml: 1,
                }}
              >
                {user.name}
              </Button>
              <IconButton
                component={Link}
                to="/Cart"
                color="inherit"
                sx={{ ml: 1 }}
              >
                <Badge badgeContent={0} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </>
          ) : (
            <Button
              component={Link}
              to="/login"
              startIcon={<Person />}
              sx={{ color: "inherit" }}
            >
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
