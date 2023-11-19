import styleSubscribe from "./Subscribe.module.css";
import Title from "./Title/Title";
import FormSubscribe from "./SubscribeForm/SubscribeForm";

const Subscribe = (props) => {
    return (
        <div className={styleSubscribe.subscribe}>
            <Title dataTitle={props.dataSubcribe}/>
            <FormSubscribe/>
        </div>
    )
}
export default Subscribe;
