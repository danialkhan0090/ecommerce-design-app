import React from "react";
import Footer from "./footer";
import FooterSearchbox from "./footerSearchbox";
import Suppliers from "./suppliers";
import Form from "./formGrid";
import ShirtCard from "../components/cards-for-items/shirtCards";
function Section() {
  return (
    <>
      <Suppliers />
      <Form />
      <ShirtCard />
      <FooterSearchbox />

      <Footer />
    </>
  );
}

export default Section;
