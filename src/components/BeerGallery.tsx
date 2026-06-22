import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import cerveza1 from '../assets/Cerveza1.png';
import cerveza2 from '../assets/Cerveza2.png';
import cerveza3 from '../assets/Cerveza3.png';
import cerveza4 from '../assets/Cerveza4.png';
import cerveza5 from '../assets/Cerveza5.png';
import cerveza6 from '../assets/Cerveza6.png';

type Beer = {
  id: number;
  name: string;
  image: string;
  gradient: string;
  description: string;
  alcohol: string;
  style: string;
  shadow: string;
  glow: string;
};

const beers: Beer[] = [
  {
    id: 1,
    name: 'Wajira Pale Ale Session',
    image: cerveza1,
    gradient: 'from-yellow-500 via-orange-400 to-amber-300',
    description:
      'Cerveza artesanal ligera y refrescante, con notas cítricas y un amargor suave ideal para cualquier ocasión.',
    alcohol: '4.5%',
    style: 'Pale Ale Session',
    shadow: '0 40px 120px rgba(250, 204, 21, 0.25)',
    glow: 'shadow-yellow-500/30',
  },
  {
    id: 2,
    name: 'Wayunaiki Stout',
    image: cerveza2,
    gradient: 'from-slate-800 via-gray-900 to-black',
    description:
      'Cerveza oscura con cuerpo robusto, notas a café tostado, cacao y un final intenso y elegante.',
    alcohol: '6.8%',
    style: 'Stout',
    shadow: '0 40px 120px rgba(255, 255, 255, 0.10)',
    glow: 'shadow-white/10',
  },
  {
    id: 3,
    name: 'La Juya Golden Ale',
    image: cerveza3,
    gradient: 'from-amber-400 via-yellow-400 to-amber-500',
    description:
      'Golden Ale balanceada con aroma suave, ligera dulzura y excelente tomabilidad.',
    alcohol: '5.2%',
    style: 'Golden Ale',
    shadow: '0 40px 120px rgba(245, 158, 11, 0.25)',
    glow: 'shadow-amber-500/30',
  },
  {
    id: 4,
    name: 'La Yonna Red IPA',
    image: cerveza4,
    gradient: 'from-red-700 via-red-600 to-rose-500',
    description:
      'IPA rojiza con carácter fuerte, notas maltosas y un amargor pronunciado con aroma frutal.',
    alcohol: '6.5%',
    style: 'Red IPA',
    shadow: '0 40px 120px rgba(239, 68, 68, 0.24)',
    glow: 'shadow-red-500/30',
  },
  {
    id: 5,
    name: 'Maleiwa IPA',
    image: cerveza5,
    gradient: 'from-lime-700 via-emerald-600 to-yellow-600',
    description:
      'IPA artesanal con aroma herbal y cítrico, perfecta para amantes del lúpulo.',
    alcohol: '7.0%',
    style: 'IPA',
    shadow: '0 40px 120px rgba(132, 204, 22, 0.24)',
    glow: 'shadow-lime-500/30',
  },
  {
    id: 6,
    name: 'Puyuma Purple Ale',
    image: cerveza6,
    gradient: 'from-fuchsia-500 via-purple-600 to-violet-700',
    description:
      'Cerveza innovadora con perfil aromático floral y notas suaves frutales.',
    alcohol: '5.8%',
    style: 'Purple Ale',
    shadow: '0 40px 120px rgba(168, 85, 247, 0.22)',
    glow: 'shadow-purple-500/30',
  },
];

