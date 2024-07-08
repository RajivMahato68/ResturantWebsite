import React from "react";
import { Footer, NavBar } from "../index";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
