import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    gap: 16px;

    @media (min-width: 768px) {
      gap: 12px;
      
    }
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

  @media (min-width: 768px) {
    font-size: 14px;
    padding-top: 11px;
    padding-bottom: 11px;
    line-height: 1.3;
    width: 146px;
    height: 42px;
  }
`;

export const EnterButton = styled.button`
  width: 163.5px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-cyan);
  background-color: var(--primary-purple);
  border: 2px solid rgb(87, 225, 255);
  border-radius: 3px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  text-transform: uppercase;

  &:hover {
    background-color: var(--primary-purple);
    color: var(--primary-cyan);
    border: 2px solid rgb(87, 225, 255);
  }

  @media (min-width: 768px) {
    font-size: 14px;
    padding-top: 11px;
    padding-bottom: 11px;
    line-height: 1.3;
    width: 86px;
    height: 42px;
    background-color: rgba(87, 225, 255, 0.2);
    border: 2px solid rgb(87, 225, 255);
    color: var(--primary-cyan);
  }
`;