export function BeerGallery() {
  const [selectedBeer, setSelectedBeer] = useState<Beer | null>(null);

  return (
    <section id="cervezas" className="relative overflow-hidden bg-[#05060f] py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_25%)] opacity-80" />
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute right-10 top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-amber-200/80 backdrop-blur-xl">
            Colección premium
          </span>
          <h2 className="mt-6 text-4xl font-serif font-semibold tracking-tight text-white sm:text-5xl">
            Nuestras Cervezas Artesanales
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Sabores únicos inspirados en tradición, cultura y pasión artesanal.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {beers.map((beer) => (
            <motion.button
              key={beer.id}
              type="button"
              onClick={() => setSelectedBeer(beer)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: beer.id * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative flex min-h-[620px] flex-col overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.3)] backdrop-blur-xl transition duration-500 hover:border-white/20"
            >
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
              <div className="relative z-10 flex-1 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                <div className="absolute -left-8 top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                <div
                  className={`relative mx-auto flex h-[420px] w-full items-center justify-center overflow-hidden rounded-[32px] bg-gradient-to-br ${beer.gradient} p-6 ${beer.glow}`}
                  style={{ boxShadow: beer.shadow }}
                >
                  <div className="absolute inset-0 rounded-[32px] bg-black/10" />
                  <motion.img
                    src={beer.image}
                    alt={beer.name}
                    className="relative z-10 h-full w-auto object-contain transition duration-700 ease-out group-hover:-translate-y-3"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>
              </div>

              <div className="relative z-10 mt-7 flex-1">
                <div className="inline-flex rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.24em] text-amber-100/90 shadow-[0_10px_40px_rgba(0,0,0,0.22)] font-serif">
                  {beer.style}
                </div>
                <h3 className="mt-5 text-3xl font-serif font-semibold text-white">{beer.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{beer.description}</p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 shadow-[0_18px_60px_rgba(255,255,255,0.05)]">
                    {beer.alcohol}
                  </span>
                  <span className="rounded-full bg-[#111827]/80 px-4 py-2 text-sm font-serif font-semibold uppercase tracking-[0.18em] text-amber-200 shadow-[0_18px_60px_rgba(249,168,59,0.2)]">
                    Ver más
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedBeer ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-xl"
            onClick={() => setSelectedBeer(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[36px] border border-white/10 bg-[#080c18]/95 shadow-[0_45px_140px_rgba(0,0,0,0.75)] backdrop-blur-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedBeer(null)}
                className="absolute right-5 top-5 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>

              <div className="grid gap-6 overflow-hidden lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative overflow-hidden bg-[#09101f]/80 p-6 sm:p-8">
                  <div className="absolute -right-16 top-10 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
                  <div className="absolute -left-16 bottom-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
                  <div
                    className={`relative mx-auto flex h-[420px] w-full items-center justify-center overflow-hidden rounded-[36px] bg-gradient-to-br ${selectedBeer.gradient} ${selectedBeer.glow} p-6`}
                    style={{ boxShadow: selectedBeer.shadow }}
                  >
                    <img src={selectedBeer.image} alt={selectedBeer.name} className="h-full w-auto object-contain" />
                  </div>
                </div>

                <div className="space-y-6 p-6 sm:p-8">
                  <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.24)]">
                    <span className="inline-flex rounded-full bg-amber-200/10 px-3 py-2 text-xs uppercase tracking-[0.24em] text-amber-100">
                      Alcohol
                    </span>
                    <div className="mt-6 space-y-5 text-slate-200">
                      <div>
                        <p className="text-sm uppercase tracking-[0.22em] text-slate-400 font-serif">Estilo</p>
                        <p className="mt-2 text-3xl font-serif font-semibold text-white">{selectedBeer.style}</p>
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.22em] text-slate-400 font-serif">Descripción</p>
                        <p className="mt-3 text-base leading-8 text-slate-200">{selectedBeer.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[32px] border border-white/10 bg-[#0b1220]/90 p-6 backdrop-blur-xl shadow-[0_28px_95px_rgba(0,0,0,0.22)]">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.22em] text-slate-400 font-serif">Nombre</p>
                        <p className="mt-2 text-2xl font-serif font-semibold text-white">{selectedBeer.name}</p>
                      </div>
                      <div className="rounded-full bg-white/5 px-4 py-2 text-sm font-serif font-semibold uppercase tracking-[0.18em] text-amber-200 shadow-[0_18px_60px_rgba(249,168,59,0.18)]">
                        {selectedBeer.alcohol}
                      </div>
                    </div>
                    <div className="mt-6 space-y-4 text-slate-300">
                      <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Experiencia premium</p>
                      <p className="leading-7">
                        Una experiencia artesanal elevada: textura suave, detalles aromáticos y carácter refinado que transmiten la esencia de una marca premium de alto nivel.
                      </p>
                      <p className="leading-7">
                        Perfecta para quienes buscan una cerveza con presencia, estética impecable y un equilibrio entre tradición y modernidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
