import { Category } from "@mui/icons-material";
import { Grid2, Typography } from "@mui/material";
import React from "react";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";
// import Header from "../header";

function ProductPage() {
  return (
    <>
      <Grid2
        container
        sx={{ backgroundColor: "#FFF9F9" }}
        display={"flex"}
        direction={"row"}
        width={"100%"}
      >
        <Grid2>
          <ProductLeft />
        </Grid2>
        <Grid2>
          <ProductRight />
        </Grid2>
      </Grid2>
    </>
  );
}

export default ProductPage;
