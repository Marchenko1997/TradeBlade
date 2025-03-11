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
            <a href={link.url}>{link.name}</a>{" "}
          </FooterMenuItem>
        ))}
      </FooterMenu>
    </FooterNavContainer>
  );
};

export default FooterNav;
