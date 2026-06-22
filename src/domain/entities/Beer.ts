export interface Beer {
  id: string;
  name: string;
  style: string;
  color: string;
  description?: string;
}

export const WAJIRA_BEERS: Beer[] = [
  { id: 'la-juya', name: 'La Juya', style: 'Golden Ale', color: '#F4A623', description: 'Suave y dorada, con notas a malta y miel.' },
  { id: 'la-yonna', name: 'La Yonna', style: 'Red IPA', color: '#C0202A', description: 'Intensa, con cuerpo y lúpulo balanceado.' },
  { id: 'wayunaiki', name: 'Wayunaiki', style: 'Stout', color: '#1D1D1D', description: 'Oscura, cremosa, con notas a café y chocolate.' },
  { id: 'maleiwa', name: 'Maleiwa', style: 'IPA', color: '#1D9E75', description: 'Aromática y refrescante, con cítricos y lúpulo.' },
];
