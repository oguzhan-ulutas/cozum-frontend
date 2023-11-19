import { useParams, Link } from "react-router-dom";
import Header from "../03-home/Header";
import CoverImage from "../03-home/CoverImage";

import "./CategoryDetail.css";

const CategoryDetail = ({
  categories,
  capitalizeFirstLetter,
  formatNumber,
}) => {
  const { id } = useParams();

  const category = categories.filter((category) => category.id == id)[0];
  const { products } = category;

  return (
    <div className="home-container">
      <Header />
      <div className="category-container">
        <Link to="/home">
          <h2>{`< ${category.name}`}</h2>
        </Link>

        <div className="products-detail">
          {products.map((product) => {
            return (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div key={product.id} className="product-detail">
                  <CoverImage cover={product.cover} />
                  <div className="product-info-detail">
                    <div className="product-header-detail">
                      <h5>{capitalizeFirstLetter(product.name)}</h5>
                      <p>{product.author}</p>
                    </div>
                    <h4>{formatNumber(product.price)} $</h4>
                  </div>
                </div>{" "}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
