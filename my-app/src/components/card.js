import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Cardian() {
  return (
    <Box sx={{ minWidth: 300 }}>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#E3F0FF",
          width: "300px",
          height: "206px",
          borderRadius: "5px",
          marginBottom: "3px",
          marginRight: "15px",
        }}
      >
        <CardContent>
          <Stack direction="row" spacing={1} alignItems="center">
            <AccountCircleIcon style={{ color: "#C7E1FF", fontSize: "50px" }} />
            <Typography variant="h6">
              Hi, user <br />
              Let's get started
            </Typography>
          </Stack>
        </CardContent>
        <CardActions>
          <Stack>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              style={{
                paddingLeft: "80px",
                paddingRight: "80px",
                // paddingBottom: "10px",
                marginBottom: "20px",
                marginLeft: "26px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Join Now
            </Button>
            <Button
              variant="contained"
              color="#FFFFFF"
              size="small"
              style={{
                paddingLeft: "50px",
                paddingRight: "50px",
                marginLeft: "26px",
              }}
            >
              Login
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </Box>
  );
}
