import React from "react";
import SliderNews from "../Components/SliderNews/SliderNews";
import NewsPage from "../Components/NewsPage/NewsPage";
import Footer from "../Components/Footer/Footer";
import HeaderNews from "../Components/HeaderNews/HeaderNews";
import CardNews from "../Components/CardNews/CardNews";

export default function page() {
  return (
    <div>
      <HeaderNews />
      <NewsPage />
      <SliderNews />
      <CardNews />
      <Footer />
    </div>
  );
}
