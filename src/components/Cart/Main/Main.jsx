import styleMain from "./Main.module.css";
import CurrentProduct from "./CurrentProduct/CurrentProduct";

const Main = (props) => {
  const productCart = props.productCart;
  return (
    <main className={styleMain.container}>
      {productCart.length === 0 ? (
        <h2 className={styleMain.cartEmpty}>Your cart is empty!</h2>
      ) : (
        ""
      )}
      {productCart.map((product) => (
        <CurrentProduct
          dataProduct={product}
          deleteProduct={props.deleteProduct}
        />
      ))}
    </main>
  );
};
export default Main;
