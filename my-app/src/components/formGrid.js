import {
  Box,
  Grid2,
  TextField,
  Grid,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import formImage from "../assets/images/Background.jpg";
import * as React from "react";
import { ArrowDropDown } from "@mui/icons-material";

function Form() {
  return (
    <>
      <Grid2
        container
        height={"400px"}
        width={"auto"}
        justifyContent={"space-between"}
        sx={{
          backgroundImage: `url(${formImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyItems: "center",
          margin: "0px 47px 0px 46px",
          borderRadius: "5px",
        }}
      >
        <Grid2 item xs={6} sm={6} md={6} lg={6} margin="25px 0px 20px 20px">
          <Box
            sx={{
              display: "flex",
              width: " 400px",
              paddingLeft: 2,
              paddingTop: "0px",
              marginLeft: "20px",
              margin: "0px 0px 20px 0px",
              borderRadius: "5px",
            }}
          >
            <Box sx={{ height: "390px", width: "100%" }} sm={6}>
              <Stack>
                <Typography
                  variant="h4"
                  color="#FFFFFF"
                  align="left"
                  // fontWeight={"bold"}
                >
                  An easy way to send requests to all suppliers
                </Typography>
                <Typography
                  variant="h8"
                  color="#FFFFFF"
                  align="left"
                  // paddingTop={2}
                  // fontWeight={"bold"}
                >
                  An easy way to send requests to all suppliers An easy way to
                  send requests to all suppliers
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Grid2>
        <Grid2
          item
          xs={6}
          md={6}
          lg={6}
          // justifyItems={"flex-end"}
          // justifyContent="flex-end"
          // justifyContentContent={"end"}
          // justifyContentItems={"end"}
        >
          <Box
            sm={12}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "400px",
              paddingRight: 2,
              paddingTop: 2,
              // marginLeft: "1080px",
              backgroundColor: "white",
              margin: "20px 23px 10px 200px",
              borderRadius: "5px",
            }}
          >
            {" "}
            <Stack spacing={2}>
              <Typography
                variant="h6"
                // align="left"
                marginLeft="20"
              >
                Send qoute to suppliers
              </Typography>
              <form style={{ padding: "0px 0px 15px 15px" }}>
                <Grid container spacing={"15px"} alignItems="center">
                  {" "}
                  {/* First row - Simple text field */}
                  <Grid item xs={12}>
                    <TextField
                      label="Simple Text"
                      variant="outlined"
                      fullWidth
                      style={{ flexGrow: 1 }}
                    />
                  </Grid>
                  {/* Second row - Bigger text field */}
                  <Grid item xs={12}>
                    <TextField
                      label="Detailed Text"
                      variant="outlined"
                      multiline
                      rows={2}
                      fullWidth
                      style={{ flexGrow: 2 }}
                    />
                  </Grid>
                  {/* Third row - Quantity and file upload fields */}
                  <Grid item xs={12}>
                    <TextField
                      label="Quantity"
                      variant="outlined"
                      fullWidth
                      style={{ flexGrow: 1 }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="outlined"
                      color="#8B96A5"
                      component="label"
                      style={{ flexGrow: 1, textTransform: "none" }}
                    >
                      Pcs <ArrowDropDown /> <input type="file" hidden />
                    </Button>
                  </Grid>
                  <Button
                    variant="contained"
                    style={{
                      marginTop: "20px",
                      textTransform: "none",
                      marginLeft: "25px",
                    }}
                  >
                    Send inquiry
                  </Button>
                </Grid>
              </form>
            </Stack>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
}

export default Form;
