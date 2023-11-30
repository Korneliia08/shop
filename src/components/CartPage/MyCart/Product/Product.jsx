import style from "./Product.module.css";
import BetterInput from "./betterInput/betterInput";

const Product = (props) => {
  function returnTotalPrice() {
    const price = data.count * data.price;
    return Math.round(price * 100) / 100;
  }

  function remove() {
    props.deleteProduct(data.id);
  }

  const data = props.data;
  return (
    <div className={style.container}>
      <div className={style.blockForImageAndPrice}>
        <img
          src={data.image}
          alt="image of the product"
          className={style.img}
        />
        <span className={style.spanPrice}>{data.price}$</span>
      </div>
      <div className={style.informationDiv}>
        <span>{data.title}</span>
        {data.category !== "jewelery" ? (
          <span className={style.spanPrice}>
            Color:&nbsp;
            <span style={{ color: data.color }} className={style.colorCategory}>
              {data.color}
            </span>
          </span>
        ) : (
          ""
        )}

        <span>
          Category:&nbsp;
          <span className={style.spanCategory}>{data.category}</span>
        </span>
      </div>
      <div className={style.miniContainer}>
        <div className={style.countDiv}>
          <BetterInput changeProduct={props.changeProduct} data={data} />
        </div>
        <div className={style.totalPrice}>{returnTotalPrice()}$</div>
        <div className={style.deleteDiv}>
          <button onClick={remove}>X</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
