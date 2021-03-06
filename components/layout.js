import styles from '../styles/Home.module.scss';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`${styles.container} ${darkMode ? styles.darkBg : ''}`}>
      <p className={styles.darkButton} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </p>
      {children}
      <footer>
        <p>2021 &copy; Mark Tiddy</p>
      </footer>
    </div>
  );
};

export default Layout;
