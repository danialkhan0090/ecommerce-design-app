import { Grid, Grid2 } from "@mui/material";
import React from "react";
import DehazeTwoToneIcon from "@mui/icons-material/DehazeTwoTone";
import Button from "@mui/material/Button";
import Ship from "../assets/logo/Ship.png";
import ExpendMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
function SubHeader() {
  const navigate = useNavigate();
  return (
    <>
      <Grid2
        container
        marginLeft={"3px"}
        marginTop={"10px"}
        xs={12}
        display={"flex"}
        justifyContent={"space-between"}
        direction={"row"}
      >
        <Grid2
          alignItems={"center"}
          justifyContent={"center"}
          justifyItems={"center"}
          spacing={1}
        >
          <Button variant="text" color="black" size="small">
            <DehazeTwoToneIcon />
          </Button>
          <Button
            variant="text"
            size="small"
            onClick={() => navigate("/ProductPage")}
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
              color: "black",
              fontWeight: "bold",
              fontFamily: "fantasy",
              textTransform: "none",
            }}
          >
            Help <ExpendMoreIcon style={{ marginTop: "3px" }} />
          </Button>
        </Grid2>
        <Grid2 marginRight={"50px"}>
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
            English ,USD <ExpendMoreIcon style={{ marginTop: "3px" }} />
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
            Ship to <ExpendMoreIcon style={{ marginTop: "3px" }} />
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
    </>
  );
}

export default SubHeader;
