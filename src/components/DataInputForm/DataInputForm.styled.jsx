import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const FieldStyled = styled(Field)`
  width: 100%;
  border: 1px solid var(--color-btn);
  border-radius: 4px;
  outline: none;
  padding: 7px 15px;
  color: var(--color-btn-hover);
  font-size: 16px;

  &:hover {
    border: 1px solid var(--color-btn-hover);
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 20px;
  text-align: center;
  color: var(--color-green);
  margin-bottom: 10px;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  font-size: 14px;
  color: var(--color-error);
`;

export const ButtonStyled = styled.button`
  display: block;
    width: 100%;
  margin 20px auto;
  padding: 10px 10px;
  background-color: var(--color-btn);
  color: var(--color-blue-text);
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  transition: transform 200ms ease, background-color 200ms ease;

  &:hover {
    background-color: var(--color-btn-hover);
  }
`;
