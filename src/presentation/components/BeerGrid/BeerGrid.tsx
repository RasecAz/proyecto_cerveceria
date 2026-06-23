import { useState } from 'react';
import { WAJIRA_BEERS, Beer } from '../../../domain/entities/Beer';
import { BeerCard } from '../BeerCard/BeerCard';
import ModalCerveza from '../ModalCerveza/ModalCerveza';
import styles from './BeerGrid.module.css';

export function BeerGrid() {
  const [selectedBeer, setSelectedBeer] = useState<Beer | null>(null);

  return (
    <>
      <section id="cervezas" className={styles.section}>
        <div className={styles.sectionTitle}>Nuestras cervezas</div>
        <div className={styles.grid}>
          {WAJIRA_BEERS.map((beer) => (
            <BeerCard
              key={beer.id}
              beer={beer}
              onClick={() => setSelectedBeer(beer)}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      <ModalCerveza cerveza={selectedBeer} onClose={() => setSelectedBeer(null)} />
    </>
  );
}
