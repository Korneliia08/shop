import style from "./CartPage.module.css";
import MyCart from "./MyCart/MyCart";
import DateOfOrder from "./DateOfOrder/DateOfOrder";
import BtnArrowBack from "../BtnArrowBack/BtnArrowBack";

const CartPage = (props) => {
  return (
    <div className={style.container}>
      <div>
        <h2 className={style.title}>My Cart</h2>
        {props.data.length === 0 ? <h3>No product in cart!</h3> : ""}
        <MyCart
          data={props.data}
          changeProduct={props.changeProduct}
          deleteProduct={props.deleteProduct}
        />
      </div>
      <DateOfOrder data={props.data} />
      <BtnArrowBack />
    </div>
  );
};
export default CartPage;
