import { Grid2 } from "@mui/material";
import React from "react";
import Header from "../header";
import CartRight from "./CartRight";
function Cart() {
  return (
    <>
      <Header />
      <Grid2 container display={"flex"} direction={"column"}>
        <Grid2></Grid2>
        <Grid2 mt={"15px"} mb={"10px"} ml={"20px"}></Grid2>
        <Grid2 mt={"15px"} mb={"10px"} ml={"20px"}>
          <CartRight />
        </Grid2>
      </Grid2>
    </>
  );
}

export default Cart;
