import { useState } from 'react';
import { motion } from 'framer-motion';
import { WAJIRA_BEERS, Beer } from '../../../domain/entities/Beer';
import ModalCerveza from '../ModalCerveza/ModalCerveza';
import TarjetaCerveza from '../TarjetaCerveza/TarjetaCerveza';
import styles from './BeerGallery.module.css';

export function BeerGallery() {
  const [selectedBeer, setSelectedBeer] = useState<Beer | null>(null);

  return (
    <>
      <section id="cervezas" className={styles.galleryContainer}>
        {/* Ambient lighting effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />
          <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-yellow-500/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Título Premium Estético */}
          <h1 className={styles.premiumTitle}>Nuestras Cervezas Artesanales</h1>

          {/* Grid de tarjetas */}
          <div className={styles.grid}>
            {WAJIRA_BEERS.map((cerveza, index) => (
              <motion.div
                key={cerveza.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <TarjetaCerveza
                  cerveza={cerveza}
                  onClick={() => setSelectedBeer(cerveza)}
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal */}
      <ModalCerveza cerveza={selectedBeer} onClose={() => setSelectedBeer(null)} />
    </>
  );
}