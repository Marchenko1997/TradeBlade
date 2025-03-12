import styled from "styled-components";


export const DescripItem = styled.li`
  line-height: 1.25;
  padding-bottom: 8px;
  padding-top: 8px;
  position: relative;
  color: var(--white);

  svg {
    width: 9px;
    height: 9px;
  }

  ::after {
    content: "";
    width: calc(100% + 48px);
    height: 0;
    border: 2px dotted rgba(255, 255, 255, 0.2);
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: -33px;

    @media (min-width: 768px) {
      width: calc(100% + 64px);
      margin-left: -38px;
    }
  }
`;






