import * as React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Grid2, Typography } from "@mui/material";

function not(a, b) {
  return a.filter((value) => !b.includes(value));
}

function intersection(a, b) {
  return a.filter((value) => b.includes(value));
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

export default function TransferList() {
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3, 4, 5]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const customList = (items) => (
    <Card>
      <Grid2 width={"200px"} marginLeft={"20px"} mt={"10px"}>
        <Divider />
      </Grid2>
      <CardHeader
        sx={{ p: 0 }} // set the padding to 2
        // action={
        //   <Button onClick={handleToggleAll(items)}>
        //     {numberOfChecked(items) === items.length
        //       ? "deselect"
        //       : "select all"}
        //   </Button>
        // }
      />
      <Typography style={{ margin: "10px 0px 10px 20px" }}>
        Categories
      </Typography>

      <List
        sx={{
          width: 240,
          height: 530,
          bgcolor: "background.paper",
          overflow: "auto",
        }}
        dense
        component="div"
        role="list"
      >
        <ListItemButton role="listitem" onClick={handleToggle()}>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <Typography>danial</Typography>
        </ListItemButton>
        <ListItemButton role="listitem" onClick={handleToggle()}>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <Typography>danial</Typography>
        </ListItemButton>
        <ListItemButton role="listitem" onClick={handleToggle()}>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <Typography>danial</Typography>
        </ListItemButton>
        <ListItemButton role="listitem" onClick={handleToggle()}>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <Typography>danialaaaaa</Typography>
        </ListItemButton>
      </List>
    </Card>
  );

  return (
    <Grid
      container
      spacing={2}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <Grid item>{customList(left)}</Grid>
      <Grid item></Grid>
    </Grid>
  );
}
