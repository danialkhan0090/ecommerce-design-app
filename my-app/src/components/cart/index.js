import { Grid2, Typography } from "@mui/material";
import React from "react";
import CartRight from "./CartRight";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
import CartItems from "./CartItems";
import Bottompage from "./Bottompage";
import SavedForLater from "./SavedForLater";
import DynamicCart from "./DynamicCart";
function Cart() {
  return (
    <>
      <CartHeader />
      <Grid2
        padding={"0px 30px 0px 20px"}
        sx={{ backgroundColor: "#F4F4F4" }}
        pl={"40px"}
      >
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
          // maxHeight={"552px"}
          padding={"0px 0px 0px 0px"}
          mt={"15px"}
          mb={"10px"}
          ml={"20px"}
          height={"auto"}
        >
          <CartItems />
        </Grid2>
        <Grid2 mt={"15px"} mb={"10px"} ml={"0px"} height={"528px"} mr={"40px"}>
          <CartRight />
        </Grid2>
      </Grid2>
      {/* <Grid2 sx={{ backgroundColor: "#F4F4F4" }}>
        <SavedForLater />
      </Grid2> */}
      <Grid2
        sx={{
          pl: "40px",
          pt: "10px",
          pb: "10px",
          pr: "40px",
          borderBottomRightRadius: "10px",
          backgroundColor: "#F4F4F4",
        }}
      >
        <SavedForLater />
        <Bottompage />
      </Grid2>
      <Grid2 sx={{ backgroundColor: "#F4F4F4", pr: "190px" }}>
        <CartFooter />
      </Grid2>
      <Grid2>
        {" "}
        <DynamicCart />
      </Grid2>
    </>
  );
}

export default Cart;
