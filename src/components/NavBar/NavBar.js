import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav>
        <div className={styles.container}>
          <a href="/"><span className={ styles.icon + ' fa fa-tasks'} /></a>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Favorite ">Favorite</a></li>
            <li><a href="/About">About</a></li>
          </ul>
        </div>
    </nav>
  );
};

export default NavBar;
