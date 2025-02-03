import {
  Button,
  Grid,
  // Divider,
  Grid2,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";

function CartRight() {
  return (
    <>
      <Grid2
        container
        sx={{ backgroundColor: "white", borderRadius: "5px" }}
        width={"300px"}
        height={"120px"}
        display={"flex"}
        justifySelf={"right"}
        padding={"20px"}
        mr={"20px"}
      >
        <Grid2 sx={{ height: "30px" }}>
          <Typography color="#505050">Have a Coupon</Typography>
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
        sx={{
          backgroundColor: "white",
          mr: "20px",
          borderRadius: "5px",
          height: "300px",
        }}
      >
        <Grid2
          container
          sx={{ backgroundColor: "white" }}
          width={"300px"}
          height={"130px"}
          mt={"20px"}
          // pl={"20px"}
          padding={"20px"}
          borderRadius={"7px"}
        >
          <Typography color="#505050">
            Subtotal:&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
            &nbsp; $1403.97
          </Typography>
          <Typography color="#505050">
            Discount:
            <span style={{ color: "#FA3434", marginLeft: "125px" }}>
              -$60.00
            </span>
          </Typography>
          <Typography color="#505050">
            Tex:
            <span style={{ color: "green", marginLeft: "160px" }}>+$14.00</span>
          </Typography>
        </Grid2>
        <Divider sx={{ marginBottom: "30px", width: "250px", ml: "20px" }} />
        <Grid2 marginLeft={"20px"} display={"flex"}>
          <Typography fontWeight={"bold"}>
            Total: <span style={{ marginLeft: "130px" }}>$1357.97</span>
          </Typography>
        </Grid2>
        <Button
          sx={{
            padding: "10px",
            width: "280px",
            alignSelf: "center",
            backgroundColor: "green",
            mt: "10px",
            ml: "10px",
            borderRadius: "10px",
            textTransform: "none",
          }}
          variant="contained"
        >
          Checkout
        </Button>
      </Grid2>
    </>
  );
}

export default CartRight;
