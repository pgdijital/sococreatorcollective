import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.brand}>SoCo Creator Collective</p>
          <p className={styles.tagline}>
            Authentic local promotion for Sonoma County businesses and creators.
          </p>
        </div>
        <nav className={styles.links} aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/creators">Creators</Link>
        </nav>
      </div>
      <div className={`container ${styles.credit}`}>
        <p>Sonoma County, CA</p>
      </div>
    </footer>
  );
}
