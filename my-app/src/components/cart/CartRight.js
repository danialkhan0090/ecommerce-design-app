import {
  Button,
  Grid2,
  Stack,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Cleave from "cleave.js/dist/cleave-react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const CartRight = ({ cartTotal, itemCount }) => {
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });
  const [cardErrors, setCardErrors] = useState({});

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

  const validateCard = () => {
    const errors = {};
    if (cardDetails.number.replace(/\s/g, "").length !== 16) {
      errors.number = "Invalid card number";
    }
    if (cardDetails.name.length < 3) {
      errors.name = "Invalid name";
    }
    if (cardDetails.expiry.length !== 5) {
      errors.expiry = "Invalid expiry date";
    }
    if (cardDetails.cvv.length !== 3) {
      errors.cvv = "Invalid CVV";
    }
    setCardErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCheckout = () => {
    if (paymentMethod === "credit" && !validateCard()) {
      return;
    }
    alert(
      `Processing payment of $${finalTotal.toFixed(2)} via ${paymentMethod}`
    );
  };

  return (
    <Grid2
      container
      direction="column"
      sx={{
        position: "sticky",
        top: 20,
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        width: "340px",
        minHeight: "auto",
        gap: 2,
        padding: "24px",
      }}
    >
      {/* Coupon Section */}
      <Grid2>
        <Typography variant="subtitle1" color="#505050" gutterBottom>
          Have a Coupon?
        </Typography>
        <Stack direction="row" spacing={1}>
          <TextField
            size="small"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px",
              },
            }}
          />
          <Button
            variant="outlined"
            onClick={handleApplyCoupon}
            disabled={couponApplied}
            sx={{
              minWidth: "100px",
              color: "#0D6EFD",
              borderColor: "#0D6EFD",
              "&:hover": {
                borderColor: "#0D6EFD",
                backgroundColor: "rgba(13, 110, 253, 0.04)",
              },
              "&:disabled": {
                color: "grey",
                borderColor: "lightgrey",
              },
            }}
          >
            {couponApplied ? "Applied" : "Apply"}
          </Button>
        </Stack>
      </Grid2>

      <Divider sx={{ my: 2 }} />

      {/* Payment Method Section */}
      <Grid2>
        <Typography variant="subtitle1" fontWeight="600" gutterBottom>
          Payment Method
        </Typography>
        <FormControl component="fieldset" sx={{ width: "100%" }}>
          <RadioGroup
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <FormControlLabel
              value="credit"
              control={<Radio color="primary" />}
              label={
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Credit Card
                </Typography>
              }
            />
            <FormControlLabel
              value="paypal"
              control={<Radio color="primary" />}
              label={
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  PayPal
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>

        {paymentMethod === "credit" && (
          <Stack spacing={2} mt={2}>
            <TextField
              label="Cardholder Name"
              variant="outlined"
              size="small"
              value={cardDetails.name}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, name: e.target.value })
              }
              error={!!cardErrors.name}
              helperText={cardErrors.name}
              fullWidth
            />
            <TextField
              label="Card Number"
              variant="outlined"
              size="small"
              InputProps={{
                inputComponent: Cleave,
                inputProps: {
                  options: {
                    creditCard: true,
                  },
                  placeholder: "1234 5678 9012 3456",
                },
              }}
              value={cardDetails.number}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, number: e.target.value })
              }
              error={!!cardErrors.number}
              helperText={cardErrors.number}
              fullWidth
            />
            <Stack direction="row" spacing={2}>
              <TextField
                label="Expiry Date"
                variant="outlined"
                size="small"
                InputProps={{
                  inputComponent: Cleave,
                  inputProps: {
                    options: {
                      date: true,
                      datePattern: ["m", "y"],
                    },
                    placeholder: "MM/YY",
                  },
                }}
                value={cardDetails.expiry}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, expiry: e.target.value })
                }
                error={!!cardErrors.expiry}
                helperText={cardErrors.expiry}
                sx={{ flex: 1 }}
              />
              <TextField
                label="CVV"
                variant="outlined"
                size="small"
                InputProps={{
                  inputComponent: Cleave,
                  inputProps: {
                    options: {
                      numeral: true,
                      blocks: [3],
                    },
                    placeholder: "123",
                  },
                }}
                value={cardDetails.cvv}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cvv: e.target.value })
                }
                error={!!cardErrors.cvv}
                helperText={cardErrors.cvv}
                sx={{ width: "100px" }}
              />
            </Stack>
          </Stack>
        )}

        {paymentMethod === "paypal" && (
          <Box mt={2}>
            <PayPalScriptProvider options={{ "client-id": "your-client-id" }}>
              <PayPalButtons
                style={{ layout: "horizontal" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: finalTotal.toFixed(2),
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    alert("Payment completed!");
                  });
                }}
              />
            </PayPalScriptProvider>
          </Box>
        )}
      </Grid2>

      <Divider sx={{ my: 2 }} />

      {/* Order Summary Section */}
      <Grid2>
        <Typography variant="subtitle1" fontWeight="600" gutterBottom>
          Order Summary
        </Typography>
        <Stack spacing={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" color="#505050">
              Subtotal ({itemCount} items)
            </Typography>
            <Typography variant="body2" fontWeight="500">
              ${cartTotal.toFixed(2)}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" color="#505050">
              Discount
            </Typography>
            <Typography variant="body2" color="#FA3434" fontWeight="500">
              -${discount.toFixed(2)}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" color="#505050">
              Tax
            </Typography>
            <Typography variant="body2" color="green" fontWeight="500">
              +${tax.toFixed(2)}
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle2" fontWeight="600">
              Total
            </Typography>
            <Typography variant="subtitle2" fontWeight="600">
              ${finalTotal.toFixed(2)}
            </Typography>
          </Stack>
        </Stack>
      </Grid2>

      {/* Checkout Button */}
      <Button
        onClick={handleCheckout}
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          py: 1.5,
          backgroundColor: "#00B517",
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#009714",
          },
        }}
      >
        {paymentMethod === "credit" ? "Pay Now" : "Continue to PayPal"}
      </Button>
    </Grid2>
  );
};

export default CartRight;
