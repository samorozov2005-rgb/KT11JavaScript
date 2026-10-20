import { useState } from 'react';
import Button from '../Button/Button.jsx';
import styles from './Header.module.css';

const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'story', label: 'Blog' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <a className={styles.logo} href="#home">Thrivetalk</a>
        <button
          className={`${styles.menuButton} ${isOpen ? styles.menuOpen : ''}`}
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul id="main-menu" className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
          {navigation.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => setIsOpen(false)}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className={styles.contactButton}>
          <Button href="#contact">Contact us</Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
