import { links } from "../../data/navigation";
import {
  FooterNavContainer,
  FooterMenu,
  FooterMenuItem,
  FooterTitle
} from "./FooterNav.styled";

const FooterNav = () => {
  return (
    <FooterNavContainer>
      <FooterTitle>Быстрая Навигация</FooterTitle>
      <FooterMenu>
        {links.map((link) => (
          <FooterMenuItem key={link.id}>
            <li href={link.url}>{link.name}</li>{" "}
          </FooterMenuItem>
        ))}
      </FooterMenu>
    </FooterNavContainer>
  );
};

export default FooterNav;
