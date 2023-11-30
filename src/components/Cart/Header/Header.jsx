import styleHeader from "./Header.module.css";

const Header = (props)=>{
    const setOpen = props.setOpen;

    function closeCart(){
        setOpen(false);
    }
    return(
        <header className={styleHeader.headerInCart}>
            <span onClick={closeCart} className={styleHeader.closeCartSpan}>Close</span>
            <h2 className={styleHeader.titleCart}>Cart</h2>
        </header>
    )
}
export default Header;
