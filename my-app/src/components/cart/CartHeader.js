import React from "react";
import { Grid2, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Person2Icon from "@mui/icons-material/Person2";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logoSymbol from "../../assets/logo/logoSymbol.png";
// import Banner from "./banner";

const header = () => {
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
            {/* ====================================icons======================================== */}
            <Grid2
              display={"flex"}
              container
              spacing={2}
              size={2}
              alignItems={"right"}
              //   alignSelf={"flex-end"}
              padding={"0px 50px 0px 60px"}
            >
              <Grid2
                marginTop={1}
                alignSelf={"flex-end"}
                ml={"700px"}
                display={"flex"}
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
                    size="small"
                    style={{
                      color: "#8B96A5",
                      fontSize: "15px",
                      textTransform: "none",
                      // fontWeight: "bold",
                      fontStyle: "fantasy",
                    }}
                  >
                    My cart
                  </Button>
                </Stack>
              </Grid2>
            </Grid2>
          </div>
        </nav>
      </Grid2>
    </>
  );
};
export default header;
