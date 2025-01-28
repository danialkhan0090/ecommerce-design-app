import { Category } from "@mui/icons-material";
import { Grid2, Typography } from "@mui/material";
import React from "react";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";
// import Header from "../header";

function ProductPage() {
  return (
    <>
      <Grid2 container sx={{ backgroundColor: "#DEE2E7" }} display={"flex"}>
        <ProductLeft />
        <ProductRight />
      </Grid2>
    </>
  );
}

export default ProductPage;
