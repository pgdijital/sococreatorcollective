import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand}>
          <span className={styles.brandMark}>SoCo</span>
          <span className={styles.brandName}>Creator Collective</span>
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/creators" className={navLinkClass}>
            Creators
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
