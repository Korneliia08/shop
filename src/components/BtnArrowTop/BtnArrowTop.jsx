import styleBtnArrowTop from "./BtnArrowTop.module.css";
import {useEffect, useState} from "react";
import arrowTop from "../../assets/icons/arrowTop.svg"
const BtnArrowTop = ()=>{
    const [visiblyBtn, showBtn] = useState(false);
    useEffect(() => {
        let interval = setInterval(()=>{
            if(window.scrollY>150){
                showBtn(true);
            }
            else{
                showBtn(false);
            }
        },300);

        return ()=>{
            clearInterval(interval);
        }
    }, []);
    function toTop(){
        let position = window.scrollY;
        const scrollInterval = setInterval(() =>{
            position -= 20;
            window.scrollTo(0, position);

            if (Number(position) <= 0) {
                clearInterval(scrollInterval);
            }
        }, 5);
    }


    return(
        <button className={styleBtnArrowTop.btn} style={{bottom: visiblyBtn ? "50px" : "-70px"}}
                onClick={()=> toTop()}>
            <img src={arrowTop} alt="iconTop" className={styleBtnArrowTop.img}/></button>
    )
}
export default BtnArrowTop;
