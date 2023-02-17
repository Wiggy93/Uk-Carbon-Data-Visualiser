import { NavLink } from "react-router-dom";
import styles from "../Css/Nav.module.css";
import CarbonIntensity from "./CarbonIntensity";
import PowerGen from "./PowerGen";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to="/carbonintensity"
        element={<CarbonIntensity />}
        className={styles.link}
      >
        Carbon Intensity
      </NavLink>
      <NavLink to="/powergen" element={<PowerGen />} className={styles.link}>
        Power Generation
      </NavLink>
      <NavLink to="/" className={styles.link}>
        Home
      </NavLink>
    </nav>
  );
};

export default Nav;
