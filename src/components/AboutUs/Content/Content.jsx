import styleContent from "./Content.module.css";

const Content = () => {
    return (
        <div className={styleContent.blockForContent}>
            <div className={styleContent.content}>
                <h2 className={styleContent.title}  data-aos="fade-zoom-in">About Us</h2>
                <p className={styleContent.contentTag}  data-aos="fade-zoom-in">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                    eveniet excepturi ipsam, ipsum laborum
                    libero nisi officia perspiciatis, quo reprehenderit sit, vitae! Enim expedita facilis fuga, iure
                    laudantium nulla reprehenderit rerum sequi veniam.</p>
            </div>
        </div>
    )
}
export default Content;
