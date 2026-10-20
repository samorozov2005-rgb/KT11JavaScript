import styles from './Button.module.css';

function Button({ children, href, variant = 'primary', ariaLabel }) {
  return (
    <a
      className={`${styles.button} ${styles[variant]}`}
      href={href}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

export default Button;
