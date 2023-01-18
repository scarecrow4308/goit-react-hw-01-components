import styled from 'styled-components';

export const FriendListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 350px;
  margin: 20px auto;
  padding-left: 0;
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;
  height: 80px;
  padding-left: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const Status = styled.span``;
export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;
export const Name = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

export const RedCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
`;

export const GreenCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
`;
