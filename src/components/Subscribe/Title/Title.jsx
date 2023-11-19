import styleTitle from "./Title.module.css";

const Title = (props) => {
    return (
        <div className={styleTitle.blockForTitle}>
            <h2 className={styleTitle.titleFirst}>{props.dataTitle.titleFirst}</h2>
            <h3 className={styleTitle.titleSecond}>{props.dataTitle.titleSecond}</h3>
        </div>
    )
}
export default Title;
