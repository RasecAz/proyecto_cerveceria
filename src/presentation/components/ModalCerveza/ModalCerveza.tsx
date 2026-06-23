import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Beer } from '../../../domain/entities/Beer';

interface Props {
  cerveza: Beer | null;
  onClose: () => void;
}

export default function ModalCerveza({ cerveza, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {cerveza && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xl"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-stone-900/95 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen header */}
            <div className="relative h-72 overflow-hidden bg-gradient-to-br from-black/80 to-black/60 sm:h-80">
              <motion.img
                src={cerveza.image}
                alt={cerveza.name}
                className="h-full w-full object-contain p-8"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />

              {/* Overlay con texto */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/60 to-transparent p-6">
                <motion.p
                  className="text-xs font-mono uppercase tracking-widest text-amber-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {cerveza.style}
                </motion.p>
                <motion.h2
                  className="mt-3 text-4xl font-display font-bold text-stone-100"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  {cerveza.name}
                </motion.h2>
              </div>

              {/* Botón cerrar */}
              <motion.button
                onClick={onClose}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-stone-100 backdrop-blur-md transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                ✕
              </motion.button>
            </div>

            {/* Cuerpo */}
            <div className="p-6 sm:p-8">
              <motion.p
                className="text-base leading-relaxed text-stone-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {cerveza.description}
              </motion.p>

              {/* Stats */}
              <motion.div
                className="mt-8 grid gap-4 sm:grid-cols-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {/* Alcohol */}
                <div className="rounded-xl border border-stone-800 bg-stone-800/30 p-4 backdrop-blur-sm">
                  <p className="text-xs font-mono uppercase tracking-widest text-amber-400">
                    Alcohol
                  </p>
                  <p className="mt-3 text-2xl font-display font-bold text-amber-200">
                    {cerveza.alcohol}
                  </p>
                </div>

                {/* Origen */}
                {cerveza.origen && (
                  <div className="rounded-xl border border-stone-800 bg-stone-800/30 p-4 backdrop-blur-sm">
                    <p className="text-xs font-mono uppercase tracking-widest text-amber-400">
                      Origen
                    </p>
                    <p className="mt-3 text-lg font-semibold text-stone-100">
                      {cerveza.origen}
                    </p>
                  </div>
                )}

                {/* Maridaje */}
                {cerveza.maridaje && (
                  <div className="rounded-xl border border-stone-800 bg-stone-800/30 p-4 backdrop-blur-sm">
                    <p className="text-xs font-mono uppercase tracking-widest text-amber-400">
                      Maridaje
                    </p>
                    <p className="mt-3 text-sm text-stone-200">
                      {cerveza.maridaje}
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Botón cerrar */}
              <motion.button
                onClick={onClose}
                className="mt-8 w-full rounded-xl border border-amber-500/30 bg-amber-500/10 px-6 py-3 font-semibold text-amber-200 transition-all hover:bg-amber-500/20 hover:border-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                Cerrar
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}