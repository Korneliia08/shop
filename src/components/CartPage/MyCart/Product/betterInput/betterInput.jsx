import style from "./BetterInput.module.css";
import { useEffect, useState } from "react";

const BetterInput = (props) => {
  const [number, setnumber] = useState(0);
  useEffect(() => {
    setnumber(props.data.count);
  }, []);

  function add() {
    setnumber(Number(number) + 1);
    props.data.count = Number(number) + 1;
    props.changeProduct(props.data, props.data.id);
  }

  function subtract() {
    if (Number(number) - 1 <= 0) return;
    setnumber(Number(number) - 1);
    props.data.count = Number(number) - 1;
    props.changeProduct(props.data, props.data.id);
  }

  function change(event) {
    if (event.target.value <= 0) return;
    setnumber(event.target.value);
    props.data.count = event.target.value;

    props.changeProduct(props.data, props.data.id);
  }

  return (
    <>
      <div className={style.container}>
        <button onClick={subtract}>-</button>
        <input value={number} onChange={change} type="text" />
        <button onClick={add}>+</button>
      </div>
    </>
  );
};

export default BetterInput;
