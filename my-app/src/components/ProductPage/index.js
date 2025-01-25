import { Grid2, Typography } from "@mui/material";
import React from "react";
import Header from "../header";

function ProductPage() {
  return (
    <>
      <Header />
      <Grid2 container sx={{ backgroundColor: "#ffe0e0e0" }}>
        <Typography> Product page</Typography>
      </Grid2>
    </>
  );
}

export default ProductPage;
