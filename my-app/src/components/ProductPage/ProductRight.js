import { Grid, Grid2, Typography } from "@mui/material";
import React from "react";
import iphone11 from "../../assets/images/iphone11.png";

function ProductRight() {
  return (
    <>
      <Grid2
        container
        sx={{
          backgroundColor: "white",
          width: "920px",
          height: "230px",
          margin: "20px 0px 20px 0px",
          borderRadius: "6px",
        }}
      >
        <Grid2
          // image
          display={"flex"}
          sx={{
            margin: "20px 0px 5px 0px",
            width: "185px",
            height: "185px",
            alignSelf: "right",
            marginLeft: "20px",
          }}
        >
          <img src={iphone11} alt="mobilePhone" style={{ width: "100%" }} />
        </Grid2>
        <Grid2
          //card body
          sx={{
            // backgroundImage: `url(${iphone11})`,
            width: "185px",
            height: "185px",
          }}
          alignSelf={"flex-start"}
        >
          <Typography></Typography>
        </Grid2>

        <Grid2 display={"flex"}>{/* favorite */}</Grid2>
      </Grid2>
    </>
  );
}

export default ProductRight;
