import { Box, Button, Divider, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function CartItems({ items, updateQuantity, removeItem, onSaveForLater }) {
  const navigate = useNavigate();

  const handleSaveForLater = (itemId) => {
    onSaveForLater(itemId);
  };

  return (
    <>
      {items.map((item) => (
        <Grid2
          key={item.id}
          container
          sx={{ backgroundColor: "white" }}
          width={"880px"}
          height={"150px"}
          justifyContent={"space-between"}
          display={"flex"}
          padding={"20px"}
          borderRadius={"5px"}
        >
          <Grid2
            direction={"column"}
            display={"flex"}
            margin={"0px 0px 0px 0px"}
          >
            {/* grid for image */}
            <Grid2 width={"90px"} height={"90px"} padding={"5px"}>
              <img
                src={require(`../../assets/images/${item.image}.png`)}
                alt={item.name}
                style={{ width: "80px", height: "80px" }}
              />
            </Grid2>
            {/* Typography */}
            <Grid2 width={"462px"} height={"100px"} mt={"3px"} ml={"3px"}>
              <Typography mt={"4px"} fontSize={"16px"} color="#1C1C1C">
                {item.name}
              </Typography>
              <Typography mt={"5px"} fontSize={"12px"} color="#8B96A5">
                {item.description || "Size: Medium, Color: Blue"}
              </Typography>
              <Stack direction={"row"}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => removeItem(item.id)}
                  sx={{
                    textTransform: "none",

                    color: "red",
                    backgroundColor: "white",
                    border: "2px solid #EEF2FF",
                    borderRadius: "5px",
                    width: "70px",
                    height: "30px",
                    boxShadow: "none",
                    mt: "10px",
                  }}
                >
                  Remove
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleSaveForLater(item.id)}
                  sx={{
                    textTransform: "none",
                    backgroundColor: "white",
                    border: "2px solid #EEF2FF",
                    borderRadius: "5px",
                    width: "110px",
                    height: "30px",
                    boxShadow: "none",
                    mt: "10px",
                    ml: "10px",
                  }}
                >
                  Save for Later
                </Button>
              </Stack>
            </Grid2>
          </Grid2>
          {/* grid for quantity */}
          <Grid2 width={"100px"} height={"100px"}>
            <Box ml={"50px"}>${item.price.toFixed(2)}</Box>
            <Box mt={"10px"}>
              <select
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
                style={{
                  width: "100px",
                  height: "30px",
                  color: "#1C1C1C",
                  backgroundColor: "white",
                  border: "1px solid #DEE2E7",
                  borderRadius: "5px",
                  fontWeight: "normal",
                }}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    Qty: {num}
                  </option>
                ))}
              </select>
            </Box>
          </Grid2>
          <Divider sx={{ marginBottom: "20px", mt: "30px", width: "840px" }} />
        </Grid2>
      ))}

      <Grid2
        width={"880px"}
        height={"auto"}
        padding={"20px"}
        display={"flex"}
        sx={{
          backgroundColor: "white",
          justifyContent: "space-between",
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
      >
        <Grid2>
          <Button
            variant="contained"
            size="small"
            onClick={() => navigate("/ProductPage")}
            sx={{
              textTransform: "none",
              color: "ffffff",
              backgroundColor: "navyblue",
              borderRadius: "5px",
              width: "120px",
              ml: "8px",
              height: "30px",
              boxShadow: "none",
              mt: "10px",
            }}
          >
            Back to shop
          </Button>
        </Grid2>
        <Grid2>
          <Button
            variant="contained"
            size="small"
            onClick={() => items.forEach((item) => removeItem(item.id))}
            sx={{
              textTransform: "none",
              backgroundColor: "white",
              color: "#007AFF",
              border: "1px solid #DEE2E7",
              ml: "8px",
              height: "30px",
              boxShadow: "none",
              mt: "10px",
            }}
          >
            Remove all
          </Button>
        </Grid2>
      </Grid2>

      {/* Support Icons */}
      <Grid2 display={"flex"} justifyContent={"space-between"} mt={"20px"}>
        <Grid2>
          <Button>
            <img
              src={require("../../assets/images/securePayment.png")}
              alt="Secure Payment"
            />
          </Button>
        </Grid2>
        <Grid2>
          <Button>
            <img
              src={require("../../assets/images/custumerSuport.png")}
              alt="Customer Support"
            />
          </Button>
        </Grid2>
        <Grid2>
          <Button>
            <img
              src={require("../../assets/images/Freedelivery.png")}
              alt="Free Delivery"
            />
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
}

export default CartItems;
