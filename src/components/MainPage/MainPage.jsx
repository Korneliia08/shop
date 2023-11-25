import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import data from "../../data";
import {Outlet} from "react-router-dom";
import BtnArrowTop from "../BtnArrowTop/BtnArrowTop";
import Cart from "../Cart/Cart";



const MainPage = ()=>{

    return(
        <>
            <Header  dataHeader={data.header}/>
            <Outlet></Outlet>
            <BtnArrowTop/>
            <Footer dataFooter={data.footer}/>
            <Cart/>
        </>
    )
}
export default MainPage;
