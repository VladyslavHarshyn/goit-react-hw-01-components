import s from './Friends-list.module.css';

export const FriendlistItem = ({
  avatar,
  name,
  isOnline,
  id,
}) => {
  return (
    <li key={id} className={s.item}>
      <img
        className={s.img}
        src={avatar}
        alt={name}
        width='48px'
      />
      <div className={s.name}>{name}</div>
      <span className={isOnline ? s.status : s.statusOff}>
        {isOnline}
      </span>
    </li>
  );
};
