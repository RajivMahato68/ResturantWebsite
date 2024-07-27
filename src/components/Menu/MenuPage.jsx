import React from "react";
import { Layout } from "../index";
import FirstSection from "./FirstSection";
import Appetizers from "./Appetizers";
import Drink from "./Drink";
import Desserts from "./Desserts";
import MainCourse from "./MainC";
import Customer from "./Customer"

function MenuPage() {
  return (
    <Layout>
      <div>
        <FirstSection/>
      <Appetizers />
      <MainCourse />
      <Drink />
      <Desserts />
    <Customer />
      </div>
    </Layout>
  );
}

export default MenuPage;