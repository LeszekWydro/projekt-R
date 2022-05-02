import styles from './Card.module.scss';
import clsx from 'clsx';
import { removeCard, toggleFavorite } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';

const Card = (props) => {
  const dispatch = useDispatch();

  const toggle = (e) => {
    e.preventDefault();
    dispatch(toggleFavorite({ id: props.id, isFavorite: props.isFavorite }));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeCard({ id: props.id }));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div>
      <button
        type='button'
        onClick={toggle}
        className={clsx(styles.button, props.isFavorite && styles.isFavorite)}>
        <span className='fa fa-star-o' />
      </button>
      <button type='button' onClick={handleDelete}>
        <span className='fa fa-trash' />
      </button>
      </div>
    </li>
  );
};

export default Card;
