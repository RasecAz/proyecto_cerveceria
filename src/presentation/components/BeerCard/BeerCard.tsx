import { Beer } from '../../../domain/entities/Beer';
import styles from './BeerCard.module.css';

interface Props {
  beer: Beer;
}

export function BeerCard({ beer }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.image} style={{ background: beer.color }}>
        🍺
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{beer.name}</div>
        <div className={styles.style}>{beer.style}</div>
        {beer.description && <p className={styles.description}>{beer.description}</p>}
      </div>
    </div>
  );
}
