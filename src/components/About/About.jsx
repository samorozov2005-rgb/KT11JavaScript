import styles from './About.module.css';

function About() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <h2 id="about-title">About us</h2>
      <p>
        We want to help you thrive! Whether you are just looking for someone to talk to,
        or are struggling with a mental wellness issue we’re here to help. Our highly
        talented therapists can help you with a range of issues including relationships,
        sex, PTSD, depression, social anxiety, or even just caring for yourself more.
      </p>
      <span>We can help you with</span>
    </section>
  );
}

export default About;
