import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid2 } from "@mui/material";

export default function RadioButtons() {
  return (
    <Grid2>
      <FormControl>
        <FormLabel
          id="demo-radio-buttons-group-label"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Condition
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="Any " control={<Radio />} label="Any" />
          <FormControlLabel
            value="Refurbished"
            control={<Radio />}
            label="Refurbish"
          />
          <FormControlLabel
            value="Brand new"
            control={<Radio />}
            label="Brand new"
          />
          <FormControlLabel
            value="Old items"
            control={<Radio />}
            label="Old items"
          />
        </RadioGroup>
      </FormControl>
    </Grid2>
  );
}
