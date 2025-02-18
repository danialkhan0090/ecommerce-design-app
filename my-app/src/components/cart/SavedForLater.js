import { Button, Grid2, Typography } from "@mui/material";
import React, { useState } from "react";

const INITIAL_PRODUCTS = [
  {
    id: 1,
    image: "tabCart",
    name: "Tablet android, Dual-sim",
    price: 99.5,
  },
  {
    id: 2,
    image: "iphone12Cart",
    name: "Apple phone 12 pro",
    price: 1500.0,
  },
  {
    id: 3,
    image: "watchCart",
    name: "Laptop core i9 16gb 500gb",
    price: 968.0,
  },
  {
    id: 4,
    image: "lapCart",
    name: "Smart Watch Series 7",
    price: 119.0,
  },
];

function SavedForLater({ onAddToCart, onReceiveItem }) {
  const [savedItems, setSavedItems] = useState(INITIAL_PRODUCTS);

  const handleAddToCart = (product) => {
    // Remove from saved items first
    setSavedItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );

    // Add to cart with quantity
    const itemToCart = {
      ...product,
      quantity: 1, // Initialize with quantity 1 when moving to cart
    };
    onAddToCart(itemToCart);
  };

  const addToSavedItems = (item) => {
    // Remove quantity property when saving item
    const { quantity, ...itemWithoutQuantity } = item;

    setSavedItems((prevItems) => {
      const exists = prevItems.some((savedItem) => savedItem.id === item.id);
      if (!exists) {
        return [...prevItems, itemWithoutQuantity];
      }
      return prevItems;
    });
  };

  // Function to handle receiving items from cart
  const handleReceiveItem = (item) => {
    addToSavedItems(item);
  };

  return (
    <>
      <Grid2
        pl={"40px"}
        pt={"20px"}
        mt={"20px"}
        width={"1240px"}
        sx={{ backgroundColor: "white" }}
        borderRadius={"5px"}
      >
        <Typography fontSize={14} fontWeight={"bold"}>
          Saved for later ({savedItems.length} items)
        </Typography>
      </Grid2>
      <Grid2
        container
        xs={12}
        display={"flex"}
        width={"1240px"}
        sx={{ backgroundColor: "white", justifyContent: "center" }}
      >
        {savedItems.map((item) => (
          <Grid2
            key={item.id}
            height={"382"}
            display={"flex"}
            width={"270px"}
            mr={"20px"}
            mt={"20px"}
          >
            <Grid2
              sx={{
                backgroundColor: "white",
                height: "370px",
                width: "270px",
                pb: "20px",
              }}
            >
              <Grid2
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={require(`../../assets/images/${item.image}.png`)}
                  alt={item.name}
                  style={{ width: "275px", height: "250px" }}
                />
              </Grid2>

              <Grid2
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "10px",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={"bold"}
                  sx={{ marginRight: "8px" }}
                >
                  ${item.price.toFixed(2)}
                </Typography>
              </Grid2>
              <Grid2 mt={"3px"}>
                <Typography variant="body2" color="#8B96A5" gutterBottom>
                  {item.name}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => handleAddToCart(item)}
                  sx={{
                    textTransform: "none",
                    backgroundColor: "#0D6EFD",
                    "&:hover": {
                      backgroundColor: "#0b5ed7",
                    },
                  }}
                >
                  Move to Cart
                </Button>
              </Grid2>
            </Grid2>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}

export default SavedForLater;
