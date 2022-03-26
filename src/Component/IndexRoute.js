import React from "react";
import ViewDemo from "./VIEW_DEMO/ViewDemo";
import Documentation from "./DOCUMENTATION/Documentation";
import FAQ from "./FAQ/FAQ";
import Features from "./FEATURES/Features";
import FriendlySupport from "./FRIENDLY_SUPPORT/FriendlySupport";
import NavBar from "./NavBar";
const Index = () => {
  return (
    <>
      <NavBar />
      <ViewDemo />
      <Features />
      <FAQ />
      <Documentation />
      <FriendlySupport />
    </>
  );
};

export default Index;
