import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  InputBase,
  alpha,
  styled,
} from "@mui/material";
import {
  Person,
  ShoppingCart,
  Search as SearchIcon,
  Menu as MenuIcon,
  AccountCircle,
  Settings,
  ExitToApp,
} from "@mui/icons-material";

// Styled search component
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMenuAnchor(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    handleMenuClose();
    navigate("/login");
  };

  const handleProfile = () => {
    handleMenuClose();
    navigate("/profile");
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem onClick={handleProfile}>
        <AccountCircle sx={{ mr: 2 }} /> Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Settings sx={{ mr: 2 }} /> Settings
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <ExitToApp sx={{ mr: 2 }} /> Logout
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar
      position="sticky"
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
            onClick={handleMobileMenuOpen}
            sx={{ mr: 2, display: { sm: "none" } }}
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
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
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
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>

        {/* Right Section */}
        <Box display="flex" alignItems="center">
          {user ? (
            <>
              <Button
                onClick={handleProfileMenuOpen}
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
      {renderMenu}
    </AppBar>
  );
};

export default Header;
