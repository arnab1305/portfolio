import React from "react";
import Navbar from "./navbar";
import { Hero } from "./hero";
import { Linkbar } from "./linkbar";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Linkbar />
    </>
  );
};
