
import Link from 'next/link';
import styles from '../styles/Services.module.css';

export default function Services() {
  return (
    <div className={styles.service}>
      <h1 className={styles.title}>Our Services</h1>
      <p>We offer various services.</p>
      <ul>
        <li><Link href="/services/design">Design Services</Link></li>
      </ul>
    </div>
  );
}
