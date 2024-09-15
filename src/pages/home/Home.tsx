import logo from './../../assets/logo-removebg-preview.png';
import styles from './Home.module.css';

function Home() {

    return (
      <div className={styles.homeContainer}>
        <img className={styles.logo} src={logo} style={{ width: '200px', height: '200px' }} alt="logo" />
        <span>Welcome to Bluff n Bust</span> 
      </div>
    )
  }
  
  export default Home