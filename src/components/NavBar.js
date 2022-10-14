import { Link } from "react-router-dom";
import styles from "../styles/nav.module.css";
const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.home} to="/">
        Home
      </Link>
      <Link className={styles.addDog} to="/newDogForm">
        Add Dog
      </Link>
    </nav>
  );
};

export default NavBar;
