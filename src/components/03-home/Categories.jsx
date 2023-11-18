import { useEffect } from "react";

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
};

export default Categories;
