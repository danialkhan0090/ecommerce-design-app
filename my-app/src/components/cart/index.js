import { Grid2, Typography } from "@mui/material";
import React from "react";
import CartRight from "./CartRight";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
import CartItems from "./CartItems";
function Cart() {
  return (
    <>
      <CartHeader />
      <Grid2 padding={"0px 30px 0px 20px"} sx={{ backgroundColor: "#F4F4F4" }}>
        <Typography style={{ fontSize: "24px", fontWeight: "semi-bold" }}>
          My cart (3)
        </Typography>
      </Grid2>
      <Grid2
        container
        display={"flex"}
        direction={"row"}
        justifyContent={"space-between"}
        padding={"0px 30px 0px 20px"}
        sx={{ backgroundColor: "#F4F4F4" }}
      >
        <Grid2
          // sx={{ backgroundColor: "red" }}
          maxWidth={"880px"}
          maxHeight={"552px"}
          padding={"0px 0px 0px 20px"}
          mt={"15px"}
          mb={"10px"}
          height={"auto"}
        >
          <CartItems />
        </Grid2>
        <Grid2 mt={"15px"} mb={"10px"} ml={"20px"} height={"auto"}>
          <CartRight />
        </Grid2>
      </Grid2>
      <CartFooter />
    </>
  );
}

export default Cart;
