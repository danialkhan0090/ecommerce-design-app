import { Grid2, Typography } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack"; //stack is use to put buttons in column
import Button from "@mui/material/Button";
import image from "../assets/images/banner.png";
import glad from "../assets/images/block.jpg";
import blog from "../assets/images/blog.jpg";
import Cardian from "./card";
function Banner() {
  return (
    <>
      <Grid2
        display={"flex"}
        container
        sx={{
          marginTop: "10px",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <Grid2
          xs={6}
          md={2}
          lg={2}
          display={"flex"}
          alignContent={"left"}
          alignItems={"left"}
          paddingLeft={"20px"}
          margin={"20px 0px 10px 0px"}
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
                paddingRight: "150px",
                backgroundColor: "#E5F1FF",
                color: "#1C1C1C",
                fontWeight: "bold",
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
                paddingRight: "140px",
                backgroundColor: "white",
                color: "#8B96A5",

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
                paddingLeft: "10px",
                paddingRight: "150px",
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
                paddingRight: "130px",
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
                paddingLeft: "10px",
                paddingRight: "138px",
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
                paddingLeft: "10px",
                paddingRight: "133px",
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
                paddingLeft: "10px",
                paddingRight: "153px",
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
                paddingLeft: "10px",
                paddingRight: "154px",
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
                paddingLeft: "10px",
                paddingRight: "150px",
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
          xs={12}
          md={6}
          lg={6}
          display={"flex"}
          margin={"30px 0px 10px 0px"}
          padding={"8px 2px 5px 10px"}
          width={"700px"}
          height={"353px"}
          sx={{
            backgroundColor: "white",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Grid2
            alignSelf={"flex-start"}
            width={"auto"}
            height={"auto"}
            margin={"30px 0px 0px 30px"}
          >
            <Typography fontSize={"28px"} style={{ textAlign: "left" }}>
              Last trending
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"bold"}>
              Electronic items
            </Typography>
            <Grid2
              alignSelf={"flex-start"}
              justifyItems={"left"}
              alignItems={"left"}
              justifyContent={"left"}
            >
              <Button
                style={{
                  marginTop: "10px",
                  backgroundColor: "white",
                  textTransform: "none",
                  color: "black",
                  padding: "5px 15px 5px 15px",
                  margin: "30px 140px 0px 0px",
                  fontSize: "16px",
                }}
              >
                Learn more
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2
          xs={12}
          md={12}
          lg={4}
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
              style={{ width: "95%", height: "70px" }}
            />
            <img
              src={blog}
              alt="blog"
              style={{ width: "95%", height: "70px", marginTop: "3px" }}
            />
          </Stack>
        </Grid2>
      </Grid2>
    </>
  );
}

export default Banner;
