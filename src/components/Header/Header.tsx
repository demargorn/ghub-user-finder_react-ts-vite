import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';

const Header = () => (
   <header className={styles['header']}>
      <div className={styles['logo']}>Developer Finder</div>
      <ThemeSwitcher />
   </header>
);

export default Header;
