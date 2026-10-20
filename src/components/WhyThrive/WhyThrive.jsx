import styles from './WhyThrive.module.css';

function WhyThrive() {
  return (
    <section className={styles.section} aria-labelledby="why-title">
      <div className={styles.content}>
        <h2 id="why-title">Why Thrive?</h2>
        <p>
          <strong>
            Want to improve your well-being from the comfort of your own couch? Are you
            having trouble finding the right therapist?
          </strong>{' '}
          Here at ThriveTalk, our licensed therapists provide the same quality care you
          would get in office from anywhere you can access your laptop or mobile phone.
          Become your best self with ThriveTalk. Start therapy now with a licensed therapist!
        </p>
      </div>
      <img src="/assets/2.jpg" alt="A woman enjoying an active, balanced life" />
    </section>
  );
}

export default WhyThrive;
