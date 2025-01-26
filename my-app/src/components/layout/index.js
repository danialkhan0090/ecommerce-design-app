import { Typography } from "@mui/material";
import React from "react";
import Header from "../header";
import Footer from "../footer";
const Layout = ({ children }) => {
  console.log(children);

  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
