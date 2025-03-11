import styled from "styled-components";

export const TrialFormContainer = styled.div`
  margin-top: 40px;
  padding: 16px;
  background-color: var(--primary-purple);
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 32px 64px;
    max-width: 630px;
  }
`;

export const FormTitle = styled.h3`
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
  color: var(--white);

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 1.28;
    letter-spacing: -1.12px;
    margin-bottom: 32px;
  }
`;

export const Form = styled.form`
  width: 100%;
  position: relative;
`;
export const TrialInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  background-color: #4a3bb3;
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  letter-spacing: -0.16px;
  opacity: 0.34;
  padding: 15px 16px;
  margin-bottom: 8px;
  transition: opacity, 0.2s;
  text-transform: uppercase;

  @media (min-width: 768px) {
    width: 500px;
    font-size: 16px;
    line-height: 1.3;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 0;
  }
`;

export const StartBtn = styled.button`
  position: static;
  width: 100%;
  margin-right: 4px;
  margin-top: 4px;
  padding-top: 11px;
  padding-bottom: 11px;
  background-color: var(--primary-cyan);
  color: var(--dark-background);
  border-radius: 3px;
  box-shadow: 0px 0px 4px 0px rgb(87, 225, 255);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;

  &:hover {
    background-color: var(--primary-purple);
    color: var(--primary-cyan);
    border: 2px solid rgb(87, 225, 255);
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 4px;
    width: auto;
  }
`;
