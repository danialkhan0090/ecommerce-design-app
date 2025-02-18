import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";

const CartRight = ({ cartTotal, itemCount }) => {
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const handleApplyCoupon = () => {
    // Example coupon logic - you can modify this based on your needs
    if (couponCode === "SAVE10" && !couponApplied) {
      setDiscount(cartTotal * 0.1); // 10% discount
      setCouponApplied(true);
    }
  };

  // Calculate tax (10% of subtotal)
  const tax = cartTotal * 0.1;

  // Calculate final total
  const finalTotal = cartTotal - discount + tax;

  const handleCheckout = () => {
    // You can add your checkout logic here
    alert(
      `Proceeding to checkout:\nSubtotal: $${cartTotal.toFixed(
        2
      )}\nDiscount: -$${discount.toFixed(2)}\nTax: +$${tax.toFixed(
        2
      )}\nTotal: $${finalTotal.toFixed(2)}`
    );
  };

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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleApplyCoupon();
            }}
          >
            <TextField
              label="Have a Coupon"
              variant="outlined"
              size="small"
              placeholder="Add coupon"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              sx={{ width: "164px", height: "40px", borderRadius: "5px" }}
            />
            <Button
              variant="contained"
              onClick={handleApplyCoupon}
              disabled={couponApplied}
              sx={{
                backgroundColor: "white",
                width: "85px",
                height: "40px",
                boxShadow: "none",
                border: "lightgray 1px solid",
                textTransform: "none",
                color: "#0D6EFD",
                fontWeight: "lightbold",
                "&:disabled": {
                  color: "grey",
                  borderColor: "lightgrey",
                },
              }}
              size="large"
            >
              {couponApplied ? "Applied" : "Apply"}
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
          padding={"20px"}
          borderRadius={"7px"}
        >
          <Typography color="#505050">
            Subtotal:{" "}
            <span style={{ marginLeft: "125px" }}>${cartTotal.toFixed(2)}</span>
          </Typography>
          <Typography color="#505050">
            Discount:{" "}
            <span style={{ color: "#FA3434", marginLeft: "125px" }}>
              -${discount.toFixed(2)}
            </span>
          </Typography>
          <Typography color="#505050">
            Tax:{" "}
            <span style={{ color: "green", marginLeft: "160px" }}>
              +${tax.toFixed(2)}
            </span>
          </Typography>
        </Grid2>
        <Divider
          sx={{
            marginTop: "20px",
            marginBottom: "30px",
            width: "250px",
            ml: "20px",
          }}
        />
        <Grid2 marginLeft={"20px"} display={"flex"}>
          <Typography fontWeight={"bold"}>
            Total:{" "}
            <span style={{ marginLeft: "130px" }}>
              ${finalTotal.toFixed(2)}
            </span>
          </Typography>
        </Grid2>
        <Button
          onClick={handleCheckout}
          sx={{
            padding: "10px",
            width: "280px",
            alignSelf: "center",
            backgroundColor: "green",
            mt: "10px",
            ml: "10px",
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
          }}
          variant="contained"
        >
          Checkout (${finalTotal.toFixed(2)})
        </Button>
      </Grid2>
    </>
  );
};

export default CartRight;
