import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import React from "react";

function CartRight() {
  return (
    <>
      <Grid2
        container
        sx={{ backgroundColor: "white" }}
        width={"280px"}
        height={"90px"}
        display={"flex"}
        justifySelf={"right"}
        padding={"20px"}
        mr={"20px"}
      >
        <Grid2 sx={{ height: "30px" }}>
          <Typography>Have a Coupon</Typography>
        </Grid2>
        <Stack direction={"row"}>
          <form>
            <TextField
              label="Have a Coupon"
              variant="outlined"
              size="small"
              placeholder="Add coupen"
              sx={{ width: "164px", height: "40px", borderRadius: "5px" }}
            ></TextField>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                width: "85px",
                height: "40px",
                boxShadow: "none",
                border: "lightgray 1px solid",
                textTransform: "none",
                color: "#0D6EFD",
                fontWeight: "lightbold",
              }}
              size="large"
            >
              Apply
            </Button>
          </form>
        </Stack>
      </Grid2>
      <Grid2
        container
        sx={{ backgroundColor: "black" }}
        width={"280px"}
        height={"302px"}
      >
        {" "}
      </Grid2>
    </>
  );
}

export default CartRight;
