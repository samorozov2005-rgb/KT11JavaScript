import styles from './BenefitCard.module.css';

function BenefitCard({ title, text }) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default BenefitCard;
