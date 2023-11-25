import styleChooseCategory from "./ChooseCategory.module.css";
import CurrentCategory from "./CurrentCategory/CurrentCategory";

const ChooseCategory = (props) => {
    return (
        <div className={styleChooseCategory.container}>
            {
                props.dataCategory.map(category => <CurrentCategory dataCategory={category}/>)
            }
        </div>
    )
}
export default ChooseCategory;
