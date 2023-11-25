import styleCurrentCategory from "./CurrentCategory.module.css";
import {useNavigate} from "react-router-dom";
const CurrentCategory = (props) => {
    const data = props.dataCategory;
    const navigate = useNavigate();

    function navigateToShop(){
        navigate("/category/" + data.title.replaceAll(" ", "").replaceAll("'", "").toLowerCase());
    }
    return (
            <div className={styleCurrentCategory.category} style={{backgroundImage: `url(${data.img})`}} onClick={navigateToShop}>
                <div className={styleCurrentCategory.backgroundColorOnImage}>
                    <h2 className={styleCurrentCategory.title}>{data.title}</h2>
                </div>
            </div>
    )
}
export default CurrentCategory;
