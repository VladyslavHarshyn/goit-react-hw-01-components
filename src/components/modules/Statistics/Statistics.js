import { PropTypes } from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={s.element}>
            <span className={s.span}>{label}</span>
            <span className={s.span}>{percentage}%</span>
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
