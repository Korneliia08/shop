import linkStyle from "./Link.module.css";

import { HashLink } from "react-router-hash-link";

const Link = (props) => {
  return (
    <div className={linkStyle.containerForLinks}>
      {props.dataLinks.map((link) => (
        <HashLink
          className={linkStyle.link}
          to={link.link}
          scroll={(element) => {
            const yCoordinate =
              element.getBoundingClientRect().top + window.pageYOffset;
            const yOffset = -90;
            window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
            //element.scrollIntoView({ behavior: "smooth", top: yCoordinate + yOffset, })
          }}
        >
          {link.name}
        </HashLink>
      ))}
    </div>
  );
};
export default Link;
