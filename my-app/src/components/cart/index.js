import { Grid2, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CartRight from "./CartRight";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
import CartItems from "./CartItems";
import Bottompage from "./Bottompage";
import SavedForLater from "./SavedForLater";
import DynamicCart from "./DynamicCart";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    // You would typically fetch cart data from an API or local storage here
    const fetchCartData = async () => {
      // Example data structure - replace with your actual API call
      const dummyData = [
        {
          id: 5, // Different ID from saved items
          name: "T-shirt with multiple colors",
          price: 29.99,
          quantity: 1,
          image: "blueshirt", // Updated to match actual image filename
          description: "Size: Medium, color: blue, Material: fabrica",
        },
        {
          id: 6,
          name: "Jeans Bag for College/university",
          price: 16.99,
          quantity: 1,
          image: "bluebag", // Updated to match actual image filename
          description: "Size: 36*16, color: blue, Material: jeans",
        },
        {
          id: 7,
          name: "Lamp for showcasing and night light",
          price: 19.0,
          quantity: 1,
          image: "bluelamp", // Updated to match actual image filename
          description: "Size: small, color: Every color",
        },
      ];
      setCartItems(dummyData);
    };

    fetchCartData();
  }, []);

  useEffect(() => {
    // Calculate total whenever cart items change
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setCartTotal(total);
  }, [cartItems]);

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const moveToSavedForLater = (itemId) => {
    // Find the item in cart
    const itemToMove = cartItems.find((item) => item.id === itemId);

    // Remove from cart
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));

    // Return the item to be saved (without quantity)
    return {
      id: itemToMove.id,
      image: itemToMove.image,
      name: itemToMove.name,
      price: itemToMove.price,
    };
  };

  return (
    <>
      <CartHeader />
      <Grid2
        padding={"0px 30px 0px 20px"}
        sx={{ backgroundColor: "#F4F4F4" }}
        pl={"40px"}
      >
        <Typography style={{ fontSize: "24px", fontWeight: "semi-bold" }}>
          My cart ({cartItems.length})
        </Typography>
      </Grid2>
      <Grid2
        container
        display={"flex"}
        direction={"row"}
        justifyContent={"space-between"}
        padding={"0px 30px 0px 20px"}
        sx={{ backgroundColor: "#F4F4F4" }}
      >
        <Grid2
          // sx={{ backgroundColor: "red" }}
          maxWidth={"880px"}
          // maxHeight={"552px"}
          padding={"0px 0px 0px 0px"}
          mt={"15px"}
          mb={"10px"}
          ml={"20px"}
          height={"auto"}
        >
          <CartItems
            items={cartItems}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            onSaveForLater={moveToSavedForLater}
          />
        </Grid2>
        <Grid2 mt={"15px"} mb={"10px"} ml={"0px"} height={"528px"} mr={"40px"}>
          <CartRight cartTotal={cartTotal} itemCount={cartItems.length} />
        </Grid2>
      </Grid2>
      {/* <Grid2 sx={{ backgroundColor: "#F4F4F4" }}>
        <SavedForLater />
      </Grid2> */}
      <Grid2
        sx={{
          pl: "40px",
          pt: "10px",
          pb: "10px",
          pr: "40px",
          borderBottomRightRadius: "10px",
          backgroundColor: "#F4F4F4",
        }}
      >
        <SavedForLater
          onAddToCart={addToCart}
          onReceiveItem={moveToSavedForLater}
        />
        <Bottompage />
      </Grid2>
      <Grid2 sx={{ backgroundColor: "#F4F4F4", pr: "190px" }}>
        <CartFooter />
      </Grid2>
    </>
  );
};

export default Cart;
