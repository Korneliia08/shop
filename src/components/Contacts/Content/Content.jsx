import styleContent from "./Content.module.css";

const Content = () => {
    return (
        <div className={styleContent.content}>
            <h2 className={styleContent.title}>Contacts</h2>
            <p className={styleContent.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, maxime,
                similique? Aliquam corporis
                cupiditate dolor enim incidunt omnis quia, ratione suscipit. Accusantium cum enim necessitatibus neque
                nisi, quibusdam tenetur ullam?</p>
            <span className={styleContent.tagSpan}>korneliamushak@gmail.com</span>
            <span className={styleContent.tagSpan}>Number: +380 123 456 789</span>
        </div>
    )
}
export default Content;
