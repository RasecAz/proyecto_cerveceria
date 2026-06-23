import { Beer } from '../../../domain/entities/Beer';
import styles from './BeerCard.module.css';

interface Props {
  beer: Beer;
  onClick: () => void;
}

export function BeerCard({ beer, onClick }: Props) {
  return (
    <div onClick={onClick} className={styles.card}>
      {/* Contenedor fijo para la imagen */}
      <div className={styles.imageContainer}>
        <img src={beer.image} alt={beer.name} className={styles.beerImage} />
      </div>
      <h3 className={styles.beerName}>{beer.name}</h3>
      <button
        onClick={onClick}
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-amber-600 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
      >
        Ver detalle
      </button>
    </div>
  );
}

