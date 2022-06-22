import { PropTypes } from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <section className='statistics'>
      <h2 className='title'>{title}</h2>

      <ul className='stat-list'>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className='stat-list-element'>
            <span className='stat-list-element-span'>
              {label}
            </span>
            <span className='stat-list-element-span left'>
              {percentage}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propType = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
