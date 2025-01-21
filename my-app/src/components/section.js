import React from "react";
import Footer from "./footer";
import FooterSearchbox from "./footerSearchbox";
import Suppliers from "./suppliers";
import Form from "./formGrid";
import ShirtCard from "./cards-for-items";
import ServiceCard from "./servicesCards";
function Section() {
  return (
    <>
      <Form />
      <ShirtCard />
      <ServiceCard />
      <Suppliers />
      <FooterSearchbox />
      <Footer />
    </>
  );
}

export default Section;
