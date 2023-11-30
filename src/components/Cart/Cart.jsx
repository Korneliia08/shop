import styleCart from "./Cart.module.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Sum from "./Sum/Sum";

const Cart = (props) => {
  const open = props.open;

  return (
    <aside
      className={styleCart.cartBlock}
      style={{ right: open ? "0px" : "-410px" }}
    >
      <Header setOpen={props.setOpen} />
      <Main
        productCart={props.productCart}
        deleteProduct={props.deleteProduct}
      />
      <Sum productCart={props.productCart} />
      <Footer setOpen={props.setOpen} />
    </aside>
  );
};
export default Cart;
