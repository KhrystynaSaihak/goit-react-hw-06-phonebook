import styled from 'styled-components';

export const List = styled.ul`
  font-size: 20px;
  color: var(--color-text);
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--color-text);
`;

export const Btn = styled.button`
  border: none;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  background-color: var(--color-red);
  border-radius: 2px;

  &:hover {
    background-color: var(--color-red-hover);
  }
`;
