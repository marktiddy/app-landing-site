import styles from '../styles/Home.module.scss';
import Link from 'next/link';

const Card = ({ app }) => {
  return (
    <Link href={`/app/${app.slug}`}>
      <div className={styles.card}>
        <h2 style={styles.cardtitle}>{app.name}</h2>
        <p>{app.desc}</p>
      </div>
    </Link>
  );
};
export default Card;
