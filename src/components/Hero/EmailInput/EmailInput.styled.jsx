import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* width: 343px; */
  
  margin-top: 132px;

  @media screen and (min-width: 768px) {
    margin-top: 84px;
    max-width: 500px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  background-color: #201a4f;
  color: rgba(255, 255, 255, 0.34);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43em;
  letter-spacing: -0.14px;
  text-transform: uppercase;
  padding: 15px 16px;
  border: none;


  @media screen and (min-width: 768px) {
    width: 500px;
    height: 60px;
    font-size: 16px;
    line-height: 1.3;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 0;
  }
`;

export const StartBtn = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 102px;
  height: 42px;
  border-radius: 3px;
  background-color: var(--primary-cyan);
  color: rgb(3, 7, 24);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43em;
  padding: 11px 24px;
  text-transform: uppercase;

  &:hover {
    background-color: var(--primary-purple);
    color: var(--primary-cyan);
    border: 2px solid rgb(87, 225, 255);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.3;
    width: 109px;
    height: 52px;
  }
`;

export const FreeTrial = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: var(--white);
  opacity: 0.3;
  margin-top: 12px;
  padding-bottom: 15px;
`;
