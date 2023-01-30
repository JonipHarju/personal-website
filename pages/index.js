import React from "react";
import ResponsiveAppBar from "../Components/Navbar/Navbar";
import LandingPage from "../Components/LandingSection/LandingSection";
import AboutMe from "../Components/AboutMe/AboutMe";
import Projects from "../Components/Projects/Projects";

export default function moi() {
  return (
    <div>
      <ResponsiveAppBar />
      <LandingPage />
      <AboutMe />
      <Projects />
    </div>
  );
}
