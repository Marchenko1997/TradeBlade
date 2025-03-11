import styled from "styled-components";

export const TrialFormContainer = styled.div`
margin-top: 40px;
  padding: 16px;
  background-color: var(--primary-purple);
  border-radius: 4px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const FormTitle = styled.h3`
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
  color: var(--white);
`;

export const Form = styled.form`
  width: 100%;
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
  -webkit-transition: opacity, 0.2s;
  transition: opacity, 0.2s;
  text-transform: uppercase;
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
`;