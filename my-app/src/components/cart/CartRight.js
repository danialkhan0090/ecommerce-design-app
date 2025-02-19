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
  SvgIcon,
} from "@mui/material";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Cleave from "cleave.js/dist/cleave-react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

// Remove the PNG imports and add SVG icons
const PaymentIcons = {
  Visa: (props) => (
    <SvgIcon {...props} viewBox="0 0 780 500">
      <path
        d="M40,0h700c22.1,0,40,17.9,40,40v420c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z"
        fill="#0E4595"
      />
      <path
        d="M293.2,348.7l33.4-195.7h53.1l-33.4,195.7H293.2L293.2,348.7z"
        fill="#fff"
      />
      <path
        d="M476.3,157.9c-10.6-4-27.1-8.2-47.7-8.2c-52.7,0-89.8,26.5-90.1,64.5c-0.3,28.1,26.5,43.8,46.8,53.1   c20.7,9.6,27.7,15.7,27.6,24.3c-0.1,13.1-16.5,19.1-31.8,19.1c-21.3,0-32.6-3-50.2-10.4l-6.9-3.1l-7.5,43.8   c12.5,5.5,35.5,10.2,59.4,10.4c56.1,0,92.5-26.2,92.9-66.8c0.2-22.2-14-39.2-44.8-53.2c-18.7-9-30.1-15-30-24.1   c0-8.1,9.6-16.7,30.3-16.7c17.3-0.3,29.9,3.5,39.6,7.4l4.7,2.2L476.3,157.9"
        fill="#fff"
      />
      <path
        d="M616.1,153h-41c-12.7,0-22.2,3.5-27.8,16.2l-78.8,179.5h55.8c0,0,9.1-24,11.2-29.3c6.1,0,60.6,0.1,68.3,0.1   c1.6,6.9,6.5,29.2,6.5,29.2h49.3L616.1,153L616.1,153z M515.3,285.7c4.4-11.3,21.2-54.7,21.2-54.7c-0.3,0.5,4.4-11.3,7.1-18.6   l3.6,16.9c0,0,10.2,46.5,12.3,56.4H515.3L515.3,285.7z"
        fill="#fff"
      />
      <path
        d="M187.4,153l-51.9,133.1l-5.5-27.1c-9.6-31-39.6-64.6-73.1-81.4l47.3,171h56.1l83.3-195.7H187.4"
        fill="#fff"
      />
      <path
        d="M86.9,153H0.1l-0.6,3.5c67.2,16.3,111.6,55.8,130,103.1L111.3,170c-3.2-12.3-12.4-15.9-24.4-17"
        fill="#F2AE14"
      />
    </SvgIcon>
  ),
  Mastercard: (props) => (
    <SvgIcon {...props} viewBox="0 0 780 500">
      <path
        d="M40,0h700c22.1,0,40,17.9,40,40v420c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z"
        fill="#16366F"
      />
      <path
        d="M449.8,250c0,99.4-80.6,180-180,180s-180-80.6-180-180s80.6-180,180-180S449.8,150.6,449.8,250"
        fill="#D9222A"
      />
      <path
        d="M690.2,250c0,99.4-80.6,180-180,180s-180-80.6-180-180s80.6-180,180-180S690.2,150.6,690.2,250"
        fill="#EE9F2D"
      />
      <path
        d="M510.2,250c0,61.9-50.1,112-112,112s-112-50.1-112-112s50.1-112,112-112S510.2,188.1,510.2,250"
        fill="#F16522"
      />
    </SvgIcon>
  ),
  PayPal: (props) => (
    <SvgIcon {...props} viewBox="0 0 780 500">
      <path
        d="M40,0h700c22.1,0,40,17.9,40,40v420c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z"
        fill="#fff"
      />
      <path
        d="M466.1,178.8c0,51.9-42.1,94-94,94H277c-6.1,0-11.1,4.9-11.1,11.1v94c0,6.1,4.9,11.1,11.1,11.1h47.8   c51.9,0,94-42.1,94-94v-47.8c0-6.1,4.9-11.1,11.1-11.1h47.8c6.1,0,11.1-4.9,11.1-11.1v-47.8C488.9,171.8,484,166.9,477.9,166.9   h-47.8c-6.1,0-11.1,4.9-11.1,11.1V178.8z"
        fill="#003087"
      />
      <path
        d="M277,154.1h95.1c51.9,0,94,42.1,94,94v47.8c0,6.1-4.9,11.1-11.1,11.1h-47.8c-6.1,0-11.1-4.9-11.1-11.1   v-47.8c0-51.9-42.1-94-94-94h-47.8c-6.1,0-11.1-4.9-11.1-11.1v-47.8c0-6.1,4.9-11.1,11.1-11.1H277c51.9,0,94,42.1,94,94v47.8   c0,6.1-4.9,11.1-11.1,11.1"
        fill="#009CDE"
      />
    </SvgIcon>
  ),
  ApplePay: (props) => (
    <SvgIcon {...props} viewBox="0 0 780 500">
      <path
        d="M40,0h700c22.1,0,40,17.9,40,40v420c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z"
        fill="#000000"
      />
      <g fill="#FFFFFF">
        <path d="M185.3,250.5c0.5-12.7,5.9-23.9,14.8-32.5c-5.8-8.2-14.5-14.9-26.7-15.9c-11.3-1-23.5,6.4-29.6,6.4 c-6.2,0-15.5-6.3-25.5-6.1c-13.1,0.2-25.2,7.4-32,18.7c-13.7,23.2-3.5,57.4,9.7,76.1c6.5,9.3,14.3,19.7,24.4,19.3 c9.8-0.4,13.5-6.2,25.3-6.2c11.8,0,15.1,6.2,25.4,6c10.5-0.2,17.1-9.3,23.5-18.6c7.4-10.5,10.4-20.7,10.6-21.2 C204.8,276.4,184.8,266.1,185.3,250.5z" />
        <path d="M170.7,191.5c5.4-6.4,9-15.2,8-24c-7.8,0.3-17.2,5.2-22.8,11.6c-5,5.7-9.4,14.8-8.2,23.5 C156.4,203.1,165.3,197.9,170.7,191.5z" />
        <path d="M350,228.5h-42.8l-10.4,30.8h-18.2l41-116.7h18.3l41,116.7h-18.5L350,228.5z M311.5,214.8h34.1l-16.8-49.5h-0.5 L311.5,214.8z" />
        <path d="M448.1,229.5c0,18.2-9.7,30-24.4,30c-8.3,0.1-15.4-3.7-18.9-10.2h-0.3v28.9h-16.8V200.2h16.2v9.7h0.3 c3.7-6.7,11-10.6,19.2-10.4C438.4,199.5,448.1,211.3,448.1,229.5z M430.8,229.5c0-11.9-6.1-19.7-15.5-19.7 c-9.2,0-15.4,7.9-15.4,19.7c0,11.9,6.2,19.8,15.4,19.8C424.7,249.3,430.8,241.5,430.8,229.5z" />
        <path d="M513.2,229.5c0,18.2-9.7,30-24.4,30c-8.3,0.1-15.4-3.7-18.9-10.2h-0.3v28.9h-16.8V200.2h16.2v9.7h0.3 c3.7-6.7,11-10.6,19.2-10.4C503.5,199.5,513.2,211.3,513.2,229.5z M495.9,229.5c0-11.9-6.1-19.7-15.5-19.7 c-9.2,0-15.4,7.9-15.4,19.7c0,11.9,6.2,19.8,15.4,19.8C489.8,249.3,495.9,241.5,495.9,229.5z" />
        <path d="M596.6,241.7c-1.4,9.3-10.6,15.8-22.3,15.8c-15.1,0-24.4-10.1-24.4-26.2c0-16.2,9.4-27.1,24-27.1 c14.3,0,23.3,9.8,23.3,25.5v3.6h-38.8v0.6c0,9.4,5.9,15.5,15.1,15.5c6.4,0,11.4-3.2,13-7.8H596.6z M557.9,224.8h22.1 c-0.2-8.4-5.6-13.9-13.7-13.9C558.3,210.9,553,216.4,557.9,224.8z" />
      </g>
    </SvgIcon>
  ),
  GooglePay: (props) => (
    <SvgIcon {...props} viewBox="0 0 780 500">
      <path
        d="M40,0h700c22.1,0,40,17.9,40,40v420c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z"
        fill="#fff"
      />
      <path
        d="M377.1,250c0-13.7,11.1-24.8,24.8-24.8h99.2c13.7,0,24.8,11.1,24.8,24.8v49.6c0,13.7-11.1,24.8-24.8,24.8   h-99.2c-13.7,0-24.8-11.1-24.8-24.8V250z"
        fill="#4285F4"
      />
      <path
        d="M254.1,250c0-13.7,11.1-24.8,24.8-24.8h99.2c13.7,0,24.8,11.1,24.8,24.8v49.6c0,13.7-11.1,24.8-24.8,24.8   h-99.2c-13.7,0-24.8-11.1-24.8-24.8V250z"
        fill="#34A853"
      />
      <path
        d="M131.1,250c0-13.7,11.1-24.8,24.8-24.8h99.2c13.7,0,24.8,11.1,24.8,24.8v49.6c0,13.7-11.1,24.8-24.8,24.8   h-99.2c-13.7,0-24.8-11.1-24.8-24.8V250z"
        fill="#FBBC05"
      />
      <path
        d="M254.1,175.6c0-13.7,11.1-24.8,24.8-24.8h99.2c13.7,0,24.8,11.1,24.8,24.8v49.6c0,13.7-11.1,24.8-24.8,24.8   h-99.2c-13.7,0-24.8-11.1-24.8-24.8V175.6z"
        fill="#EA4335"
      />
    </SvgIcon>
  ),
};

