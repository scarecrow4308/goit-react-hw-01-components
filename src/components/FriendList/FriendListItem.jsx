import {
  Item,
  Status,
  Avatar,
  Name,
  RedCircle,
  GreenCircle,
} from './FriendList.styled';

import PropTypes from 'prop-types';

export const FriendListItem = ({ friends }) => {
  const friend = friends.map(friend => (
    <Item key={friend.id}>
      <Status>{friend.isOnline ? <RedCircle /> : <GreenCircle />}</Status>
      <Avatar src={friend.avatar} alt="User avatar" width="48" />
      <Name>{friend.name}</Name>
    </Item>
  ));

  return friend;
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
