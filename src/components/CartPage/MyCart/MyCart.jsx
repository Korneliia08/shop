import style from "./MyCart.module.css";
import Product from "./Product/Product";

const MyCart = (props) => {
  return (
    <div className={style.container}>
      {props.data.map((product) => (
        <Product
          data={product}
          changeProduct={props.changeProduct}
          deleteProduct={props.deleteProduct}
        />
      ))}
    </div>
  );
};
export default MyCart;
