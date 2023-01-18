import { checkPropTypes } from 'prop-types';
import styled from 'styled-components';

export const Table = styled.table`
  margin: auto;
  width: 500px;
  text-align: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const TableHead = styled.thead`
  background-color: #00bcd5;
  height: 50px;
`;
export const TableBody = styled.tbody``;
export const TableRow = styled.tr`
  height: 50px;
  background-color: ${props => (props.index % 2 === 0 ? 'white' : 'aliceblue')};
`;
