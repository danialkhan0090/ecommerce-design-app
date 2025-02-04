import React from "react";
import { Button, Grid2, Typography } from "@mui/material";
import backimage from "../../assets/images/backimage.png";
function Bottompage() {
  return (
    <>
      <Grid2 direction={"row"}>
        <Grid2
          height={"120px"}
          width={"1240px"}
          display={"flex"}
          sx={{
            borderRadius: "5px",

            backgroundImage: `url(${backimage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid2
            // alignItems={"center"}
            // justifyContent={"center"}
            alignSelf={"center"}
            width={"400px"}
            ml={"50px"}
          >
            <Typography variant="h6" color="white">
              Super Discount on more then 100 USD
            </Typography>
            <Typography fontSize={"12px"} color="#F4F4F4">
              Find your favorite items , shop and get Rewards
            </Typography>
          </Grid2>
          <Grid2 alignSelf={"center"} mr={"50px"}>
            {" "}
            <Button
              variant="contained"
              style={{
                textTransform: "none",
                fontWeight: "bold",
                backgroundColor: "#FF9017",
              }}
            >
              Shop Now
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
}

export default Bottompage;
