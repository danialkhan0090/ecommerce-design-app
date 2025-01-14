import React from "react";
import { Grid2, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
function FooterSearchbox() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "25vh", // 100% of viewport height
          backgroundColor: "#f0f0f0",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={"bold"}
          component="div"
          sx={{ textAlign: "center" }}
        >
          Subscribe to our newsletter
        </Typography>
        <br />
        <TextField
          type="email"
          placeholder="Enter your email"
          variant="outlined"
          size="small"
          sx={{ marginRight: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {" "}
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary" size="small">
          Search
        </Button>
      </Box>
    </>
  );
}

export default FooterSearchbox;
