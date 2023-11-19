import styleSocialMedias from "./SocialMedias.module.css";
import iconFb from "../../assets/icons/fb.webp";
import iconTwitter from "../../assets/icons/twitter.webp";
import iconInsta from "../../assets/icons/insta.webp"

const SocialMedias = () => {
    return (
        <aside className={styleSocialMedias.aside}>
            <img src={iconFb} alt="icon fb" className={styleSocialMedias.icon}/>
            <img src={iconTwitter} alt="icon twitter" className={styleSocialMedias.icon}/>
            <img src={iconInsta} alt="icon insta" className={styleSocialMedias.icon}/>
        </aside>
    )
}
export default SocialMedias;
