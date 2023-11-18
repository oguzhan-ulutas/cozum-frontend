import { useEffect } from "react";
const Products = ({ categories, setCategories, categoryIndex }) => {
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
  console.log(categories[categoryIndex].products);
  return (
    <div className="products">
      {categories[categoryIndex].products.map((product) => {
        return (
          <div key={product.id} className="product">
            <img src={product.cover} alt="" />
            <div className="product-info">
              <div className="product-header">
                <h5>{product.name}</h5>
                <p>{product.author}</p>
              </div>
              <h4>{product.price}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
