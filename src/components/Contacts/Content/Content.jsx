import styleContent from "./Content.module.css";

const Content = () => {
    return (
        <div className={styleContent.content}>
            <h2 className={styleContent.title} data-aos="fade-zoom-in">Contacts</h2>
            <p className={styleContent.content} data-aos="fade-zoom-in">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, maxime,
                similique? Aliquam corporis
                cupiditate dolor enim incidunt omnis quia, ratione suscipit. Accusantium cum enim necessitatibus neque
                nisi, quibusdam tenetur ullam?</p>
            <span className={styleContent.tagSpan}  data-aos="fade-zoom-in">korneliamushak@gmail.com</span>
            <span className={styleContent.tagSpan}  data-aos="fade-zoom-in">Number: +380 123 456 789</span>
        </div>
    )
}
export default Content;
