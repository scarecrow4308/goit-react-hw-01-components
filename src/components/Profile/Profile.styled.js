import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  width: 350px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
export const Avatar = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 30px;
`;
export const Name = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
`;
export const Tag = styled.p`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 24px;
  color: grey;
`;
export const Location = styled.p`
  margin: 0;
  font-size: 24px;
  color: grey;
`;
export const Stats = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  background-color: #f3f6f9;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  row-gap: 5px;
  padding: 30px 10px;
  font-size: 20px;
  &:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
export const Label = styled.span`
  display: block;
  color: grey;
`;
export const Quantity = styled.span`
  display: block;
  font-weight: bold;
`;
