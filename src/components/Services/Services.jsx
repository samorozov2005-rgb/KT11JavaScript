import ServiceCard from '../ServiceCard/ServiceCard.jsx';
import styles from './Services.module.css';

const services = [
  { id: 'weight-lifting', title: 'Weight Lifting', color: '#ffe2de' },
  { id: 'running', title: 'Running & Spinning', color: '#c4e769' },
  { id: 'pumping-light', title: 'Pumping Iron', color: '#62d0df' },
  { id: 'pumping-blue', title: 'Pumping Iron', color: '#0052c1' },
];

function Services() {
  return (
    <section className={styles.grid} id="services" aria-label="Ways we can help">
      {services.map((service) => (
        <ServiceCard key={service.id} title={service.title} color={service.color} />
      ))}
    </section>
  );
}

export default Services;
