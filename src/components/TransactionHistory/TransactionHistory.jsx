import { TransactionHistoryItem } from './TransactionHistoryItem';
import PropTypes from 'prop-types';
import { Table, TableBody, TableHead } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  const transactionRows = transactions.map((t, idx) => (
    <TransactionHistoryItem key={t.id} transactions={t} index={idx} />
  ));

  return (
    <Table>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>
      <TableBody>{transactionRows}</TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
