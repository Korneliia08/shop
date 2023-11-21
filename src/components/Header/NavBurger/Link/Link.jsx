import linkStyle from "./Link.module.css";

const Link = (props) => {
    return (
        <div className={linkStyle.containerForLinks}>
            {
                props.dataLinks.map(link => <a href={link.link} className={linkStyle.link}>{link.name}</a>)
            }
        </div>
    )
}
export default Link;
