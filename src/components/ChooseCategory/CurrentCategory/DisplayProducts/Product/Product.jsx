import styleProduct from "./Product.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

const Product = (props) => {
  const navigate = useNavigate();

  function setUrl() {
    navigate(`/product/${data.id}`);
  }

  const data = props.dataProduct;

  return (
    <div className={styleProduct.block} onClick={setUrl}>
      <div className={styleProduct.blockForImage}>
        <img
          src={data.image}
          alt="image Clothes"
          className={styleProduct.img}
        />

        <div className={styleProduct.blockForReadMore}>
          <span className={styleProduct.spanReadMore}>Read more</span>
        </div>
      </div>
      <h2 className={styleProduct.title}>{data.title.slice(0, 15)}....</h2>
      <span className={styleProduct.price}>{data.price} $</span>
    </div>
  );
};

export default Product;
