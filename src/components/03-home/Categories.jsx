import { useEffect } from "react";
import { Link } from "react-router-dom";

import Products from "./Products";

const Categories = ({ categories, setCategories }) => {
  // Fetching catagories
  useEffect(() => {
    const url = "https://assign-api.piton.com.tr/api/rest/categories";

    fetch(url, {
      method: "GET",
      mode: "cors",
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        setCategories(res.category);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="categories">
      {categories.map((category, index) => {
        return (
          <div key={category.id}>
            <div className="category-header">
              <h2>{category.name}</h2>
              <Link>Viev All</Link>
            </div>
            <Products
              categoryIndex={index}
              categories={categories}
              setCategories={setCategories}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
