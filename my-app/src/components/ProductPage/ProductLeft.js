import * as React from "react";
import { Button, Grid2, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DiscreteSlider from "./slider";
import RadioButtons from "./RadioButtons";
import RatingCheckBox from "./RatingCheckBox";

export default function ProductLeft() {
  return (
    <>
      <Grid2
        container
        margin={"10px 0px 20px 20px"}
        sx={{ backgroundColor: "#FFF9F9" }}
        width={"280px"}
        height={"auto"}
      >
        <Grid2 container direction="column" textAlign="left">
          <Button
            sx={{
              textAlign: "left",
              justifyContent: "flex-start",
              paddingLeft: "0px",
            }}
            variant="text"
            size="large"
            style={{
              width: "170px",
              color: "black",
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
            }}
          >
            Category
          </Button>
          <Button
            sx={{
              textAlign: "left",
              justifyContent: "flex-start",
              paddingLeft: "0px",
            }}
            variant="text"
            size="large"
            style={{
              width: "170px",
              color: "#505050",
              fontSize: "14px",
              textTransform: "none",
            }}
          >
            Mobile accessories
          </Button>
          <Button
            sx={{
              textAlign: "left",
              justifyContent: "flex-start",
              paddingLeft: "0px",
            }}
            variant="text"
            size="large"
            style={{
              width: "170px",
              color: "#505050",
              fontSize: "14px",
              textTransform: "none",
            }}
          >
            Electronics
          </Button>
          <Button
            sx={{
              textAlign: "left",
              justifyContent: "flex-start",
              paddingLeft: "0px",
            }}
            variant="text"
            size="large"
            style={{
              width: "170px",
              color: "#505050",
              fontSize: "14px",
              textTransform: "none",
            }}
          >
            Smart phones
          </Button>
          <Button
            sx={{
              textAlign: "left",
              justifyContent: "flex-start",
              paddingLeft: "0px",
            }}
            variant="text"
            size="large"
            style={{
              width: "170px",
              color: "#505050",
              fontSize: "14px",
              textTransform: "none",
            }}
          >
            Modern tech
          </Button>
          <Button
            variant="text"
            size="small"
            color="primary"
            sx={{
              textTransform: "none",
              textAlign: "left",
              justifyContent: "flex-start",
              paddingLeft: "0px",
            }}
          >
            See all
          </Button>
        </Grid2>
        <Divider sx={{ width: "260px" }} />
        <Grid2 container direction="column" textAlign="left">
          <Button
            sx={{
              textAlign: "left",
              justifyContent: "flex-start",
              paddingLeft: "0px",
            }}
            variant="text"
            size="large"
            style={{
              width: "170px",
              color: "black",
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
            }}
          >
            Brands
          </Button>
          <FormControlLabel
            sx={{ color: "#505050" }}
            control={<Checkbox defaultChecked />}
            label="Samsung"
          />
          <FormControlLabel
            sx={{ color: "#505050" }}
            control={<Checkbox defaultChecked />}
            label="Apple"
          />
          <FormControlLabel
            sx={{ color: "#505050" }}
            control={<Checkbox defaultChecked />}
            label="Huawei"
          />
          <FormControlLabel
            sx={{ color: "#505050" }}
            control={<Checkbox defaultChecked />}
            label="Poco"
          />
          <FormControlLabel
            sx={{ color: "#505050" }}
            control={<Checkbox defaultChecked />}
            label="Lenovo"
          />
          <Button
            variant="text"
            size="small"
            color="primary"
            sx={{
              textTransform: "none",
              textAlign: "left",
              justifyContent: "flex-start",
              paddingLeft: "0px",
            }}
          >
            See all
          </Button>
        </Grid2>
        <Divider sx={{ width: "260px" }} />
        <Grid2 container direction="column" textAlign="left">
          <Button
            sx={{
              textAlign: "left",
              justifyContent: "flex-start",
              paddingLeft: "0px",
            }}
            variant="text"
            size="large"
            style={{
              width: "170px",
              color: "black",
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
            }}
          >
            Features
          </Button>

          <FormControlLabel
            sx={{ color: "#505050" }}
            control={<Checkbox defaultChecked />}
            label="Matalic"
          />
          <FormControlLabel
            sx={{ color: "#505050" }}
            control={<Checkbox defaultChecked />}
            label="Plastic covet"
          />
          <FormControlLabel
            sx={{ color: "#505050" }}
            control={<Checkbox defaultChecked />}
            label="8GB RAM"
          />
          <FormControlLabel
            sx={{ color: "#505050" }}
            control={<Checkbox defaultChecked />}
            label="Super power"
          />
          <FormControlLabel
            sx={{ color: "#505050" }}
            control={<Checkbox defaultChecked />}
            label="Large Memory"
          />
          <Button
            variant="text"
            size="small"
            color="white"
            sx={{
              textTransform: "none",
              textAlign: "left",
              justifyContent: "flex-start",
              paddingLeft: "0px",
            }}
          >
            See all
          </Button>

          <Divider sx={{ width: "260px" }} />

          <Button
            sx={{
              textAlign: "left",
              justifyContent: "flex-start",
              paddingLeft: "0px",
            }}
            variant="text"
            size="large"
            style={{
              width: "170px",
              color: "black",
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
            }}
          >
            Price range
          </Button>
          <DiscreteSlider />
        </Grid2>

        <Divider
          sx={{ width: "260px", marginTop: "20px", marginBottom: "10px" }}
        />
        <RadioButtons />
        <Divider
          sx={{ width: "260px", marginTop: "20px", marginBottom: "10px" }}
        />
        <Stack>
          <RatingCheckBox />
          <RatingCheckBox />
          <RatingCheckBox />
          <RatingCheckBox />
        </Stack>
      </Grid2>
    </>
  );
}
