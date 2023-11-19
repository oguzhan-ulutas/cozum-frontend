import { useState, useEffect } from "react";
const CoverImage = ({ cover }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchImage(cover);
  }, []);

  const fetchImage = (cover) => {
    const url = "https://assign-api.piton.com.tr/api/rest/cover_image";

    fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ fileName: cover }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        setImageUrl(res.action_product_image.url);
      })
      .catch(function (err) {
        console.log("Image fetch error: ", err);
      });
  };
  return <img src={imageUrl} alt="" className="cover-image" />;
};

export default CoverImage;
