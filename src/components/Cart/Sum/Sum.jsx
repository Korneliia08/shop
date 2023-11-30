import styleSum from "./Sum.module.css";

const Sum = (props) => {
  function calcSum() {
    let sum = 0;
    props.productCart.forEach((product) => {
      sum += product.price * product.count;
    });
    return Math.round(sum * 100) / 100;
  }

  return (
    <div className={styleSum.block}>
      <h5 className={styleSum.title}>
        Sum: <span className={styleSum.greenSpan}>{calcSum()}$</span>
      </h5>
    </div>
  );
};
export default Sum;
