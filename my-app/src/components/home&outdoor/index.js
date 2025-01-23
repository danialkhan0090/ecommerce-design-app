import { Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import home from "../../assets/images/Home.png";
import chair from "../../assets/images/chair.png";
import lamp from "../../assets/images/lamp.png";
import kitchen from "../../assets/images/kitchen.png";
import mud from "../../assets/images/mud.png";
import mixcher from "../../assets/images/mixcher.png";
import blender from "../../assets/images/blender.png";
import carpit from "../../assets/images/carpit.png";
import plant from "../../assets/images/plant.png";

export default function HomeAndOutdoor() {
  const HomeCard = [
    {
      title: "Soft chair",
      subtitle: "USD 19",
      image: chair,
      title2: "mixcher",
      subtitle2: "USD 39",
      image2: mixcher,
    },
    {
      title: "Lamp",
      subtitle: "USD 19",
      image: lamp,
      title2: "blender",
      subtitle2: "USD 39",
      image2: blender,
    },
    {
      title: "Dishes",
      subtitle: "USD 19",
      image: kitchen,
      title2: "carpit",
      subtitle2: "USD 19",
      image2: carpit,
    },
    {
      title: "Mud Cup",
      subtitle: "USD 19",
      image: mud,
      title2: "plant",
      subtitle2: "USD 9",
      image2: plant,
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
          item
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
        ></Grid2>
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
                    variant="title2"
                    style={{
                      marginRight: "auto",
                      fontSize: "16px",
                    }}
                  >
                    {item.title2}
                  </Typography>
                  <Typography
                    variant="subtitle2"
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
