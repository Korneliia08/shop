import styleFormForCart from "./FormForCart.module.css";
import cartIcon from "../../../../../../../assets/icons/cart.svg";
const FormForCart = ()=>{
    function openCart(){
        alert("d");
    }
    return(
        <>
            <button className={styleFormForCart.btnCart} onClick={openCart}>Add <img src={cartIcon}
                                                                  alt="icon cart" className={styleFormForCart.iconCart}/></button>
        </>
    )
}
export default FormForCart;
