import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css'; 
import logo from './../../assets/logo-removebg-preview.png';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <header>
        <nav className={styles.navbar}>
          <div className={styles.navbarLogo}>
            <img src={logo} style={{ width: '60px', height: '60px' }} alt="logo" />
          </div>
          <ul className={styles.navbarLinks}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Players</Link></li>
            <li><Link to="/">Start</Link></li>
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
