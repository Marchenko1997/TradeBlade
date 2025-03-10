import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    gap: 16px;
`
export const RegisterButton = styled.button`
  width: 163.5px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px, 24px;
  color: rgb(3, 7, 24);
  background-color: var(--primary-cyan);
  border-radius: 3px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  &:hover {
    background-color: var(--primary-purple);
    color: var(--primary-cyan);
    border: 2px solid rgb(87, 225, 255);
  }
`;

export const EnterButton = styled.button`
  width: 163.5px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px, 24px;
  color: rgb(3, 7, 24);
  background-color: var(--primary-cyan);
  border-radius: 3px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  &:hover {
    background-color: var(--primary-purple);
    color: var(--primary-cyan);
    border: 2px solid rgb(87, 225, 255);
  }
`;