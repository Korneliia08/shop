import style from "./ModalWindow.module.css";

const ModalWindow = (props) => {
  function close(event) {
    if (event.target.id === "modalBack") {
      props.setOpenWindow(false);
    }
  }

  return (
    <div className={style.container} id="modalBack" onClick={close}>
      <div className={style.block}>
        <span onClick={() => props.setOpenWindow(false)}>X</span>
        <h5>We are currently not working</h5>
      </div>
    </div>
  );
};
export default ModalWindow;
