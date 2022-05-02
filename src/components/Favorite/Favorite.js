import PageTitle from '../PageTitle/PageTitle.js';
import styles from './Favorite.module.scss';
import { getFavorite } from '../../redux/store.js';
import { useSelector } from 'react-redux';
import Card from '../Card/Card.js';

const Favorite = () => {
  const favoriteCard = useSelector(getFavorite);

  if (!favoriteCard.length)
    return (
      <div>
        <p className={styles.description}>NO FAVORITE CARDS !</p>
      </div>
    );

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.wrapper}>
        <ul className={styles.cards}>
          {favoriteCard.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              id={card.id}
              isFavorite={card.isFavorite}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favorite;
