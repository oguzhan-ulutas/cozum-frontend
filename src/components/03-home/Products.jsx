import { useEffect, useState } from "react";

import "./Products.css";
import CoverImage from "./CoverImage";

const Products = ({
  categories,
  setCategories,
  categoryIndex,
  capitalizeFirstLetter,
  formatNumber,
}) => {
  //Fetching products by category id
  useEffect(() => {
    fetchProducts();
  }, []);

  // Copy state for not mutating it.
  const updatedCategories = [...categories];

  const fetchProducts = () => {
    updatedCategories.forEach(async (category) => {
      const url = `https://assign-api.piton.com.tr/api/rest/products/${category.id}`;

      try {
        const response = await fetch(url, {
          method: "GET",
          mode: "cors",
        });
        const data = await response.json();

        if (response.status === 200) {
          category.products = data.product;
          setCategories([...updatedCategories]);
        } else {
          console.log(response);
        }
      } catch (error) {
        console.log("Product fetch failed", error);
      }
    });
  };

  const products = categories[categoryIndex].products;

  return (
    <div className="products">
      {products
        ? products.slice(0, 4).map((product) => {
            return (
              <div key={product.id} className="product">
                <CoverImage cover={product.cover} />
                <div className="product-info">
                  <div className="product-header">
                    <h5>{capitalizeFirstLetter(product.name)}</h5>
                    <p>{product.author}</p>
                  </div>
                  <h4>{formatNumber(product.price)} $</h4>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Products;
