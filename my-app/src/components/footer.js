import { Grid2 } from "@mui/material";
import React from "react";
import logoSymbol from "../assets/logo/logoSymbol.png";
import Typography from "@mui/material/Typography";
import theme from "../theme/theme";

function Footer() {
  return (
    <>
      {/* <Grid2
        container
        sx={{ backgroundColor: theme.palette.footer.background }}
      >
        <Grid2 xs={5}>
          <img
            src={logoSymbol}
            alt="Logo"
            style={{ width: "36px", height: "36px", color: "#B0D4FF" }}
          />
        </Grid2>
        <Typography
          variant="h6"
          sx={{
            alignItems: "center",
            alignContent: "center",
            color: "#B0D4FF",
            fontWeight: "bold",
          }}
        >
          Brands
        </Typography>
        <Typography variant="h6"></Typography>
      </Grid2>
      <Grid2 xs={3}></Grid2>
      <Grid2 xs={4}></Grid2> */}
    </>
  );
}

export default Footer;
