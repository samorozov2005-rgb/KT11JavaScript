import BenefitCard from '../BenefitCard/BenefitCard.jsx';
import styles from './Benefits.module.css';

const description =
  'Nutritional facts on the everyday choices that shape how you feel, move, rest, and thrive.';

const benefits = [
  { id: 'plans', title: 'Nutritional Plans' },
  { id: 'loss', title: 'Weight Loss' },
  { id: 'peace', title: 'Mental Peace' },
  { id: 'training', title: 'Home Training' },
  { id: 'balance', title: 'Work/Life Balance' },
  { id: 'cardio', title: 'Cardio' },
];

function Benefits() {
  return (
    <section className={styles.grid} aria-label="Benefits">
      {benefits.map((benefit) => (
        <BenefitCard key={benefit.id} title={benefit.title} text={description} />
      ))}
    </section>
  );
}

export default Benefits;
