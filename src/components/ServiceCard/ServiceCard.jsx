import styles from './ServiceCard.module.css';

function ServiceCard({ title, color }) {
  return (
    <article className={styles.card} style={{ '--card-color': color }}>
      <h3>{title}</h3>
    </article>
  );
}

export default ServiceCard;
