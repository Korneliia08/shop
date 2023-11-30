import navStyle from "./Nav.module.css";
import Link from "./Link/Link";
import iconBurger from "../../../assets/icons/burger.png";
import iconCart from "../../../assets/icons/cart.svg";
import iconFb from "../../../assets/icons/fb.webp";
import iconTwitter from "../../../assets/icons/twitter.webp";
import iconInsta from "../../../assets/icons/insta.webp";

const Nav = (props) => {
  const title = props.dataNav.title.split(" ");

  return (
    <nav className={navStyle.nav}>
      <div className={navStyle.container}>
        <h1 className={navStyle.title}>
          {title[0]}
          <span className={navStyle.spanWhite}>{title[1]}</span>
        </h1>
        <div className={navStyle.containerForIconsSocialMedias}>
          <img src={iconFb} alt="icon 'fb'" className={navStyle.icon} />
          <img
            src={iconTwitter}
            alt="icon 'twitter'"
            className={navStyle.icon}
          />
          <img src={iconInsta} alt="icon 'insta'" className={navStyle.icon} />
        </div>
      </div>
      <Link dataLinks={props.dataNav.links} />
      <img
        src={iconCart}
        alt="icon cart"
        className={navStyle.iconCart}
        onClick={() => props.setOpen(true)}
      />
      <img
        src={iconBurger}
        alt="icon 'burger'"
        className={navStyle.iconBurger}
        onClick={() => props.changeClose(false)}
      />
    </nav>
  );
};
export default Nav;
