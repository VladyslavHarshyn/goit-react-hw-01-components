import PropTypes from 'prop-types';

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
    <div className='profile'>
      <div className='description'>
        <img
          src={url}
          alt='User avatar'
          className='avatar'
          width='100px'
        />
        <p className='name'>{userName}</p>
        <p className='tag'>@{userTag}</p>
        <p className='location'>{userLocation}</p>
      </div>

      <ul className='stats'>
        <li>
          <span className='label'>Followers</span>
          <span className='quantity'>{userFollowers}</span>
        </li>
        <li>
          <span className='label'>Views</span>
          <span className='quantity'>{userViews}</span>
        </li>
        <li>
          <span className='label'>Likes</span>
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
