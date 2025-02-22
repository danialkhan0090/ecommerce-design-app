import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import first from "../../assets/images/1.jpg";
import second from "../../assets/images/2.jpg";
import third from "../../assets/images/3.jpg";
import fourth from "../../assets/images/4.jpg";
import { Grid2 } from "@mui/material";

export default function ServiceCard() {
  const data = [
    {
      image: first,
    },
    {
      image: second,
    },
    {
      image: third,
    },
    {
      image: fourth,
    },
  ];

  return (
    <>
      <Grid2
        container
        maxWidth={"1200px"}
        marginLeft={"58px"}
        padding={"20px 20px 7px 0px"}
      >
        <Typography variant="h5" component="div" fontWeight={"bold"}>
          Our Extra services
        </Typography>
      </Grid2>
      <Grid2
        container
        sx={{
          //   maxWidth: "1200px",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <Grid2
          item
          xs={12}
          sx={{
            textAlign: "left",
            padding: "10px 0px 0px 0px",
          }}
        >
          {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx? */}
        </Grid2>
        <Grid2 container columnSpacing={2} justifyContent={"center"}>
          {data.map((item, index) => (
            <Grid2
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              padding={"10px"}
            >
              <Card
                sx={{
                  width: 285,
                }}
              >
                <CardMedia
                  sx={{
                    height: 200,
                    objectFit: "cover",
                  }}
                  image={item.image}
                />
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </>
  );
}
