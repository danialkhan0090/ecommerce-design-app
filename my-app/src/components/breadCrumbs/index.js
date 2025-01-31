import * as React from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ProductPage2 from "../productPage2";
import ProductPage from "../ProductPage";
import Cart from "../cart";

export default function BasicBreadcrumbs() {
  const navigate = useNavigate();

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      onClick={() => navigate("/")}
      fontSize={"14px"}
      style={{ cursor: "pointer" }}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      onClick={() => navigate("/ProductPage")}
      fontSize={"14px"}
      style={{ cursor: "pointer" }}
    >
      Products
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      onClick={() => navigate("/ProductPage2")}
      fontSize={"14px"}
      style={{ cursor: "pointer" }}
    >
      All items
    </Link>,
    <Link
      underline="hover"
      key="4"
      color="inherit"
      onClick={() => navigate("/Cart")}
      fontSize={"14px"}
      style={{ cursor: "pointer" }}
    >
      Cart
    </Link>,

    <Typography fontSize={"15px"} key="4" sx={{ color: "text.primary" }}>
      Summer Clothings
    </Typography>,
  ];

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      {breadcrumbs}
    </Breadcrumbs>
  );
}
