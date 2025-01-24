import React from "react";
import { Box, Grid, Grid2, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ae from "../assets/logo/icon.png";
import aus from "../assets/logo/aus.png";
import us from "../assets/logo/us.png";
import uk from "../assets/logo/great.png";
import rus from "../assets/logo/rus.png";
import itl from "../assets/logo/itl.png";
import den from "../assets/logo/den.png";
import fren from "../assets/logo/fren.png";
import chi from "../assets/logo/chi.png";

function Suppliers() {
  const theme = useTheme();

  const dataTheme = theme.palette.footer.textData;

  const headingTheme = theme.palette.footer.textHeading;

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Box>
        <Grid2
          height={"50px"}
          marginLeft={"33px"}
          container
          justifyContent={"flex-start"}
        >
          <Typography variant="h5" fontWeight={"bold"}>
            Suppliers by region
          </Typography>
        </Grid2>
      </Box>
      <Grid container spacing={2}>
        {/* First Row with 5 Grid Items */}
        <Grid item xs={6} sm={4} md={2.4} lg={2.4}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.light,
              padding: 0,
              borderRadius: 1,
              //   boxShadow: 1,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img src={ae} alt="flag" style={{ width: "50px" }} />
            <Box>
              <Typography style={{ width: "137px" }}>
                <span style={{ color: headingTheme, alignItems: "left" }}>
                  Arabic Emarites
                </span>
                <span
                  style={{
                    color: dataTheme,
                    alignItems: "left",
                    fontFamily: "fantasy",
                    fontSize: "12px",
                    paddingRight: "20px",
                  }}
                >
                  {" "}
                  Shopename.ae
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} sm={4} md={2.4} lg={2.4}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.light,
              padding: 0,
              borderRadius: 1,
              //   boxShadow: 1,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img src={aus} alt="flag" style={{ width: "50px" }} />
            <Box>
              <Typography style={{ width: "137px" }}>
                <span
                  style={{
                    color: headingTheme,
                    alignItems: "left",
                    paddingRight: "20px",
                  }}
                >
                  Australia
                </span>
                <span
                  style={{
                    color: dataTheme,
                    alignItems: "left",
                    fontFamily: "fantasy",
                    fontSize: "12px",
                    paddingRight: "20px",
                  }}
                >
                  {" "}
                  Shopename.au
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2.4} lg={2.4}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.light,
              padding: 0,
              borderRadius: 1,
              //   boxShadow: 1,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img src={us} alt="flag" style={{ width: "50px" }} />
            <Box>
              <Typography style={{ width: "137px" }}>
                <span style={{ color: headingTheme, alignItems: "left" }}>
                  United States
                </span>
                <span
                  style={{
                    color: dataTheme,
                    alignItems: "left",
                    fontFamily: "fantasy",
                    fontSize: "12px",
                    paddingRight: "20px",
                  }}
                >
                  {" "}
                  Shopename.us
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Second Row with 5 Grid Items */}
        <Grid item xs={6} sm={4} md={2.4} lg={2.4}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.light,
              padding: 0,
              borderRadius: 1,
              //   boxShadow: 1,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img src={rus} alt="flag" style={{ width: "50px" }} />
            <Box>
              <Typography style={{ width: "120px" }}>
                <span
                  style={{
                    color: headingTheme,
                    alignItems: "left",
                    paddingRight: "10px",
                  }}
                >
                  Rusia
                </span>
                <span
                  style={{
                    color: dataTheme,
                    alignItems: "left",
                    fontFamily: "fantasy",
                    fontSize: "12px",
                    paddingLeft: "10px",
                  }}
                >
                  {" "}
                  Shopename.ru
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2.4} lg={2.4}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.light,
              padding: 0,
              borderRadius: 1,
              //   boxShadow: 1,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img src={itl} alt="flag" style={{ width: "50px" }} />
            <Box>
              <Typography style={{ width: "137px" }}>
                <span
                  style={{
                    color: headingTheme,
                    alignItems: "left",
                    paddingRight: "30px",
                  }}
                >
                  Italy{" "}
                </span>
                <span
                  style={{
                    color: dataTheme,
                    alignItems: "left",
                    fontFamily: "fantasy",
                    fontSize: "12px",
                    paddingRight: "20px",
                  }}
                >
                  {" "}
                  Shopename.it
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2.4} lg={2.4}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.light,
              padding: 0,
              borderRadius: 1,
              //   boxShadow: 1,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img src={den} alt="flag" style={{ width: "50px" }} />
            <Box>
              <Typography style={{ width: "137px" }}>
                <span
                  style={{
                    color: headingTheme,
                    alignItems: "left",
                    paddingRight: "30px",
                  }}
                >
                  Denmark
                </span>
                <span
                  style={{
                    color: dataTheme,
                    alignItems: "left",
                    fontFamily: "fantasy",
                    fontSize: "12px",
                    paddingRight: "20px",
                  }}
                >
                  {" "}
                  Shopename.de
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2.4} lg={2.4}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.light,
              padding: 0,
              borderRadius: 1,
              //   boxShadow: 1,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img src={fren} alt="flag" style={{ width: "50px" }} />
            <Box>
              <Typography style={{ width: "137px" }}>
                <span
                  style={{
                    color: headingTheme,
                    alignItems: "left",
                    paddingRight: "30px",
                  }}
                >
                  France
                </span>
                <span
                  style={{
                    color: dataTheme,
                    alignItems: "left",
                    fontFamily: "fantasy",
                    fontSize: "12px",
                    paddingRight: "20px",
                  }}
                >
                  {" "}
                  Shopename.fra
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2.4} lg={2.4}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.light,
              padding: 0,
              borderRadius: 1,
              //   boxShadow: 1,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img src={chi} alt="flag" style={{ width: "50px" }} />
            <Box>
              <Typography style={{ width: "137px" }}>
                <span
                  style={{
                    color: headingTheme,
                    alignItems: "left",
                    paddingRight: "40px",
                  }}
                >
                  China
                </span>
                <span
                  style={{
                    color: dataTheme,
                    alignItems: "left",
                    fontFamily: "fantasy",
                    fontSize: "12px",
                    paddingRight: "20px",
                  }}
                >
                  {" "}
                  Shopename.ch
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2.4} lg={2.4}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.light,
              padding: 0,
              borderRadius: 1,
              //   boxShadow: 1,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img src={ae} alt="flag" style={{ width: "50px" }} />
            <Box>
              <Typography style={{ width: "137px" }}>
                <span style={{ color: headingTheme, alignItems: "left" }}>
                  Arabic Emirates
                </span>
                <span
                  style={{
                    color: dataTheme,
                    alignItems: "left",
                    fontFamily: "fantasy",
                    fontSize: "12px",
                    paddingRight: "20px",
                  }}
                >
                  {" "}
                  Shopename.ae
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2.4} lg={2.4}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.light,
              padding: 0,
              borderRadius: 1,
              //   boxShadow: 1,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img src={uk} alt="flag" style={{ width: "50px" }} />
            <Box>
              <Typography style={{ width: "137px" }}>
                <span style={{ color: headingTheme, alignItems: "left" }}>
                  Greater Britain
                </span>
                <span
                  style={{
                    color: dataTheme,
                    alignItems: "left",
                    fontFamily: "fantasy",
                    fontSize: "12px",
                    paddingRight: "20px",
                  }}
                >
                  {" "}
                  Shopename.br
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Suppliers;
