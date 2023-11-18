import Header from "./Header";
import BannerArea from "./BannerArea";
import Categories from "./Categories";
import "./Home.css";

import { useEffect } from "react";

const Home = ({ categories, setCategories }) => {
  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <div className="home-container">
      <Header />
      <BannerArea />
      <Categories categories={categories} setCategories={setCategories} />
    </div>
  );
};

export default Home;