const CartRight = ({ cartTotal, itemCount }) => {
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleApplyCoupon = () => {
    if (couponCode === "SAVE10" && !couponApplied) {
      setDiscount(cartTotal * 0.1);
      setCouponApplied(true);
    }
  };

  const tax = cartTotal * 0.1;
  const finalTotal = cartTotal - discount + tax;

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  const handleCheckout = () => {
    if (!selectedPayment) {
      alert("Please select a payment method");
      return;
    }
    alert(
      `Processing payment of $${finalTotal.toFixed(2)} via ${selectedPayment}`
    );
  };

  return (
    <Stack spacing={2}>
      {/* Coupon Card */}
      <Grid2
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
          width: "300px",
          height: "110px",
          padding: "20px",
        }}
      >
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

      {/* Main Card */}
      <Grid2
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
          width: "300px",
          height: "350px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Order Summary Section */}
        <Grid2>
          <Typography variant="subtitle1" fontWeight="600" gutterBottom>
            Order Summary
          </Typography>
          <Stack spacing={1}>
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
            <Divider sx={{ my: 1 }} />
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

        {/* Checkout and Payment Section */}
        <Grid2>
          {/* Checkout Button */}
          <Button
            onClick={handleCheckout}
            variant="contained"
            fullWidth
            sx={{
              py: 1.5,
              backgroundColor: "#00B517",
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#009714",
              },
              mb: 2, // Add margin bottom for spacing
            }}
          >
            {selectedPayment
              ? `Pay with ${selectedPayment}`
              : "Select Payment Method"}
          </Button>

          {/* Payment Methods */}
          <Divider sx={{ mb: 2 }} />
          <Stack
            direction="row"
            spacing={0}
            flexWrap="wrap"
            justifyContent="center"
          >
            {[
              { icon: PaymentIcons.Visa, name: "Visa" },
              { icon: PaymentIcons.Mastercard, name: "Mastercard" },
              { icon: PaymentIcons.PayPal, name: "PayPal" },
              { icon: PaymentIcons.ApplePay, name: "Apple Pay" },
              { icon: PaymentIcons.GooglePay, name: "Google Pay" },
            ].map(({ icon: Icon, name }) => (
              <Button
                key={name}
                onClick={() => handlePaymentSelect(name)}
                sx={{
                  minWidth: "auto",
                  p: 1,
                  border:
                    selectedPayment === name
                      ? "2px solid #0D6EFD"
                      : "1px solid #eee",
                  borderRadius: "8px",
                  backgroundColor:
                    selectedPayment === name
                      ? "rgba(13, 110, 253, 0.04)"
                      : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(13, 110, 253, 0.08)",
                  },
                }}
              >
                <Icon sx={{ width: 32, height: 20 }} />
              </Button>
            ))}
          </Stack>
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default CartRight;
