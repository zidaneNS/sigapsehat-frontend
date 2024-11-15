import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./LandingPageComp/Navbar";
import Hero from "./LandingPageComp/Hero";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default LandingPage