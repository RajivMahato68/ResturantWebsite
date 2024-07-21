import React from "react";
import { Layout } from "../index";
import FirstSection from "./FirstSection";
import Card from "./Card";
import Menu from "./Menu";
import BookingForm from "./BookTime";
import About from "./About";
import ChefAbout from "./ChefAbout";
import LatestNews from "./LatestNews";
import Comment from "./Comment"
import OurResturant from "./OurResturant";

function HomePage() {
  return (
    <Layout>
      <div className="relative">
        <FirstSection />
        <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:mt-[550px] md:flex md:overflow-hidden md:justify-center md:space-x-4">
          <Card />
        </div>
      </div>
      <div className="md:mt-[200px]">
      <Menu />
      </div>
      
      <BookingForm />
      <About />
      <ChefAbout />
      <LatestNews />
      <Comment />
      <OurResturant />
    </Layout>
  );
}

export default HomePage;
