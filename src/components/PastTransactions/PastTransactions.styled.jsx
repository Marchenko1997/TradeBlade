import styled from "styled-components";

export const TransactionsSection = styled.section`
  position: relative;
  padding: 48px 16px 53px 16px;
  background-color: var(--dark-background);
`;

export const TransactionsContainer = styled.div`
  position: relative;
`;

export const TransactionsTitle = styled.h2`
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 700;
  font-size: 44px;
  line-height: 56px;
  text-transform: uppercase;
  /* padding-top: 96px; */
  color: var(--white);

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const TransactionsOnline = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 2px;
`;

export const OnlineText = styled.p`
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43em;
  letter-spacing: -0.56px;
  color: var(--primary-green);
`;

export const OnlineIcon = styled.img`
  width: 16px;
  height: 16px;
`;
