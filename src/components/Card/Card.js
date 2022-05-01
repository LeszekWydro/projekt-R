import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';


const Card = props => {

    const dispatch = useDispatch();

    const toggle = e => {
        e.preventDefault();
        dispatch(toggleFavorite({ id: props.id, isFavorite: props.isFavorite }))
      };

    return (
        <li className={styles.card}>{props.title}
        <button onClick={toggle}>
          <span className={clsx(' fa fa-star-o', props.isFavorite && styles.isFavorite)}></span>
        </button>
        </li>
    );
};

export default Card;
