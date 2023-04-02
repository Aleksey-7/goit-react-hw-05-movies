import styled from 'styled-components';

export const List = styled.ul`
  padding-bottom: 20px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
  border-bottom: 1px solid black;
`;
export const ActorItem = styled.li`
  transition: box-shadow 250ms ease-in-out, transform 250ms ease-in-out;
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 2px 2px 4px 4px rgb(254 237 1);
    transform: scale(1.05);
  }
`;
