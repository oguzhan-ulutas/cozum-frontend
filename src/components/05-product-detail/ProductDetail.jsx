import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProductDetail.css";
import heart from "../../assets/product-detail/heart.png";

import Header from "../03-home/Header";
import CoverImage from "../03-home/CoverImage";

const ProductDetail = ({ categories, capitalizeFirstLetter, formatNumber }) => {
  const { productid } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    categories.forEach((category) => {
      category.products.forEach((product) => {
        if (product.id == productid) {
          console.log(product);
          setProduct(product);

          return;
        }
      });
    });
  }, []);
  //   console.log(product);

  return (
    <div className="home-container">
      <Header />
      <div className="product-detail-container">
        <Link to="/home">
          <h2>{"< Book Details"}</h2>
        </Link>

        <div className="product-main-container">
          {product.name ? (
            <>
              <div className="product-image-container">
                <CoverImage cover={product.cover} />
              </div>
              <div className="product-info-container">
                <div className="product-info-header">
                  <div className="product-header-detail">
                    <h1>{capitalizeFirstLetter(product.name)}</h1>
                    <p>{product.author}</p>
                  </div>
                  <img src={heart} className="product-like"></img>
                </div>
                <div className="product-summary">
                  <h2>Summary</h2>
                  <p>{product.description}</p>
                </div>
                <div className="product-buy">
                  <h4>{formatNumber(product.price)}</h4>
                  <h4>Buy Now</h4>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
