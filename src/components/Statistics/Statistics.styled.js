import styled from 'styled-components';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 200px;
  margin: auto;
  background-color: aliceblue;
`;
export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 50%;
`;
export const StatList = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
  height: 50%;
  margin: 0;

  border-top: 1px solid black;
  border-bottom: 1px solid black;

  &:last-child {
    border-right: 1px solid black;
  }
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  flex-direction: column;
  width: 20%;
  height: 100%;
  border-left: 1px solid black;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const Label = styled.span`
  color: white;
  font-size: 20px;
`;
export const Percentage = styled.span`
  color: white;
  font-size: 26px;
`;
