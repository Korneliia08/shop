import style from "./CurrentProduct.module.css";

const CurrentProduct = (props) => {
  const product = props.dataProduct;

  function deleteProduct() {
    props.deleteProduct(product.id);
  }

  return (
    <div className={style.block}>
      <span className={style.delete} onClick={deleteProduct}>
        X
      </span>
      <div className={style.containerForImageAndPrice}>
        <img src={product.image} alt="image product" className={style.image} />
        <span className={style.priceSpan}>{product.price}$</span>
      </div>
      <div className={style.someInformation}>
        <h2 className={style.title}>{product.title.slice(0, 15)}....</h2>
        <span className={style.spanWhite}>
          Count: <span className={style.spanGreen}>{product.count}</span>
        </span>
        <span>
          <span className={style.spanWhite}>
            Sum of {product.count} products: &nbsp;
          </span>
          <span className={style.spanGreen}>
            {Math.round(product.count * product.price * 100) / 100}$
          </span>
        </span>
      </div>
    </div>
  );
};
export default CurrentProduct;
