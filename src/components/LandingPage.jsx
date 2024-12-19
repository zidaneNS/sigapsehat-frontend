import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./LandingPageComp/Navbar";
import Hero from "./LandingPageComp/Hero";
const LandingPage = () => {
  return (
    <>
    <div className="">
      <Navbar />
      <Hero />
    </div>
    </>
  )
}

export default LandingPage