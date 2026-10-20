import ProgramCard from '../ProgramCard/ProgramCard.jsx';
import styles from './Programs.module.css';

const programs = [
  { id: 'physical', title: 'Physical Health', color: '#22356f' },
  { id: 'mental', title: 'Mental Health', color: '#0052c1' },
  { id: 'nutrition', title: 'Nutrition', image: '/assets/3.jpg' },
  { id: 'gymnastics', title: 'Gymnastics', color: '#62d0df' },
  { id: 'crossfit', title: 'Crossfit', color: '#dee1ff' },
  { id: 'aerobics', title: 'Aerobics', color: '#8f00ff' },
];

function Programs() {
  return (
    <section className={styles.grid} aria-label="Health programs">
      {programs.map((program) => (
        <ProgramCard key={program.id} {...program} />
      ))}
    </section>
  );
}

export default Programs;
