import styles from './Footer.module.css';

const details = [
  {
    id: 'info',
    title: 'Some info',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.',
  },
  {
    id: 'health',
    title: 'Enfold health',
    content: 'Main Street 1, Olcott Buffalo, United States',
    phone: '+555 283 784 333',
    email: 'office@enfold-health.com',
  },
  {
    id: 'hours',
    title: 'Office hours',
    content: 'Mo–Fr: 8:00–19:00\nSa: 8:00–14:00\nSu: closed',
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <img src="/assets/6.png" alt="A peaceful ThriveTalk workspace" />
        <div className={styles.details}>
          {details.map((detail) => (
            <section className={styles.detail} key={detail.id}>
              <h2>{detail.title}</h2>
              <p>{detail.content}</p>
              {detail.phone && <a href={`tel:${detail.phone.replace(/\s/g, '')}`}>{detail.phone}</a>}
              {detail.email && <a className={styles.email} href={`mailto:${detail.email}`}>{detail.email}</a>}
            </section>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>© Copyright — ThriveTalk 2017</div>
    </footer>
  );
}

export default Footer;
