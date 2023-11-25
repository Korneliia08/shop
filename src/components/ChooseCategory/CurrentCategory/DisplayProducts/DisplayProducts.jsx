import styleDesplayProducts from "./DisplayProducts.module.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Product from "./Product/Product";
import BtnArrowBack from "../../../BtnArrowBack/BtnArrowBack";

const DisplayProducts = () => {
    const {nameCategory} = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let whichCategory;
        switch (nameCategory){
            case "mensclothing":
                whichCategory = "men's clothing";
            break;
            case "womensclothing":
                whichCategory = "women's clothing";
                break;
            case "jewelery":
                whichCategory = "jewelery";
                break;
        }
        axios.get("https://fakestoreapi.com/products/category/" + whichCategory + "?limit=15")
            .then(response=>{
                setProducts(response.data);
            })
            .catch(reject => {
                throw new Error(reject)});
    }, []);

    return (
        <div className={styleDesplayProducts.container}>
            {products.map(product=><Product dataProduct = {product}></Product>)}
            <BtnArrowBack/>
        </div>
    )
}
export default DisplayProducts;

