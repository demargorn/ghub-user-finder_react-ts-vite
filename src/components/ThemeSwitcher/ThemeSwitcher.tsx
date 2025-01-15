import { useState, useEffect } from 'react';
import moonIcon from '../../assets/icon-moon.svg';
import sunIcon from '../../assets/icon-sun.svg';
import styles from './ThemeSwitcher.module.scss';

const MoonIcon = () => <img src={moonIcon} className={styles['icon']} alt='moon icon' />;
const SunIcon = () => <img src={sunIcon} className={styles['icon']} alt='sun icon' />;

const ThemeSwitcher = () => {
   const [isDark, setDark] = useState(false);
   const themeText = isDark ? 'Light' : 'Dark';

   const ThemeIcon = () => (
      <div className={styles['icon']}>{isDark ? <SunIcon /> : <MoonIcon />}</div>
   );

   useEffect(() => {
      document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
   }, [isDark]);

   return (
      <div className={styles['switcher']} onClick={() => setDark(!isDark)}>
         <span>{themeText}</span>
         <ThemeIcon />
      </div>
   );
};

export default ThemeSwitcher;
