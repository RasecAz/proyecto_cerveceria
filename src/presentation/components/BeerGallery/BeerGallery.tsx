import { useState } from 'react';
import cerveza1 from '../../../assets/Cerveza1.png';
import cerveza2 from '../../../assets/Cerveza2.png';
import cerveza3 from '../../../assets/Cerveza3.png';
import cerveza4 from '../../../assets/Cerveza4.png';
import cerveza5 from '../../../assets/Cerveza5.png';
import cerveza6 from '../../../assets/Cerveza6.png';

type Beer = {
  id: number;
  name: string;
  image: string;
  color: string;
  description: string;
  alcohol: string;
  style: string;
};

const beers: Beer[] = [
  {
    id: 1,
    name: 'Wajira Pale Ale Session',
    image: cerveza1,
    color: 'from-yellow-500 to-orange-400',
    description:
      'Cerveza artesanal ligera y refrescante, con notas cítricas y un amargor suave ideal para cualquier ocasión.',
    alcohol: '4.5%',
    style: 'Pale Ale Session',
  },
  {
    id: 2,
    name: 'Wayunaiki Stout',
    image: cerveza2,
    color: 'from-gray-900 to-black',
    description:
      'Cerveza oscura con cuerpo robusto, notas a café tostado, cacao y un final intenso y elegante.',
    alcohol: '6.8%',
    style: 'Stout',
  },
  {
    id: 3,
    name: 'La Juya Golden Ale',
    image: cerveza3,
    color: 'from-yellow-400 to-amber-500',
    description:
      'Golden Ale balanceada con aroma suave, ligera dulzura y excelente tomabilidad.',
    alcohol: '5.2%',
    style: 'Golden Ale',
  },
  {
    id: 4,
    name: 'La Yonna Red IPA',
    image: cerveza4,
    color: 'from-red-700 to-red-500',
    description:
      'IPA rojiza con carácter fuerte, notas maltosas y un amargor pronunciado con aroma frutal.',
    alcohol: '6.5%',
    style: 'Red IPA',
  },
  {
    id: 5,
    name: 'Maleiwa IPA',
    image: cerveza5,
    color: 'from-lime-700 to-yellow-600',
    description:
      'IPA artesanal con aroma herbal y cítrico, perfecta para amantes del lúpulo.',
    alcohol: '7.0%',
    style: 'IPA',
  },
  {
    id: 6,
    name: 'Puyuma Purple Ale',
    image: cerveza6,
    color: 'from-pink-500 to-purple-600',
    description:
      'Cerveza innovadora con perfil aromático floral y notas suaves frutales.',
    alcohol: '5.8%',
    style: 'Purple Ale',
  },
];

export function BeerGallery() {
  const [selectedBeer, setSelectedBeer] = useState<Beer | null>(null);

  return (
    <section id="cervezas" className="relative overflow-hidden bg-[#070a14] py-16 sm:py-20">
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.09),transparent_45%)] opacity-70" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-amber-200/90">
            Sabores selectos
          </p>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Nuestras Cervezas Artesanales
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
            Sabores únicos inspirados en tradición, cultura y pasión artesanal.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {beers.map((beer) => (
            <button
              key={beer.id}
              type="button"
              onClick={() => setSelectedBeer(beer)}
              className="group flex flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5 text-left shadow-[0_25px_90px_rgba(0,0,0,0.25)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_35px_110px_rgba(245,158,11,0.2)] focus:outline-none focus:ring-2 focus:ring-amber-400/30"
            >
              <div className={`relative mb-5 flex h-[360px] items-end justify-center overflow-hidden rounded-[28px] bg-gradient-to-br ${beer.color}`}>
                <div className="absolute inset-0 bg-black/20" />
                <img
                  src={beer.image}
                  alt={beer.name}
                  className="relative z-10 h-full w-auto object-contain transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="relative z-10 mt-auto">
                <div className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-100/80">
                  {beer.style}
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">{beer.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300 md:h-[5.5rem] md:overflow-hidden">
                  {beer.description}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100">
                    {beer.alcohol}
                  </span>
                  <span className="inline-flex items-center justify-center rounded-full bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-200 transition duration-300 group-hover:bg-amber-400/20">
                    Ver más
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedBeer ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
          onClick={() => setSelectedBeer(null)}
        >
          <div
            className="w-full max-w-5xl rounded-[32px] border border-white/10 bg-[#08101f]/95 shadow-[0_35px_90px_rgba(0,0,0,0.65)] transition duration-300"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6 border-b border-white/10 px-6 py-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">Edición especial</p>
                <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{selectedBeer.name}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Un lanzamiento boutique con carácter premium, diseñado para lucir en cada celebración y momento único.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedBeer(null)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-slate-200 transition hover:bg-white/10"
                aria-label="Cerrar modal"
              >
                ×
              </button>
            </div>

            <div className="grid gap-6 px-6 py-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[28px] bg-[#0f1729]/80 p-6">
                <div className={`overflow-hidden rounded-[28px] bg-gradient-to-br ${selectedBeer.color} p-6`}>
                  <img
                    src={selectedBeer.image}
                    alt={selectedBeer.name}
                    className="mx-auto h-[380px] w-auto object-contain"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-[28px] bg-white/5 p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-amber-300/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">
                      Alcohol
                    </span>
                    <span className="rounded-full bg-slate-900/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">
                      {selectedBeer.alcohol}
                    </span>
                  </div>
                  <div className="mt-6 space-y-6 text-slate-300">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Estilo</p>
                      <p className="mt-2 text-xl font-semibold text-white">{selectedBeer.style}</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Descripción</p>
                      <p className="mt-3 text-base leading-7 text-slate-200">{selectedBeer.description}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[28px] bg-[#0b1120]/90 p-6 text-slate-300">
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-300">Experiencia artesanal</p>
                  <p className="mt-4 leading-7 text-slate-200">
                    Cada cerveza está elaborada con ingredientes premium y una narrativa única que evoca tradición, sabor y sofisticación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
