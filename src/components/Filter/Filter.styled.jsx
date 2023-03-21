import styled from 'styled-components';

export const FieldStyled = styled.input`
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
