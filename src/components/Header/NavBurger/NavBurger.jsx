import NavBurgerStyle from "./NavBurger.module.css";
import Link from "./Link/Link";


const NavBurger = (props) => {
    const title = props.dataNav.title.split(" ");
    return (
        <nav className={NavBurgerStyle.nav} style={{display: props.close ? "none" : "flex"}}>
            <span className={NavBurgerStyle.close} onClick={() => props.changeClose(true)}>Close</span>
            <h1 className={NavBurgerStyle.title}>{title[0]}<span
                className={NavBurgerStyle.titleWhite}>{title[1]}</span>
            </h1>
            <Link dataLinks={props.dataNav.links}/>
        </nav>
    )
}
export default NavBurger;

