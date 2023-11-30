import Nav from "./Nav/Nav";
import styleHeader from "./Header.module.css";
import NavBurger from "./NavBurger/NavBurger";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Header = (props) => {
  const [close, setClose] = useState(true);
  const { id } = useParams();
  return (
    <>
      <header className={styleHeader.header} id="header">
        <Nav
          dataNav={props.dataHeader.nav}
          changeClose={setClose}
          setOpen={props.setOpen}
        />
        <NavBurger
          dataNav={props.dataHeader.nav}
          close={close}
          changeClose={setClose}
          setOpen={props.setOpen}
        />
        <div className={styleHeader.background}>
          <h1
            className={styleHeader.title}
            data-aos="flip-left"
            data-aos-delay="500"
          >
            {props.dataHeader.title}
          </h1>
        </div>
      </header>
    </>
  );
};
export default Header;
