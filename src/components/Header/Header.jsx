import Nav from "./Nav/Nav";
import styleHeader from "./Header.module.css";
import NavBurger from "./NavBurger/NavBurger";

const Header = (props) => {
    return (
        <>
            <header className={styleHeader.header}>
                <Nav dataNav={props.dataHeader.nav}/>
                <NavBurger dataNav={props.dataHeader.nav}/>
                <div className={styleHeader.background}>
                    <h1 className={styleHeader.title}>
                        {props.dataHeader.title}
                    </h1>
                </div>
            </header>
        </>
    )
}
export default Header;
