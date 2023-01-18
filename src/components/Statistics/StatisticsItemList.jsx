import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './Statistics.styled';

export const StatisticsItemList = ({ stats }) => {
  const listItems = stats.map(item => (
    <Item key={item.id}>
      <Label>{item.label}</Label>
      <Percentage>{item.percentage}%</Percentage>
    </Item>
  ));

  return listItems;
};

StatisticsItemList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
