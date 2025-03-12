import styled from "styled-components";

export const FAQSection = styled.section`
  padding-top: 108px;
  padding-bottom: 54px;
  background-color: var(--white);
`;

export const FAQContainer = styled.div`
  width: 100%;
  max-width: 1328px;
  padding: 0 24px;
  margin: 0 auto;
`;

export const FAQTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.27;
  letter-spacing: -1.12px;
  text-transform: uppercase;
  color: var(--dark-background);
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 44px;
    letter-spacing: -1.76px;
    margin-bottom: 64px;
  }
`;

export const FAQItem = styled.div`
  margin-bottom: 12px;
  transition: background-color 0.2s;
`;



export const FAQItemContent = styled.div`
  color: var(--dark-background);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.96px;
  width: 100%;
  padding: 16px 12px;
  user-select: none;
  position: relative;
  transition: background-color 0.2s, color 0.2s;
  background-color: #eaeff0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 24px;
    letter-spacing: -1.12px;
  }

  &.open {
    background-color: var(--primary-purple);
    color: var(--white);
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: var(--dark-background) ;
    fill: var(--dark-background);
  }

  &.open svg {
    stroke: var(--white);
    fill: var(--white);
  }
`;



export const EmbeddedContent = styled.div`
  max-height: 252px;
  background-color: var(--primary-purple);
  line-height: 1.25;
  overflow: hidden;
  transition: max-height 0.2s, background-color 0.2s;
 padding: 16px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  color: var(--white);
`;
