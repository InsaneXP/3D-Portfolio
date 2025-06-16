import React from "react";
import Header from "./components/Header"; // ✅ Correct path based on your project structure
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection/>
      <CustomCursor/>
    </>
  );
}
