import styleAboutUs from "./AboutUs.module.css";
import Content from "./Content/Content";

const AboutUs = () => {
    return (
        <div className={styleAboutUs.blockForAboutUs}>
            <Content/>
        </div>
    )
}
export default AboutUs;
