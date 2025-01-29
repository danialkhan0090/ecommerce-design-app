import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Grid, Grid2 } from "@mui/material";

export default function RatingSize() {
  return (
    <Stack>
      <FormControlLabel
        control={<Checkbox sx={{ marginBottom: "7px" }} />}
        label={<Rating name="size-small" defaultValue={2} size="small" />}
      />
    </Stack>
  );
}
