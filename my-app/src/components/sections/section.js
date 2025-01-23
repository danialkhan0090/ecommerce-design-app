import React from "react";
import Footer from "../footer";
import FooterSearchbox from "../footerSearchbox";
import Suppliers from "../suppliers";
import Form from "../formGrid";
import ShirtCard from "../cards-for-items";
import ServiceCard from "../servicesCards";
import DealsAndOffers from "../deals&offers";
import HomeAndOutdoor from "../home&outdoor";
import ConsumerElectronics from "../consumerElectronics";
function Section() {
  return (
    <>
      <DealsAndOffers />
      <HomeAndOutdoor />
      <ConsumerElectronics />
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
