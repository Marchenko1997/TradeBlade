import styled from "styled-components";
import { Link } from "react-scroll";

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;

  }
`;

export const NavigationItem = styled(Link)`
  color: rgb(255, 255, 255);
  opacity: 0.7;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.875rem;
  text-align: left;
  text-transform: uppercase;
  transition: color 0.3s ease-in-out;

  @media (min-width: 768px) {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
  }

  &:hover {
    color: #d9d9d9;
  }

  &.active {
    color: #e0e0e0;
    font-weight: 600;
  }
`;
