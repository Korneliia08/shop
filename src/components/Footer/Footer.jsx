import styleFooter from "./Footer.module.css";

const Footer = (props) => {
    return (
        <footer className={styleFooter.footer}>
            <h5 className={styleFooter.title}>
                {props.dataFooter}
            </h5>
        </footer>
    )
}
export default Footer;
