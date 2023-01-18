import { FriendListItem } from "./FriendListItem";
import { FriendListStyled } from "./FriendList.styled";
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (<FriendListStyled><FriendListItem friends={friends} /></FriendListStyled>);
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
    })
  ),
};
