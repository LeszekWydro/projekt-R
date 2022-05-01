import PageTitle from '../PageTitle/PageTitle.js';
import styles from './Favorite.module.scss';

const Favorite = () => {
  return (
    <div>
      <PageTitle>FAVORITE</PageTitle>
      <p className={styles.description}>NO FAVORITE CARDS !</p>
    </div>
  );
};

export default Favorite;
