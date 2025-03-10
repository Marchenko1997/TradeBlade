import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative; 
  display: flex;
  align-items: center;
  width: 343px;
  margin-top: 92px;
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
`;

export const FreeTrial = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: var(--white);
  opacity: 0.3;
  margin-top: 12px;
`;
