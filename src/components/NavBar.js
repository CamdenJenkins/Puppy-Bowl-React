import { Link } from "react-router-dom";
import styles from "../styles/nav.module.css";
const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/newDogForm">Add Dog</Link>
    </nav>
  );
};

export default NavBar;
