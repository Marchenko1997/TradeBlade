import styled from "styled-components";

export const AboutUsSection = styled.section`
  position: relative;
  background-color: var(--white);
  padding-top: 24px;
  padding-bottom: 40px;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 92px;
    display: flex;
  }
`;

export const Rectangle = styled.div`
  position: absolute;
  background-color: var(--white);
  top: 0;
  left: 0;
  margin-top: -20px;
  height: 24px;
  width: 70%;
  clip-path: polygon(0% 0%, 90% 0%, 95% 100%, 0% 100%);
`;

export const AboutUsContainer = styled.div`
  width: 100%;
  max-width: 1328px;
  padding: 0 24px;
  margin: 0 auto;
`;

export const MainIformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AboutUsTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.27;
  letter-spacing: -1.12px;
  text-transform: uppercase;
  color: var(--dark-background);

  @media (min-width: 768px) {
    font-size: 44px;
    letter-spacing: -1.76px;
    margin-bottom: 40px;
  }
`;

export const AboutParagraphFirst = styled.p`
  color: var(--dark-background);
  line-height: 1.25;
  opacity: 0.8;
  font-size: 16px;
  font-weight: 400;
`;

export const AboutParagraphTwo = styled.p`
  color: var(--dark-background);
  line-height: 1.25;
  opacity: 0.8;
  font-size: 16px;
  font-weight: 400;
`;
