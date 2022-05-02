import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';


const Card = props => {

    const dispatch = useDispatch();

    const toggle = e => {
        e.preventDefault();
        dispatch(toggleFavorite({ id: props.id, isFavorite: props.isFavorite }))
      }

    return (
        <li className={styles.card}>{props.title}
        <button type="button" onClick={toggle} className={clsx(styles.button, props.isFavorite && styles.isFavorite)}>
                <span className='fa fa-star-o' />
            </button>
        </li>
    );
};

export default Card;
