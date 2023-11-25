import styleBtnArrayBack from "./BtnArrowBack.module.css";
import {useNavigate} from "react-router-dom";
import leftArrow from "../../assets/icons/leftArrow.svg";
const BtnArrowBack = ()=>{
    const navigate = useNavigate();
    function comeBack(){
        navigate(-1);
    }
    return(
        <button className={styleBtnArrayBack.btn} onClick={()=> comeBack()}>
            <div className={styleBtnArrayBack.colorBlock}></div>
            <img src={leftArrow} className={styleBtnArrayBack.imgArrow} alt="icon left back one page"/>
        </button>
    )
}
export default BtnArrowBack;
