import { Grid2, Typography } from "@mui/material";
import React from "react";
import CartRight from "./CartRight";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
function Cart() {
  return (
    <>
      <CartHeader />
      <Grid2
        container
        display={"flex"}
        direction={"row"}
        justifyContent={"space-between"}
        margin={"0px 30px 0px 20px"}
        sx={{ backgroundColor: "#F4F4F4" }}
      >
        <Grid2
          sx={{ backgroundColor: "red" }}
          maxWidth={"880px"}
          maxHeight={"552px"}
        >
          <Typography variant="h1"> Typocgraphy</Typography>
        </Grid2>
        <Grid2 mt={"15px"} mb={"10px"} ml={"20px"}>
          <CartRight />

          <Grid2 mt={"15px"} mb={"10px"} ml={"20px"}></Grid2>
        </Grid2>
      </Grid2>
      <CartFooter />
    </>
  );
}

export default Cart;
