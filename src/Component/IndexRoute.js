import React from "react";
import ViewDemo from "./VIEW_DEMO/ViewDemo";
import Documentation from "./DOCUMENTATION/Documentation";
import FAQ from "./FAQ/FAQ";
import Features from "./FEATURES/Features";
import FriendlySupport from "./FRIENDLY_SUPPORT/FriendlySupport";
import NavBar from "./NavBar";
import "./Style/indexroute.scss";
const Index = () => {
  return (
    <>
      <div className="index">
        <NavBar />
        <ViewDemo />
        <Features />
        <FAQ />
        <Documentation />
        <FriendlySupport />
      </div>
    </>
  );
};

export default Index;
