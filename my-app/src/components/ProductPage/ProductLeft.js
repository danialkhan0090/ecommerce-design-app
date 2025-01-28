import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid2, Typography } from "@mui/material";

export default function ProductLeft() {
  return (
    <Grid2
      display={"flex"}
      marginLeft={"20px"}
      sx={{ backgroundColor: "red" }}
      width={"310px"}
      height={"230px"}
    >
      <FormControl
        variant="standard"
        sx={{
          minWidth: 280,
          // backgroundColor: "#DEE2E7",

          justifyContent: "center",
        }}
      >
        <Typography>Category</Typography>
        <Select sx={{ backgroundColor: "#DEE2E7" }} defaultOpen={true}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30} sx={{ backgroundColor: "#DEE2E7" }}>
            Thirty
          </MenuItem>
          <MenuItem value={30}>aladin</MenuItem>
        </Select>
      </FormControl>
    </Grid2>
  );
}
