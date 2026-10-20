import styles from './ProgramCard.module.css';

function ProgramCard({ title, color, image }) {
  const cardStyle = image
    ? { '--card-background': `linear-gradient(rgba(34, 53, 111, 0.06), rgba(34, 53, 111, 0.06)), url(${image})` }
    : { '--card-background': color };

  return (
    <article className={styles.card} style={cardStyle}>
      <h3>{title}</h3>
    </article>
  );
}

export default ProgramCard;
