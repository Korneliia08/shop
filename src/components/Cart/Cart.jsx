import styleCart from "./Cart.module.css";
import {useState} from "react";
const Cart = ()=>{
    const [open, setOpen] = useState(false);
    return(
        <div className={styleCart.cartBlock} style={{right: open ? "0px" : "-25vw"}}>Cart</div>
    )
}
export default Cart;
