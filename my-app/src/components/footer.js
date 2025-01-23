import { Button, Grid2 } from "@mui/material";
import React from "react";
import logoSymbol from "../assets/logo/logoSymbol.png";
import Typography from "@mui/material/Typography";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styled from "styled-components";
import Google from "../assets/logo/market.png";
import Apple from "../assets/logo/market-button.png";
import us from "../assets/logo/us.png";
function Footer() {
  const Stack = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0px;
    width: 100%;
    background-color: white;
    margin: 5px 5px 0px 4px;
  `;

  const GridItem = styled.div`
    // background: white;
    padding: 0px;
    text-align: center;
    // border: 1px solid #ccc;
  `;
  return (
    <>
      <Grid2 container sx={{ backgroundColor: "" }}>
        <Stack
          style={{
            marginLeft: "50px",
            paddingTop: "30px",
            paddingRight: "25px",
          }}
        >
          <Grid>
            <GridItem>
              <Stack
                direction="column"
                spacing={1}
                alignItems="center"
                padding={"15px 0px 0px 0px"}
              >
                <img
                  src={logoSymbol}
                  alt="Logo"
                  style={{ width: "36px", height: "36px" }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    alignItems: "center",
                    alignContent: "center",
                    color: "#B0D4FF",
                    fontWeight: "bold",
                  }}
                >
                  Brands
                </Typography>
              </Stack>
              <Typography style={{ fontSize: "12px", paddingTop: "13px" }}>
                Best information about the company <br /> is here to help you
                you can inspect
              </Typography>
              <Stack direction="row" spacing={1} padding={"10px 0px 0px 0px"}>
                <FacebookRoundedIcon
                  sx={{
                    color: "#B0D4FF",
                    marginRight: "10px",
                    marginTop: "5px",
                  }}
                />
                <TwitterIcon
                  sx={{
                    color: "#B0D4FF",
                    marginRight: "10px",
                    marginTop: "5px",
                  }}
                />
                <InstagramIcon
                  sx={{ color: " pink", marginRight: "10px", marginTop: "5px" }}
                />
                <LinkedInIcon
                  sx={{
                    color: "#B0D4FF",
                    marginRight: "10px",
                    marginTop: "5px",
                  }}
                />
                <YouTubeIcon
                  sx={{ color: "pink", marginRight: "10px", marginTop: "5px" }}
                />
              </Stack>
            </GridItem>
            <GridItem>
              <Typography
                sx={{
                  color: "theme.palette.footer.textHeading",
                  fontWeight: "bold",
                }}
              >
                About
              </Typography>
              <Typography
                sx={{
                  color: "#8B96A5",
                  fontSize: "14px",
                  textAlign: "center",
                  justifyContent: "left",
                  justifyItems: "left",
                }}
              >
                About us <br />
                Find store <br /> Categories <br /> Blogs
              </Typography>
            </GridItem>{" "}
            <GridItem>
              <Typography
                sx={{
                  color: "theme.palette.footer.textHeading",
                  fontWeight: "bold",
                }}
              >
                Partnership
              </Typography>
              <Typography
                sx={{
                  color: "#8B96A5",
                  fontSize: "14px",
                }}
              >
                About us <br />
                Find store <br /> Categories <br /> Blogs
              </Typography>
            </GridItem>
            <GridItem>
              <Typography
                sx={{
                  color: "theme.palette.footer.textHeading",
                  fontWeight: "bold",
                }}
              >
                Information
              </Typography>
              <Typography sx={{ color: "#8B96A5", fontSize: "14px" }}>
                Help Center <br />
                Money Refund <br /> Shipping <br /> Contact Us
              </Typography>
            </GridItem>
            <GridItem>
              <Typography
                sx={{
                  color: "theme.palette.footer.textHeading",
                  fontWeight: "bold",
                }}
              >
                For uses
              </Typography>
              <Typography sx={{ color: "#8B96A5", fontSize: "14px" }}>
                Login <br /> Register <br /> Settings <br /> My Orders
              </Typography>
            </GridItem>
            <GridItem>
              <Typography
                sx={{
                  color: "theme.palette.footer.textHeading",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  paddingRight: "10px",
                }}
              >
                Get App
              </Typography>
              <img
                src={Google}
                alt="Google"
                style={{ paddingRight: "10px", paddingTop: "10px" }}
              />
              <img
                src={Apple}
                alt="Apple"
                style={{ paddingRight: "10px", paddingTop: "4px" }}
              />
            </GridItem>
          </Grid>
        </Stack>
      </Grid2>
      <Grid2
        container
        spacing={2}
        height={"100px"}
        justifyContent={"space-between"}
        sx={{
          backgroundColor: "#f0f0f0",
          color: "theme.palette.footer.text",
        }}
      >
        <Grid2 padding={"15px 0px 20px 100px"} height={"100px"}>
          {" "}
          {/* <CopyrightIcon fontSize="5px" sx={{ color: "#8B96A5" }} /> */}
          <Typography
            sx={{ color: "#8B96A5", fontSize: "12px", paddingTop: "40px" }}
          >
            © 2023 Ecommerce
          </Typography>
        </Grid2>
        <Grid2 padding={"45px 100px 20px 00px"} height={"100px"}>
          <img
            src={us}
            alt="usflag"
            style={{
              paddingRight: "0px",
              height: "15px",
              marginBottom: "15px",
            }}
          />
          <Button
            variant="text"
            sx={{
              textTransform: "none",
              fontFamily: "fantasy",
              color: "#8B96A5",
              marginBottom: "35px",
            }}
          >
            English ▲
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
}

export default Footer;
