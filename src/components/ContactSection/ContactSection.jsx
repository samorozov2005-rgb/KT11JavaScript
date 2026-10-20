import Button from '../Button/Button.jsx';
import styles from './ContactSection.module.css';

function ContactSection() {
  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Contact us</p>
        <h2 id="contact-title">Ready. Set. Smile</h2>
        <p className={styles.copy}>
          Take the free online assessment to see if you are a candidate and get started
          on your journey.
        </p>
        <Button href="mailto:office@enfold-health.com" variant="ghost" ariaLabel="Email ThriveTalk">
          Get help now
        </Button>
      </div>
      <img src="/assets/5.png" alt="A welcoming ThriveTalk specialist" />
    </section>
  );
}

export default ContactSection;
