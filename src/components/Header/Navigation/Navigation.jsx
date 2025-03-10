import { Link } from "react-scroll";
import { links } from "../../data/navigation";

import { NavigationList, NavigationItem } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavigationList>
      {links.map((link) => (
        <NavigationItem
          activeClass="active"
          to={link.url.slice(1)}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          key={link.id}
        >
          {link.name}
        </NavigationItem>
      ))}
    </NavigationList>
  );
};

export default Navigation;
