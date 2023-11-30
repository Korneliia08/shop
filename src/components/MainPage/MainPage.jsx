import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import data from "../../data";
import { Outlet } from "react-router-dom";
import BtnArrowTop from "../BtnArrowTop/BtnArrowTop";
import Cart from "../Cart/Cart";

const MainPage = (props) => {
  return (
    <>
      <Header dataHeader={data.header} setOpen={props.setOpen} />
      <Outlet></Outlet>
      <BtnArrowTop />
      <Footer dataFooter={data.footer} />
      <Cart
        open={props.open}
        setOpen={props.setOpen}
        productCart={props.productCart}
        deleteProduct={props.deleteProduct}
      />
    </>
  );
};
export default MainPage;
