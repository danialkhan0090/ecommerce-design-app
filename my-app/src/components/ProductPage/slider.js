import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid2 } from "@mui/material";

function valuetext(value) {
  return `${value}`;
}

export default function PriceRangeForm() {
  const [value, setValue] = React.useState([20, 80]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid2>
        <Box sx={{ width: 160, marginLeft: "20px" }}>
          <Slider
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            max={100}
          />
        </Box>
      </Grid2>

      <div style={{ padding: "0px", margin: "20px 20px 0px 0px" }}>
        <form>
          <div
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <TextField
              id="min-price"
              label="Min Price"
              variant="outlined"
              value={value[0]}
              onChange={(e) => setValue([e.target.value, value[1]])}
              InputProps={{
                style: {
                  height: "40px",
                  padding: "0 14px", // Adjust to fit your needs
                },
              }}
            />
            <TextField
              id="max-price"
              label="Max Price"
              variant="outlined"
              value={value[1]}
              onChange={(e) => setValue([value[0], e.target.value])}
              InputProps={{
                style: {
                  height: "40px",
                  padding: "0 14px", // Adjust to fit your needs
                },
              }}
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            color="white"
            style={{
              marginTop: "0px",
              color: "blue",
              textTransform: "none",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            Apply
          </Button>
        </form>
      </div>
    </>
  );
}
