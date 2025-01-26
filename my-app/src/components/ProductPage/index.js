import { Grid2, Typography } from "@mui/material";
import React from "react";
import Transferlist from "./Transferlist";
// import Header from "../header";

function ProductPage() {
  return (
    <>
      <Grid2 container sx={{ backgroundColor: "#ffe0e0e0" }} display={"flex"}>
        <Grid2 display={"flex"} alignSelf={"left"}>
          <Transferlist />
        </Grid2>
      </Grid2>
    </>
  );
}

export default ProductPage;
