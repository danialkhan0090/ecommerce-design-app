import { Grid2 } from "@mui/material";
import React from "react";
import ProductTopBar from "../../components/ProductPage/ProductTopBar";
import BasicBreadcrumbs from "../breadCrumbs";
import ProductRightside from "./ProductRightSide";
import ProductLeftSide from "./ProductLeftside";
function ProductPage2() {
  return (
    <>
      <Grid2
        container
        sx={{ backgroundColor: "#F4F4F4" }}
        display={"flex"}
        direction={"row"}
        width={"100%"}
      >
        <Grid2 width={"100%"} mt={"15px"} mb={"10px"} ml={"20px"}>
          <BasicBreadcrumbs />
        </Grid2>
        <Grid2>
          <ProductLeftSide />
        </Grid2>
        <Grid2>
          <ProductTopBar />
          <ProductRightside />
        </Grid2>
      </Grid2>
    </>
  );
}

export default ProductPage2;
