import Button from '../Button/Button.jsx';
import styles from './StorySection.module.css';

function StorySection() {
  return (
    <section className={styles.section} id="story" aria-labelledby="story-title">
      <img src="/assets/4.png" alt="A supportive conversation in a calm setting" />
      <div className={styles.content}>
        <p className={styles.eyebrow}>You should also know</p>
        <h2 id="story-title">
          MDD affects more than 16.1 million American adults, or about 6.7% of the U.S.
          population age 18 and older in a given year. We at <span>ThriveTalk</span> can help you.
        </h2>
        <Button href="#contact" variant="ghost">Get help now</Button>
      </div>
    </section>
  );
}

export default StorySection;
