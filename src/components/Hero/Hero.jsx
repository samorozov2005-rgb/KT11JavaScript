import Button from '../Button/Button.jsx';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Thrivetalk</p>
        <h1 id="hero-title">Helping you thrive in all areas of life</h1>
        <p className={styles.copy}>
          Our highly talented therapists can help you with a range of issues including
          relationships, sex, PTSD, depression, social anxiety, or even just caring for
          yourself more.
        </p>
        <div className={styles.actions}>
          <Button href="#about" variant="accent">Who am I</Button>
          <Button href="#services" variant="ghost">What do I do</Button>
        </div>
      </div>
      <div className={styles.visual} aria-hidden="true">
        <div className={styles.backShape} />
        <div className={styles.imageShape}>
          <img src="/assets/1.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
