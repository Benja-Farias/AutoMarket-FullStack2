import { imagenes } from '../assets/images/index.js';
import { formatNumber } from '../utils/format.js';

const crear = (id, marca, modelo, anio, transmision, km, combustible, precio, estado, imagen, destacado) => ({
  id,
  marca,
  nombre: `${marca} ${modelo} ${anio}`,
  detalle: `${transmision} • ${formatNumber(km)} km • ${combustible}`,
  precio,
  estado,
  imagen,
  destacado,
});

export const PRODUCTS = [
  crear(1, 'Toyota', 'RAV4', 2023, 'Automático', 25000, 'Bencina', 18990000, 'Usado', imagenes.auto1, true),
  crear(2, 'Mazda', 'CX-5', 2022, 'Mecánico', 40000, 'Bencina', 16500000, 'Usado', imagenes.auto2, true),
  crear(3, 'Chevrolet', 'Tracker', 2024, 'Automático', 10000, 'Turbo', 14200000, 'Usado', imagenes.auto3, true),
  crear(4, 'Hyundai', 'Tucson', 2021, 'Automático', 55000, 'Diésel', 15800000, 'Usado', imagenes.auto1, true),
  crear(5, 'Ford', 'Ranger', 2023, '4x4', 30000, 'Diésel', 22900000, 'Usado', imagenes.auto2, true),
  crear(6, 'Nissan', 'Kicks', 2022, 'Mecánico', 35000, 'Bencina', 12990000, 'Usado', imagenes.auto3, true),
  crear(7, 'Toyota', 'RAV4', 2024, 'Automático', 0, 'Bencina', 24990000, 'Nuevo', imagenes.auto3, false),
];
