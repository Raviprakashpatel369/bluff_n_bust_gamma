import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css'; // Import the CSS module

const Layout = () => {
  return (
    <div className={styles.layout}>
      <header>
        <nav className={styles.navbar}>
          <div className={styles.navbarLogo}>
            <h1>Bluff n Bust</h1>
          </div>
          <ul className={styles.navbarLinks}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/players">Players</Link></li>
            <li><Link to="/start">Start</Link></li>
          </ul>
        </nav>
      </header>
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Niggas and co. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
