import { filterProducts, getBrands } from '../src/utils/filters.js';

const autos = [
  { id: 1, marca: 'Toyota', nombre: 'Toyota RAV4 2024', precio: 24990000, estado: 'Nuevo' },
  { id: 2, marca: 'Hyundai', nombre: 'Hyundai Tucson 2021', precio: 16500000, estado: 'Usado' },
  { id: 3, marca: 'Toyota', nombre: 'Toyota Yaris 2020', precio: 9000000, estado: 'Usado' },
];

describe('filters', () => {
  // PRUEBA 5
  it('filterProducts filtra por texto, marca y estado', () => {
    expect(filterProducts(autos, {}).length).toBe(3);
    expect(filterProducts(autos, { texto: 'tucson' }).map((a) => a.id)).toEqual([2]);
    expect(filterProducts(autos, { marca: 'Toyota' }).map((a) => a.id)).toEqual([1, 3]);
    expect(filterProducts(autos, { marca: 'Toyota', estado: 'Usado' }).map((a) => a.id)).toEqual([3]);
    expect(filterProducts(autos, { texto: 'bmw' })).toEqual([]);
    expect(getBrands(autos)).toEqual(['Hyundai', 'Toyota']);
  });
});
