import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
`;

export const Item = styled.li`
  padding: 2px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  width: 75%;
  &:not(:last-child) {
    @media screen and (max-width: 767px) {
      margin: 0 auto;
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 45%;
  }
  @media screen and (min-width: 1280px) {
    width: 30%;
  }
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
    box-shadow 250ms ease-in-out, transform 250ms ease-in-out;
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 2px 2px 4px 4px rgb(254 237 1);
    transform: scale(1.03);
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  > img {
    object-fit: cover;
  }
`;

export const InfoWrapper = styled.div`
  padding-top: 10px;
  overflow: hidden;
`;
