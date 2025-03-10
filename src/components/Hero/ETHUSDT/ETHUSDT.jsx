import React from "react";
import {
  CryptoContainer,
  DashedContainer,
  PurpleContainer,
  CurrencyPair,
  Direction,
  Percentage,
  DiagonalLineBottom,
  DiagonalLineTop,
} from "./ETHUSDT.styled";

const ETHUSDT = () => {
  return (
    <CryptoContainer>
      <DashedContainer>
        <CurrencyPair>ETH/USDT</CurrencyPair>
        <Direction>Short</Direction>
        <Percentage>+141%</Percentage>
      </DashedContainer>
      <DiagonalLineBottom />
      <DiagonalLineTop />
      <PurpleContainer>
        <CurrencyPair>ETH/USDT</CurrencyPair>
        <Direction>Short</Direction>
        <Percentage>+116%</Percentage>
      </PurpleContainer>
    </CryptoContainer>
  );
};

export default ETHUSDT;
