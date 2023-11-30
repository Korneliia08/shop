import styleFooter from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
  const navigate = useNavigate();

  function displayCartPage() {
    props.setOpen(false);
    navigate("/cart");
  }

  return (
    <footer className={styleFooter.footer}>
      <button className={styleFooter.btnDisplayCart} onClick={displayCartPage}>
        Display cart
      </button>
    </footer>
  );
};
export default Footer;
