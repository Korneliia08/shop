import style from "./DateOfOrder.module.css";
import { useState } from "react";
import ModalWindow from "../../ModalWindow/ModalWindow";

const DateOfOrder = (props) => {
  const [openWindow, setOpenWindow] = useState(false);

  function displayModalWindow() {
    setOpenWindow(true);
  }

  function returnTotalCostOfAllProducts() {
    let price = 0;
    props.data.forEach((product) => {
      console.log(product);
      price += product.count * product.price;
    });

    return Math.round(price * 100) / 100;
  }

  return (
    <div className={style.container}>
      <h2 className={style.title}>Summary</h2>
      <span className={style.span}>
        Total price:{" "}
        <span className={style.price}>{returnTotalCostOfAllProducts()}$</span>
      </span>
      <button className={style.button} onClick={displayModalWindow}>
        Order
      </button>
      {openWindow ? <ModalWindow setOpenWindow={setOpenWindow} /> : ""}
    </div>
  );
};
export default DateOfOrder;
