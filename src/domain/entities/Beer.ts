import cerveza1 from '../../assets/Cerveza1.png';
import cerveza2 from '../../assets/Cerveza2.png';
import cerveza3 from '../../assets/Cerveza3.png';
import cerveza4 from '../../assets/Cerveza4.png';
import cerveza5 from '../../assets/Cerveza5.png';
import cerveza6 from '../../assets/Cerveza6.png';

export interface Beer {
  id: number;
  name: string;
  style: string;
  color: string;
  description: string;
  image: string;
  alcohol: string;
  origen?: string;
  maridaje?: string;
}

export const WAJIRA_BEERS: Beer[] = [
  {
    id: 1,
    name: 'Wajira Pale Ale Session',
    image: cerveza1,
    color: 'from-yellow-500 to-orange-400',
    description:
      'Cerveza artesanal ligera y refrescante, con notas cítricas y un amargor suave ideal para cualquier ocasión.',
    alcohol: '4.5%',
    style: 'Pale Ale Session',
    origen: 'Colombia',
    maridaje: 'Mariscos, ensaladas frescas',
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
    origen: 'Colombia',
    maridaje: 'Chocolate oscuro, postres',
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
    origen: 'Colombia',
    maridaje: 'Pollo, quesos suaves',
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
    origen: 'Colombia',
    maridaje: 'Carnes rojas, comida picante',
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
    origen: 'Colombia',
    maridaje: 'Comida tailandesa, asiática',
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
    origen: 'Colombia',
    maridaje: 'Frutas, postres ligeros',
  },
];
