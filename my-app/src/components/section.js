import React from "react";
import Footer from "./footer";
import FooterSearchbox from "./footerSearchbox";
import Suppliers from "./suppliers";
import Form from "./formGrid";
function Section() {
  return (
    <>
      <Suppliers />
      <Form />
      <FooterSearchbox />

      <Footer />
    </>
  );
}

export default Section;
