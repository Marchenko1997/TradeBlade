import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  background: var(--primary-purple);
  height: 208px;
  width: 299px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(86, 75, 75, 0.1);
  text-align: start;
  transition: transform 0.3s ease-in-out;
  clip-path: polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%);
  flex-shrink: 0;
`;

export const CardBackground = styled.img`
  position: absolute;
  top: 0;
  left: 165px;
  width: 160px;
  height: 160px;
  z-index: 1;
`;

export const CardTitle = styled.p`
  position: relative;
  z-index: 2;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: var(--white);
`;

export const CardDescription = styled.p`
  position: relative;
  z-index: 2;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: start;
  color: var(--light-background);
  padding-bottom: 45px;
`;

export const CardText = styled.p`
  position: relative;
  z-index: 2;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--light-background);
  text-transform: uppercase;
  padding-bottom: 2px;
`;

export const CardPercent = styled.p`
  position: relative;
  z-index: 2;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  color: var(--primary-green);
  padding-bottom: 9px;
  display: flex;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CardGoal = styled.p`
  color: var(--light-background);
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const CardData = styled.p`
  color: var(--light-background);
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;
