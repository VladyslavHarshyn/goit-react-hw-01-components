import { PropTypes } from 'prop-types';

export const Friendlist = ({ friends }) => {
  return (
    <ul className='friend-list'>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className='friends-item'>
          <img
            className='friends-img'
            src={avatar}
            alt={name}
            width='48px'
          />
          <div className='friends-name'>{name}</div>
          <span className='online-status'>
            {isOnline ? 'online' : 'offline'}
          </span>
        </li>
      ))}
    </ul>
  );
};

Friendlist.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
