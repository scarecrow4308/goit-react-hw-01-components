import PropTypes from 'prop-types';
import { TableRow } from './TransactionHistory.styled';

export const TransactionHistoryItem = ({
  transactions: { type, amount, currency },
  index,
}) => {
  return (
    <TableRow index={index}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableRow>
  );
};

TransactionHistoryItem.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
};
