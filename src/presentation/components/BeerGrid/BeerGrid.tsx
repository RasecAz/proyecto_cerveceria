import { WAJIRA_BEERS } from '../../../domain/entities/Beer';
import { BeerCard } from '../BeerCard/BeerCard';
import styles from './BeerGrid.module.css';

export function BeerGrid() {
  return (
    <section id="cervezas" className={styles.section}>
      <div className={styles.sectionTitle}>Nuestras cervezas</div>
      <div className={styles.grid}>
        {WAJIRA_BEERS.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </section>
  );
}
