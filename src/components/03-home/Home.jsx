import Header from "./Header";
import BannerArea from "./BannerArea";
import Categories from "./Categories";
import "./Home.css";

const Home = ({ categories, setCategories }) => {
  return (
    <div className="home-container">
      <Header />
      <BannerArea />
      <Categories categories={categories} setCategories={setCategories} />
    </div>
  );
};

export default Home;
