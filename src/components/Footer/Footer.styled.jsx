import styled from "styled-components";

export const FooterSection = styled.footer`
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: var(--dark-background);

  @media (min-width: 768px) {
    padding-top: 28px;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1328px;
  padding: 0 24px;
  margin: 0 auto;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 78px;

  @media (min-width:768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;