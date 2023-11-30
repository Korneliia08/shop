import styleFormForCart from "./FormForCart.module.css";
import cartIcon from "../../../../../../../assets/icons/cart.svg";
import { useEffect, useState } from "react";

const FormForCart = (props) => {
  const [color, setColor] = useState();
  const [count, setCount] = useState(1);
  const product = props.product;
  useEffect(() => {
    if (category !== "jewelery") {
      setColor("blue");
    }
  }, []);

  function setColorClass(color) {
    setColor(color);
  }

  function openCart() {
    props.setOpen(true);
    product.count = count;
    product.color = color;
    props.addProduct(product);
  }

  const category = props.product.category;

  function changeCount(event) {
    const count = event.target.value;
    if (count <= 0) return;
    setCount(count);
  }

  return (
    <>
      <div
        className={styleFormForCart.blockForRadioBtns}
        style={{ display: category === "jewelery" ? "none" : "block" }}
      >
        <h5 className={styleFormForCart.colorText}>Your color: {color}</h5>
        <button
          className={[
            styleFormForCart.radioRed,
            color === "red" ? styleFormForCart.select : "",
          ].join(" ")}
          onClick={() => setColorClass("red")}
        ></button>
        <button
          className={[
            styleFormForCart.radioBlue,
            color === "blue" ? styleFormForCart.select : "",
          ].join(" ")}
          onClick={() => setColorClass("blue")}
        ></button>
        <button
          className={[
            styleFormForCart.radioGreen,
            color === "green" ? styleFormForCart.select : "",
          ].join(" ")}
          onClick={() => setColorClass("green")}
        ></button>
        <button
          className={[
            styleFormForCart.radioYellow,
            color === "yellow" ? styleFormForCart.select : "",
          ].join(" ")}
          onClick={() => setColorClass("yellow")}
        ></button>
      </div>
      <div className={styleFormForCart.blockForInputNumber}>
        <label
          htmlFor="numberOfClothest"
          className={styleFormForCart.labelNumber}
        >
          Number:
        </label>
        <input
          value={count}
          onChange={changeCount}
          type="number"
          id="numberOfClothest"
          max={999}
          className={styleFormForCart.inputNumber}
        />
      </div>
      <div className={styleFormForCart.blockForBtn}>
        <button className={styleFormForCart.btnCart} onClick={openCart}>
          Add
          <img
            src={cartIcon}
            alt="icon cart"
            className={styleFormForCart.iconCart}
          />
        </button>
      </div>
    </>
  );
};
export default FormForCart;
