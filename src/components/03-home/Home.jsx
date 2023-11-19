import Header from "./Header";
import BannerArea from "./BannerArea";
import Categories from "./Categories";
import "./Home.css";

import { useEffect } from "react";

const Home = ({
  categories,
  setCategories,
  capitalizeFirstLetter,
  formatNumber,
}) => {
  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <div className="home-container">
      <Header />
      <BannerArea />
      <Categories
        categories={categories}
        setCategories={setCategories}
        capitalizeFirstLetter={capitalizeFirstLetter}
        formatNumber={formatNumber}
      />
    </div>
  );
};

export default Home;
