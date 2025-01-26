import React from "react";
import { Grid2, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import useTheme from "@mui/material/styles/useTheme";

function FooterSearchbox() {
  const theme = useTheme();
  const dataTheme = theme.palette.footer.textData;
  const headingTheme = theme.palette.footer.textHeading;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "25vh", // 100% of viewport height
          width: "100%",
          backgroundColor: "#f0f0f0",
        }}
      >
        <Stack direction={"column"}>
          <Grid2>
            <Typography
              variant="h6"
              // fontWeight={"bold"}
              // component="div"
              sx={{
                textAlign: "center",
                color: headingTheme,
              }}
            >
              Subscribe to our newsletter
            </Typography>
            <Typography
              variant="h8"
              sx={{ textAlign: "center", color: dataTheme, lineHeight: 3 }}
            >
              Get daily news on upcoming offers from many suppliers all over the
              world
            </Typography>
          </Grid2>

          <Grid2>
            <TextField
              type="email"
              placeholder="Email"
              variant="outlined"
              size="small"
              sx={{ marginRight: 1, marginLeft: 11 }}
              style={{ backgroundColor: "white" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="medium"
              sx={{ textTransform: "none" }}
            >
              Subscribe
            </Button>
          </Grid2>
        </Stack>
      </Box>
    </>
  );
}

export default FooterSearchbox;
