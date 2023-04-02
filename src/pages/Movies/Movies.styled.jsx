import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  margin-top: 15px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
`;
export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 45px;
  font-family: inherit;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 5px;
  outline: none;
  padding-left: 10px;
  padding-right: 4px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border: 1px solid rgb(254 237 1);
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  width: 48px;
  height: 48px;
  border: none;
  background-color: transparent;
  opacity: 0.9;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
    color: rgb(254 237 1);
    &::placeholder {
      font-family: inherit;
      font-size: 18px;
    }
  }
`;
