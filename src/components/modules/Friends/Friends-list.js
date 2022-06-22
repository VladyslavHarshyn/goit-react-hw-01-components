import { PropTypes } from 'prop-types';
import s from './Friends-list.module.css';

export const Friendlist = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={s.item}>
          <img
            className={s.img}
            src={avatar}
            alt={name}
            width='48px'
          />
          <div className={s.name}>{name}</div>
          <span
            className={isOnline ? s.status : s.statusOff}>
            {isOnline}
          </span>
        </li>
      ))}
    </ul>
  );
};

Friendlist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
