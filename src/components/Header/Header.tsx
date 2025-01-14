import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';

const Header = () => (
   <div className={styles.header}>
      <div className={styles.logo}>DevFinder</div>
      <ThemeSwitcher />
   </div>
);

export default Header;
