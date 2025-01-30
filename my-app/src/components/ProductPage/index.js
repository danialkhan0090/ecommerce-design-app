import { Category } from "@mui/icons-material";
import { Grid2, Typography } from "@mui/material";
import React from "react";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";
import ProductTopBar from "./ProductTopBar";
import BasicBreadcrumbs from "../breadCrumbs";
function ProductPage() {
  return (
    <>
      <Grid2
        container
        sx={{ backgroundColor: "#F4F4F4" }}
        display={"flex"}
        direction={"row"}
        width={"100%"}
        pl={"30px"}
      >
        <Grid2 width={"100%"} mt={"15px"} mb={"10px"}>
          <BasicBreadcrumbs />
        </Grid2>
        <Grid2>
          <ProductLeft />
        </Grid2>
        <Grid2>
          <ProductTopBar />
          <ProductRight />
        </Grid2>
      </Grid2>
    </>
  );
}

export default ProductPage;
