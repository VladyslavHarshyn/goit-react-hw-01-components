import PropTypes from 'prop-types';
import s from './User.module.css';

export default function Profile({
  url,
  userName,
  userTag,
  userLocation,
  userFollowers,
  userLikes,
  userViews,
}) {
  return (
    <div className={s.profile}>
      <div>
        <img
          src={url}
          alt='User avatar'
          className={s.avatar}
        />
        <p className={s.name}>{userName}</p>
        <p className={s.tag}>@{userTag}</p>
        <p className={s.location}>{userLocation}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.element}>
          <span className={s.label}>Followers</span>
          <span className='quantity'>{userFollowers}</span>
        </li>
        <li className={s.element}>
          <span className={s.label}>Views</span>
          <span className='quantity'>{userViews}</span>
        </li>
        <li className={s.element}>
          <span className={s.label}>Likes</span>
          <span className='quantity'>{userLikes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  url: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
  userFollowers: PropTypes.number.isRequired,
  userLikes: PropTypes.number.isRequired,
  userViews: PropTypes.number.isRequired,
};
