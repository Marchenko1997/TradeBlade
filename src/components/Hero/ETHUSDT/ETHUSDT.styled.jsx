import styled, { keyframes } from "styled-components";


const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); 
  }
  100% {
    transform: translateY(0);
  }
`;

export const CryptoContainer = styled.div`
  width: 300px;
  height: 134px;
  position: relative;
  margin-top: 40px;
  animation: ${floatAnimation} 2s ease-in-out infinite;
`;
