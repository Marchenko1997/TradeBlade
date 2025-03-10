import styled from "styled-components";

export const CryptoContainer = styled.div`
  width: 300px;
  height: 134px;
  position: relative;
  margin-top: 40px;
`;

export const DashedContainer = styled.div`
  width: 176px;
  height: 104px;
  border: 1.5px dashed var(--primary-purple);
  border-radius: 4px;
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: var(--primary-purple);
`;

export const PurpleContainer = styled.div`
  width: 176px;
  height: 104px;
  background-color: var(--primary-purple);
  border-radius: 4px;
  position: absolute;
  top: 30px;
  left: 124px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: var(--white);
`;

export const CurrencyPair = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.8px;
`;

export const Direction = styled.p`
  font-size: 13px;
  font-weight: 400;
  opacity: 0.6;
  line-height: 1.23;
`;

export const Percentage = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;
  line-height: 1.4;
  letter-spacing: -0.8px;
`;

export const DiagonalLineBottom = styled.div`
  position: absolute;
  top: 109px;
  left: 112px;
  width: 15px;
  height: 19px;
  border-left: 1px solid var(--primary-purple);
  transform: rotate(-45deg);
`;

export const DiagonalLineTop = styled.div`
  position: absolute;
  top: 6px;
  left: 193px;
  width: 15px;
  height: 19px;
  border-left: 1px solid var(--primary-purple);
  transform: rotate(-45deg);
`;
