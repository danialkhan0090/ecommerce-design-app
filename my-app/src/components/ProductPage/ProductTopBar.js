import { Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";
import WindowIcon from "@mui/icons-material/Window";
import TableRowsIcon from "@mui/icons-material/TableRows";

function ProductTopBar() {
  const SelectBox = styled.select`
    height: auto;
    border-radius: 5px;
    outline: none;
  `;
  return (
    <>
      <Grid2
        container
        display={"flex"}
        direction={"row"}
        width={"auto"}
        justifyContent={"space-between"}
        mt={"10px"}
        padding={"5px"}
        sx={{ backgroundColor: "white", borderRadius: "5px" }}
      >
        <Grid2 mt={"10px"}>
          <Typography variant="body2">
            <span style={{ color: "black", fontSize: "15px" }}>
              12,911 items in
            </span>
            <span
              style={{
                color: "black",
                fontSize: "15px",
                fontWeight: "bold",
                marginLeft: "5px",
              }}
            >
              Mobile accessories
            </span>
          </Typography>
        </Grid2>

        <Grid2 direction={"row"}>
          <Stack direction={"row"}>
            <Grid2>
              <Typography color="#black" variant="body2">
                {<Checkbox sx={{ mb: "3px" }} />}Varified only
              </Typography>
            </Grid2>
            <Grid2 ml={"10px"}>
              <SelectBox
                style={{
                  backgroundColor: "white",
                  padding: "5px 20px 5px 10px",
                  border: "1px solid #DEE2E7",
                  width: "200px",
                  height: "30px",
                  marginTop: "7px",
                  marginLeft: "10px",
                }}
              >
                <option value="category1">Featured</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </SelectBox>
            </Grid2>
            <Grid2 mt={"6px"} ml={"8px"} justifyContent={"space-between"}>
              {" "}
              <WindowIcon sx={{ fontSize: "32px" }} />
              <TableRowsIcon sx={{ fontSize: "32px" }} />
            </Grid2>
          </Stack>
        </Grid2>
      </Grid2>
    </>
  );
}

export default ProductTopBar;
