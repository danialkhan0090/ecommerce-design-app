import { Grid2, Stack, TextField } from "@mui/material";
import React from "react";

function CartRight() {
  return (
    <>
      <Grid2
        container
        sx={{ backgroundColor: "white" }}
        width={"280px"}
        height={"110px"}
        display={"flex"}
        justifySelf={"right"}
      >
        <Stack>
          <form>
            <TextField
              variant="outlined"
              placeholder="Add coupen"
              sx={{ width: "100px", height: "40px", borderRadius: "5px" }}
            ></TextField>
            <button type="submit" color="secondary">
              Apply
            </button>
          </form>
        </Stack>
      </Grid2>
      <Grid2 container sx={{ backgroundColor: "white" }}></Grid2>
    </>
  );
}

export default CartRight;
