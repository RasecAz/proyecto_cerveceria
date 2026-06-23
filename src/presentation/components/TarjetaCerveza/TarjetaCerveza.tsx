import { motion } from 'framer-motion';
import { Beer } from '../../../domain/entities/Beer';
import styles from './TarjetaCerveza.module.css';

interface Props {
  cerveza: Beer;
  onClick: () => void;
}

const glowColors: Record<string, string> = {
  'from-yellow-500 to-orange-400': 'rgba(234, 179, 8, 0.4)',
  'from-gray-900 to-black': 'rgba(75, 85, 99, 0.4)',
  'from-yellow-400 to-amber-500': 'rgba(245, 158, 11, 0.4)',
  'from-red-700 to-red-500': 'rgba(220, 38, 38, 0.4)',
  'from-lime-700 to-yellow-600': 'rgba(132, 204, 22, 0.4)',
  'from-pink-500 to-purple-600': 'rgba(168, 85, 247, 0.4)',
};

export default function TarjetaCerveza({ cerveza, onClick }: Props) {
  const glowColor = glowColors[cerveza.color] || 'rgba(201, 150, 58, 0.4)';

  return (
    <motion.div
      onClick={onClick}
      className={styles.card}
      style={{
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: `0 20px 40px rgba(0, 0, 0, 0.6), 0 0 60px ${glowColor}`,
        borderColor: 'rgba(255, 255, 255, 0.2)',
      }}
    >
      {/* Glow effect behind card */}
      <div
        className="absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: glowColor }}
      />

      {/* Imagen - contenedor exacto */}
      <div className={styles.imageContainer}>
        <img
          src={cerveza.image}
          alt={cerveza.name}
          className={styles.beerImage}
        />
      </div>

      {/* Contenido */}
      <div className={styles.info}>
        <h3 className={styles.name}>{cerveza.name}</h3>
        <p className={styles.description}>{cerveza.description}</p>
        <motion.div
          className={styles.button}
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{ scale: 0.98 }}
        >
          Ver detalle
          <motion.span
            className="text-xs"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            →
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
