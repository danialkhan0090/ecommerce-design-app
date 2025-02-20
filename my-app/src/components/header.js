import React from "react";
import { Grid2, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Person2Icon from "@mui/icons-material/Person2";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logoSymbol from "../assets/logo/logoSymbol.png";
import SubHeader from "./sub-header";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const navbarStyle = {
    backgroundColor: "white",
    padding: "5px 0px 5px 0px",
    boxShadow: "0 4px 2px -4px gray",
    display: "flex",
    justifyContent: "center",
  };
  const searchBoxContainerStyle = {
    marginLeft: "50px",
    width: "85%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
  };
  const searchBoxStyle = {
    flex: "1",
    padding: "7px",
    border: "2px solid #0D6EFD",
    borderRadius: "5px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
  };
  const selectStyle = {
    padding: "7px",
    border: "2px solid #0D6EFD",
    borderLeft: "none",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    backgroundColor: "white",
  };
  const buttonStyle = {
    padding: "2px",
    border: "3px solid #0D6EFD",
    backgroundColor: "#0D6EFD",
    color: "white",
    textTransform: "none",
  };

  return (
    <>
      <Grid2 marginLeft={"18px"}>
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
            <Button
              variant="contained "
              size="small"
              sx={buttonStyle}
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                marginTop: "1px",
                marginBottom: "0px",
              }}
            >
              Search
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
                <Stack>
                  <Person2Icon
                    sx={{
                      fontSize: 23,
                      color: "#8B96A5",
                      marginLeft: "20px",
                    }}
                  />
                  <Button
                    variant="text"
                    size="small"
                    style={{
                      color: "#8B96A5",
                      fontSize: "15px",
                      textTransform: "none",
                      // fontWeight: "bold",
                      fontStyle: "fantasy",
                    }}
                  >
                    Profile
                  </Button>
                </Stack>
              </Grid2>

              <Grid2
                marginTop={1}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Stack>
                  <MessageIcon
                    sx={{
                      fontSize: 23,
                      color: "#8B96A5",
                      marginLeft: "20px",
                    }}
                  />
                  <Button
                    variant="text"
                    size="small"
                    style={{
                      color: "#8B96A5",
                      fontSize: "15px",
                      textTransform: "none",
                      // fontWeight: "bold",
                      fontStyle: "fantasy",
                    }}
                  >
                    Message
                  </Button>
                </Stack>
              </Grid2>

              <Grid2
                marginTop={1}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Stack>
                  <FavoriteIcon
                    sx={{
                      fontSize: 23,
                      color: "#8B96A5",
                      marginLeft: "20px",
                    }}
                  />
                  <Button
                    variant="text"
                    size="small"
                    style={{
                      color: "#8B96A5",
                      fontSize: "15px",
                      textTransform: "none",
                      // fontWeight: "bold",
                      fontStyle: "fantasy",
                    }}
                  >
                    Orders
                  </Button>
                </Stack>
              </Grid2>
              <Grid2
                marginTop={1}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Stack>
                  <ShoppingCartIcon
                    sx={{
                      fontSize: 23,
                      color: "#8B96A5",
                      marginLeft: "21px",
                    }}
                  />
                  <Button
                    variant="text"
                    onClick={() => navigate("/cart")}
                    size="small"
                    style={{
                      color: "#8B96A5",
                      fontSize: "15px",
                      textTransform: "none",
                      // fontWeight: "bold",
                      fontStyle: "fantasy",
                    }}
                  >
                    My Cart
                  </Button>
                </Stack>
              </Grid2>
            </Grid2>
          </div>
        </nav>
      </Grid2>
      <SubHeader />
    </>
  );
};

export default Header;
