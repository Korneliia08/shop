import styleInformation from "./InformationOfProduct.module.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import BtnArrowBack from "../../../../../BtnArrowBack/BtnArrowBack";
import FormForCart from "./FormForCart/FormForCart";
const InformationOfProduct = (props)=>{
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get( `https://fakestoreapi.com/products/${id}`)
            .then(response=>{
                    setProduct(response.data);
            })
    }, []);
    return(
        <div className={styleInformation.container}>
            <div className={styleInformation.blockForImageAndPrice}>
                <img src={product.image} alt="image product" className={styleInformation.img}/>
                <span className={styleInformation.price}>{product.price}$</span>
            </div>
            <div className={styleInformation.contentBlock}>
                <h2 className={styleInformation.title}>{product.title}</h2>
                <h2 className={styleInformation.content}><span className={styleInformation.spanGreen}>Category:</span> {product.category}</h2>
                <p className={styleInformation.content}><span className={styleInformation.spanGreen}>Description:</span> {product.description}</p>
            </div>
            <div className={styleInformation.blockForForm}>
                <FormForCart setOpen = {props.setOpen} product = {product} addProduct = {props.addProduct} />
            </div>
         <BtnArrowBack/>
        </div>
    )
}
export default InformationOfProduct;
