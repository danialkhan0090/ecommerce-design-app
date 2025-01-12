import { Card, Grid2, Typography } from "@mui/material";
import React from "react";
import theme from "../theme/theme";
import Stack from "@mui/material/Stack"; //stack is use to put buttons in column
import Button from "@mui/material/Button";
import image from "../assets/images/banner.jpg";
import glad from "../assets/images/block.jpg";
import blog from "../assets/images/blog.jpg";
import Cardian from "./card";
function Banner() {
  return (
    <>
      <Grid2
        container
        // marginLeft={"120px"}
        // marginRight={"130px"}
        sx={{ marginTop: "10px", backgroundColor: "#ECE9E9" }}
      >
        <Grid2
          xs={6}
          display={"flex"}
          alignContent={"left"}
          alignItems={"left"}
          paddingLeft={"15px"}
          margin={"20px 0px 10px 80px"}
          padding={"10px 0px 5px 20px"}
          sx={{ backgroundColor: "white" }}
          borderRadius={"5px"}
        >
          <Stack spacing={1}>
            <Button
              variant="text"
              size="small"
              style={{
                fontSize: "13px",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "10px",
                paddingRight: "55px",
                backgroundColor: "#E5F1FF",
                color: "#1C1C1C",
                fontWeight: "bold",
                // fontFamily: "arial",
                textTransform: "none",
              }}
            >
              Automobiles
            </Button>
            <Button
              variant="text"
              size="small"
              style={{
                fontSize: "11px",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "10px",
                paddingTop: "9px",
                paddingRight: "40px",
                backgroundColor: "white",
                color: "#8B96A5",
                // fontWeight: "bold",
                // fontFamily: "arial",
                textTransform: "none",
              }}
            >
              Clothes and wears
            </Button>
            <Button
              variant="text"
              size="small"
              style={{
                fontSize: "11px",
                // alignItems: "center",
                // justifyContent: "center",
                // paddingLeft: "10px",
                paddingRight: "40px",
                paddingTop: "9px",
                backgroundColor: "white",
                color: "#8B96A5",
                fontWeight: "bold",
                fontFamily: "arial",
                textTransform: "none",
              }}
            >
              Home interiors
            </Button>
            <Button
              variant="text"
              size="small"
              style={{
                fontSize: "11px",
                paddingLeft: "9px",
                paddingRight: "20px",
                paddingTop: "9px",
                backgroundColor: "white",
                color: "#8B96A5",
                fontWeight: "bold",
                fontFamily: "arial",
                textTransform: "none",
              }}
            >
              Computer and tech
            </Button>

            <Button
              variant="text"
              size="small"
              style={{
                fontSize: "11px",
                // alignItems: "center",
                // justifyContent: "center",
                // paddingLeft: "10px",
                paddingRight: "22px",
                paddingTop: "9px",
                backgroundColor: "white",
                color: "#8B96A5",
                fontWeight: "bold",
                fontFamily: "arial",
                textTransform: "none",
              }}
            >
              Tools, equipments
            </Button>
            <Button
              variant="text"
              size="small"
              style={{
                fontSize: "11px",
                // alignItems: "center",
                // justifyContent: "center",
                // paddingLeft: "10px",
                paddingRight: "22px",
                paddingTop: "9px",
                backgroundColor: "white",
                color: "#8B96A5",
                fontWeight: "bold",
                fontFamily: "arial",
                textTransform: "none",
              }}
            >
              Sports and outdoor
            </Button>
            <Button
              variant="text"
              size="small"
              style={{
                fontSize: "11px",
                // alignItems: "center",
                // justifyContent: "center",
                // paddingLeft: "10px",
                paddingRight: "40px",
                paddingTop: "9px",
                backgroundColor: "white",
                color: "#8B96A5",
                fontWeight: "bold",
                fontFamily: "arial",
                textTransform: "none",
              }}
            >
              Animal and pets
            </Button>
            <Button
              variant="text"
              size="small"
              style={{
                fontSize: "11px",
                // alignItems: "center",
                // justifyContent: "center",
                // paddingLeft: "10px",
                paddingRight: "40px",
                paddingTop: "9px",
                backgroundColor: "white",
                color: "#8B96A5",
                fontWeight: "bold",
                fontFamily: "arial",
                textTransform: "none",
              }}
            >
              Machinery tools
            </Button>
            <Button
              variant="text"
              size="small"
              style={{
                fontSize: "11px",
                // alignItems: "center",
                // justifyContent: "center",
                // paddingLeft: "10px",
                paddingRight: "40px",
                paddingTop: "9px",
                backgroundColor: "white",
                color: "#8B96A5",
                fontWeight: "bold",
                fontFamily: "arial",
                textTransform: "none",
              }}
            >
              More categories
            </Button>
          </Stack>
        </Grid2>
        <Grid2
          xs={6}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"20px 0px 10px 0px"}
          padding={"8px 2px 5px 10px"}
          sx={{ backgroundColor: "white" }}
        >
          <img
            src={image}
            alt="Banner"
            style={{ width: "100%", height: "350px" }}
          />
        </Grid2>
        <Grid2
          xs={12}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"20px 0px 10px 0px"}
          padding={"5px 2px 1px 10px"}
          sx={{ backgroundColor: "white" }}
        >
          <Stack>
            <Cardian />

            <img
              src={glad}
              alt="glad"
              style={{ width: "90%", height: "70px" }}
            />
            <img
              src={blog}
              alt="blog"
              style={{ width: "90%", height: "70px", marginTop: "3px" }}
            />
          </Stack>
        </Grid2>
      </Grid2>
    </>
  );
}

export default Banner;
