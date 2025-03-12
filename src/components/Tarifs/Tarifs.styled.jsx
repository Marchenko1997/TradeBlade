import styled from "styled-components";

export const TarifsSection = styled.section`
    padding: 108px 0 44px 0;
    position: relative;
    background-color: var(--dark-background);
`;

export const SectionContainer = styled.div`
  width: 100%;
  max-width: 1328px;
  padding: 0 24px;
  margin: 0 auto;
`;

export const TarifsTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.27;
  letter-spacing: -1.12px;
  text-transform: uppercase;
  color: var(--white) ;
  
  @media (min-width: 768px) {
    margin-bottom: 44px;
    font-size: 44px;
    letter-spacing: -1.76px;

  }
  
`;