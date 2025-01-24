import { Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import home from "../../assets/images/home2.png";
import smartwatch from "../../assets/images/smartwatch.png";
import gopro from "../../assets/images/gopro.png";
import headset from "../../assets/images/headset.png";
import lap from "../../assets/images/lap.png";
import cattle from "../../assets/images/cattle.png";
import iphone from "../../assets/images/iphone.png";
import gamingset from "../../assets/images/gamingset.png";
import tab from "../../assets/images/tab.png";
import Button from "@mui/material/Button";

export default function ConsumerElectronics() {
  const HomeCard = [
    {
      title: "Smart watch",
      subtitle: "USD 19",
      image: smartwatch,
      title2: "gaming Set",
      subtitle2: "USD 35",
      image2: gamingset,
    },
    {
      title: "Cameras",
      subtitle: "USD 89",
      image: gopro,
      title2: "Laptops and Pcs",
      subtitle2: "USD 340",
      image2: lap,
    },
    {
      title: "Headphones",
      subtitle: "USD 10",
      image: headset,
      title2: "Tablets",
      subtitle2: "USD 240",
      image2: tab,
    },
    {
      title: "Cattle",
      subtitle: "USD 90",
      image: cattle,
      title2: "Mobiles",
      subtitle2: "USD 300",
      image2: iphone,
    },
  ];

  return (
    <>
      <Grid2
        container
        direction={"row"}
        margin={"7px 0px 20px 45px"}
        width={"auto"}
        display={"flex"}
      >
        <Grid2
          display={"flex"}
          xs={12}
          sm={6}
          md={4}
          width={"285px"}
          height={"254px"}
          sx={{
            backgroundImage: `url(${home})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            margin: "0px 0px 0px 0px",
            borderTopLeftRadius: "6px",
            borderBottomLeftRadius: "6px",
          }}
        >
          <Grid2
            alignSelf={"flex-start"}
            style={{
              marginTop: "14px",
              marginLeft: "19px",
            }}
          >
            <Grid2 display={"flex"} width={"108px"}>
              <Typography
                style={{
                  textAlign: "left",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Consumer Electronics and gadgets
              </Typography>
            </Grid2>
            <Grid2 display={"flex"}>
              <Button
                variant="contained"
                size="small"
                style={{
                  backgroundColor: "white",
                  fontWeight: "bold",
                  padding: "5px 10px 5px 10px",
                  boxShadow: "none",
                  borderRadius: "6px",
                  fontFamily: "fantasy",
                  color: "black",
                  textTransform: "none",
                  marginTop: "13px",
                }}
              >
                Source now
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
        {/* /////////////////////////////// 8 grids for items /////////////////////////////////// */}
        {HomeCard.map((item, index) => (
          <Grid2 container key={index}>
            <Grid2 item xs={12} sm={6} md={4}>
              <div
                style={{
                  display: "flex", // Use Flexbox for layout
                  padding: "20px",
                  height: "127px",
                  width: "248px",
                  borderTop: "1px solid #DEE2E7",
                  borderRight: "1px solid #DEE2E7",

                  alignItems: "center", // Center align items vertically
                  justifyContent: "space-between", // Space items on opposite sides
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                }}
              >
                <Stack
                  direction="column"
                  spacing={1}
                  alignItems="center"
                  marginBottom={"56px"}
                >
                  <Typography
                    variant="title"
                    style={{
                      marginRight: "auto",
                      fontSize: "16px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle"
                    style={{
                      marginRight: "auto",
                      fontSize: "13px",
                      color: "#8B96A5",
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                </Stack>

                {item.image && (
                  <img
                    src={item.image}
                    alt="img"
                    style={{
                      height: "82px", // Adjusted size to fit within the div
                      width: "90px",
                    }}
                  />
                )}
              </div>
              <div
                style={{
                  display: "flex", // Use Flexbox for layout
                  padding: "20px",
                  height: "127px",
                  width: "247px",
                  borderTop: "1px solid #DEE2E7",
                  borderRight: "1px solid #DEE2E7",
                  borderBottom: "1px solid #DEE2E7",
                  borderBottomRightRadius: "6px",
                  alignItems: "center", // Center align items vertically
                  justifyContent: "space-between", // Space items on opposite sides
                }}
              >
                <Stack
                  direction="column"
                  spacing={1}
                  alignItems="center"
                  marginBottom={"56px"}
                >
                  <Typography
                    variant="title1"
                    style={{
                      marginRight: "auto",
                      fontSize: "16px",
                    }}
                  >
                    {item.title2}
                  </Typography>
                  <Typography
                    variant="subtitle"
                    style={{
                      marginRight: "auto",
                      fontSize: "13px",
                      color: "#8B96A5",
                    }}
                  >
                    {item.subtitle2}
                  </Typography>
                </Stack>
                {item.image2 && (
                  <img
                    src={item.image2}
                    alt="img"
                    style={{
                      height: "82px", // Adjusted size to fit within the div
                      width: "82px",
                    }}
                  />
                )}
              </div>
            </Grid2>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}
