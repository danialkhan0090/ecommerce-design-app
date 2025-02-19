import { Opacity } from "@mui/icons-material";
import { Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import watch from "../../assets/images/watch2.png";
import lap from "../../assets/images/lap.png";
import gopro from "../../assets/images/gopro.png";
import headset from "../../assets/images/headset.png";
import mbl from "../../assets/images/mbl.png";

function DealsAndOffers() {
  const carditems = [
    {
      image: watch,
      name: "Smart watch",
      off: "-25%",
    },
    {
      image: lap,
      name: "Laptop",
      off: "-15%",
    },
    {
      image: gopro,
      name: "GoPro",
      off: "-40%",
    },
    {
      image: headset,
      name: "Headset",
      off: "-25%",
    },
    {
      image: mbl,
      name: "Mobile",
      off: "-25%",
    },
  ];
  return (
    <>
      <Grid2
        marginLeft={"46px"}
        direction={"row"}
        width={" 100%"}
        display={"flex"}
      >
        <Grid2
          // naw change/////////////////////////// disply
          sm={4}
          lg={4}
          xl={4}
          width={250}
          height={235}
          margin={"10px 0px 10px 0px"}
          sx={{ borderRadius: "6px", backgroundColor: "#FFFFFF" }}
          border={"1px solid #DEE2E7"}
          padding={"10px 0px 10px 10px"}
        >
          <Typography textAlign={"left"}>
            <span
              style={{
                fontFamily: "inter",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Deals & Offers
            </span>
            <br />
            <span
              style={{
                fontFamily: "fantasy",
                color: "#7f7f7f",
                fontSize: "15px",
              }}
            >
              Hygiene equipment
            </span>
          </Typography>
          <br />

          <Box sx={{ width: 100 }}>
            <Stack direction={"row"} spacing={1}>
              <Chip
                sx={{
                  height: "40px",
                  width: "55px",
                  color: "white",
                  backgroundColor: "#606060",
                  borderRadius: "5px",
                  "& .MuiChip-label": {
                    display: "block",
                    whiteSpace: "normal",
                  },
                }}
                label="04 Days"
              />
              <Chip
                sx={{
                  height: "40px",
                  width: "55px",
                  color: "white",
                  backgroundColor: "#606060",
                  borderRadius: "5px",
                  "& .MuiChip-label": {
                    display: "block",
                    whiteSpace: "normal",
                  },
                }}
                label="13 hour"
              />
              <Chip
                sx={{
                  height: "40px",
                  width: "55px",
                  color: "white",
                  backgroundColor: "#606060",
                  borderRadius: "5px",
                  "& .MuiChip-label": {
                    display: "block",
                    whiteSpace: "normal",
                  },
                }}
                label="56 sec"
              />
            </Stack>
          </Box>
        </Grid2>

        {carditems.map((item, index) => (
          <Grid2
            sm={12}
            xs={12}
            md={6}
            key={index}
            sx={{
              borderRadius: "6px",
              borderRight: "1px solid #DEE2E7",
              borderTop: "1px solid #DEE2E7",
              borderBottom: "1px solid #DEE2E7",
              justifyContent: "center",
              alignItems: "center",
              width: 205,
              height: 235,
              margin: "10px 0px 15px 0px",
              padding: "10px 0px 10px 30px",
            }}
          >
            <img src={item.image} alt={item.name} />
            <Typography pl={5}>{item.name}</Typography>
            <Chip
              style={{ marginBottom: "20px" }}
              sx={{
                ml: 5,
                height: "28px",
                width: "61px",
                color: "red",
                backgroundColor: "#FFE3E3",
                borderRadius: "10px",
                "& .MuiChip-label": {
                  display: "block",
                  whiteSpace: "normal",
                },
              }}
              label={item.off}
            />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}

export default DealsAndOffers;
