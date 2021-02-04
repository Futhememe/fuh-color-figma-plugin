import styled from "styled-components";

export const Container = styled.div`
  font: 12px sans-serif;
  text-align: center;
  margin: 24px;
`;

export const Button = styled.button`
  border-radius: 5px;
  background: white;
  color: #14142b;
  border: none;
  padding: 8px 16px;
  margin: 0 8px;
  box-shadow: inset 0 0 0 1px #14142b;
  outline: none;

  &:focus {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  }
`;

export const PrimaryButton = styled.button`
  border-radius: 5px;
  background: #00ba88;
  color: white;
  border: none;
  padding: 8px 16px;
  margin: 0 8px;
  box-shadow: none;
  outline: none;

  &:focus {
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);
  }
`;

export const Textfield = styled.input`
  border-radius: 5px;
  border-width: 1px;
  outline: none;
  padding: 8px;

  &:hover {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    border-color: #00ba88;
  }
`;
