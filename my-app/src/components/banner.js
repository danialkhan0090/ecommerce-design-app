import { Grid2, Typography } from "@mui/material";
import React from "react";
import theme from "../theme/theme";

function banner() {
  return (
    <>
      <Grid2 container>
        <Grid2 xs={4}>
          <Typography
            variant="h4"
            style={{ color: theme.palette.footer.textheading }}
          >
            Atomobiles
          </Typography>
          <Typography></Typography>
          <Typography></Typography>
          <Typography></Typography>
          <Typography></Typography>
          <Typography></Typography>
          <Typography></Typography>
          <Typography></Typography>
          <Typography></Typography>
        </Grid2>
      </Grid2>
    </>
  );
}

export default banner;
