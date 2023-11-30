import styleForm from "./SubscribeForm.module.css";
import { useState } from "react";

const FormSubscribe = () => {
  const [redClass, setRedClass] = useState(false);

  function sendSubscribe(event) {
    event.preventDefault();
  }

  function setClass() {
    setRedClass(true);
  }

  return (
    <form className={styleForm.form} onSubmit={sendSubscribe}>
      <input
        type="text"
        className={[
          styleForm.inputEmail,
          redClass ? styleForm.redBorder : "",
        ].join(" ")}
        placeholder="Email"
        required
      />
      <input
        type="submit"
        value="SEND"
        className={styleForm.inputSubmit}
        onClick={setClass}
      />
    </form>
  );
};
export default FormSubscribe;
