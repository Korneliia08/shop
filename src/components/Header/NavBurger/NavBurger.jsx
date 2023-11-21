import NavBurgerStyle from "./NavBurger.module.css";
import Link from "./Link/Link";
import {useState} from "react";


const NavBurger = (props) => {
    const title = props.dataNav.title.split(" ");

    const [close, setClose] = useState(false);
//!  {background: close ? 'red' : 'blue'}
    return (
        <nav className={NavBurgerStyle.nav}>
            <span className={NavBurgerStyle.close} onClick={() => setClose(true)}>Close</span>
            <h1 className={NavBurgerStyle.title}>{title[0]}<span
                className={NavBurgerStyle.titleWhite}>{title[1]}</span>
            </h1>
            <Link dataLinks={props.dataNav.links}/>
        </nav>
    )
}
export default NavBurger;

