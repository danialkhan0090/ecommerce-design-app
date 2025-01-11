import React from "react";
// import BasicButtons from "./button";
import { Box, Grid2, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Person2Icon from "@mui/icons-material/Person2";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import logoSymbol from "../assets/images/logoSymbol.png";
import logoSymbol from "../assets/logo/logoSymbol.png";
import banner from "../assets/images/banner.jpg";
import { fontGrid } from "@mui/material/styles/cssUtils";

const header = () => {
  const navbarStyle = {
    backgroundColor: "white",

    // padding: "5px 0px 5px 0px",
    boxShadow: "0 4px 2px -4px gray",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
  };
  const searchBoxContainerStyle = {
    marginLeft: "50px",
    width: "70%",
    display: "flex",
    alignItems: "center",
  };
  const searchBoxStyle = {
    flex: "1",
    padding: "10px",
    border: "2px solid #0D6EFD",
    borderRadius: "5px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
  };
  const selectStyle = {
    padding: "10px",
    border: "2px solid #0D6EFD",
    borderLeft: "none",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    backgroundColor: "white",
  };
  const buttonStyle = {
    padding: "5px",
    border: "3px solid #0D6EFD",
    // borderLeft: "none",
    // borderTopRightRadius: "5px",
    // borderBottomRightRadius: "5px",
    backgroundColor: "#0D6EFD",
    color: "white",
    fontWeight: "bold",
  };
  return (
    <>
      <nav style={navbarStyle}>
        <Grid2
          size={2}
          alignItems={"center"}
          justifyContent={"center"}
          paddingTop={"10px"}
        >
          <img src={logoSymbol} alt="Logo" />
        </Grid2>
        <Typography
          variant="h6"
          sx={{
            // paddingRight: "250px",
            // marginRight: "500px",
            alignItems: "center",
            alignContent: "center",
            color: "#8CB7F5",
            fontWeight: "bold",
          }}
        >
          Brands
        </Typography>

        <div style={searchBoxContainerStyle}>
          <input type="text" style={searchBoxStyle} placeholder="Search" />
          <select style={selectStyle}>
            <option value="all" color="#1C1C1C">
              All categories
            </option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
          {/* <Button variant="contained" sx={buttonStyle}>
            Search
          </Button> */}
          <Button variant="contained" sx={buttonStyle}>
            search
          </Button>
          {/* ====================================icons======================================== */}
          <Grid2
            container
            spacing={2}
            size={2}
            alignItems={"right"}
            padding={"0px 50px 0px 60px"}
          >
            <Grid2
              marginTop={1}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Person2Icon sx={{ fontSize: 25, color: "#8B96A5" }} />
              <Typography sx={{ color: "#8B96A5" }}>profile</Typography>
            </Grid2>

            <Grid2 marginTop={1} justifyContent={"center"}>
              <MessageIcon sx={{ fontSize: 25, color: "#8B96A5" }} />
              <Typography sx={{ color: "#8B96A5" }}>Messages</Typography>
            </Grid2>
            <Grid2 marginTop={1} justifyContent={"center"}>
              <FavoriteIcon sx={{ fontSize: 25, color: "#8B96A5" }} />
              <Typography sx={{ color: "#8B96A5" }}>Orders</Typography>
            </Grid2>
            <Grid2 marginTop={1} justifyContent={"center"}>
              <ShoppingCartIcon sx={{ fontSize: 25, color: "#8B96A5" }} />
              <Typography sx={{ color: "#8B96A5" }}>My cart</Typography>
            </Grid2>
          </Grid2>
        </div>
      </nav>
    </>
  );
};
export default header;
