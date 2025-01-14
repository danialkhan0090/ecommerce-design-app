import { Grid2 } from "@mui/material";
import React from "react";
import DehazeTwoToneIcon from "@mui/icons-material/DehazeTwoTone";
import Button from "@mui/material/Button";
import Ship from "../assets/logo/Ship.png";
function SubHeader() {
  return (
    <>
      <Grid2 container marginLeft={"3px"} marginTop={"10px"} xs={12}>
        <Grid2
          alignItems={"center"}
          justifyContent={"center"}
          justifyItems={"center"}
          spacing={1}
        >
          <Grid2 xs={11}>
            <Button variant="text" color="black" size="small">
              <DehazeTwoToneIcon />
            </Button>
            <Button
              variant="text"
              size="small"
              style={{
                fontSize: "13px",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: "20px",
                color: "black",
                fontWeight: "bold",
                fontFamily: "fantasy",
                textTransform: "none",
              }}
            >
              All categories
            </Button>
            <Button
              variant="text"
              size="small"
              style={{
                fontSize: "13px",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: "20px",
                color: "black",
                fontWeight: "bold",
                fontFamily: "fantasy",
                textTransform: "none",
              }}
            >
              Hot offers
            </Button>
            <Button
              variant="text"
              size="small"
              style={{
                fontSize: "13px",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: "20px",
                color: "black",
                fontWeight: "bold",
                fontFamily: "fantasy",
                textTransform: "none",
              }}
            >
              Gift boxes
            </Button>
            <Button
              variant="text"
              size="small"
              style={{
                fontSize: "13px",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: "20px",
                color: "black",
                fontWeight: "bold",
                fontFamily: "fantasy",
                textTransform: "none",
              }}
            >
              Projects
            </Button>
            <Button
              variant="text"
              size="small"
              style={{
                fontSize: "13px",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: "20px",
                color: "black",
                fontWeight: "bold",
                fontFamily: "fantasy",
                textTransform: "none",
              }}
            >
              Manu item
            </Button>
            <Button
              variant="text"
              size="small"
              style={{
                fontSize: "13px",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: "250px",
                color: "black",
                fontWeight: "bold",
                fontFamily: "fantasy",
                textTransform: "none",
              }}
            >
              Help ⮟
            </Button>
            <Button
              variant="text"
              size="small"
              style={{
                fontSize: "13px",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: "20px",
                marginLeft: "213px",
                color: "black",
                fontWeight: "bold",
                fontFamily: "fantasy",
                textTransform: "none",
              }}
            >
              English ,USD ⮟
            </Button>
            <Button
              variant="text"
              size="small"
              style={{
                fontSize: "13px",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: "20px",
                color: "black",
                fontWeight: "bold",
                fontFamily: "fantasy",
                textTransform: "none",
              }}
            >
              Ship to ⮟
              <img
                src={Ship}
                alt="Ship"
                style={{
                  paddingLeft: "5px",
                  width: "20px",
                  height: "15px",
                  color: "#B0D4FF",
                }}
              />
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
}

export default SubHeader;
