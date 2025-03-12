import styled from "styled-components";

export const FooterNavContainer = styled.nav`
  display: flex;
  gap: 74px;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 224px;
  }

`;

export const FooterTitle = styled.h4`
  font-size: 14px;
  line-height: 1.42;
  opacity: 0.4;
  max-width: 107px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    max-width: none;
  }
`;

export const FooterMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

`;

export const FooterMenuItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  text-decoration: none;
  color: var(--white);
  transition: color 0.2s;
  opacity: 0.6;
  text-transform: uppercase;

`;

