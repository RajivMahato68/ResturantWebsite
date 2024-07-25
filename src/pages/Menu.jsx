import React from "react";
import { MenuPage } from "../components";
import Loader from "./Loader";

function Menu() {
  return (
    <>
      <Loader />

      <MenuPage />
    </>
  );
}

export default Menu;
