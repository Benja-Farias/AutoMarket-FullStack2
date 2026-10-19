export const FILTROS_INICIALES = { texto: '', marca: 'Todas', estado: 'Todos' };

export function filterProducts(productos, { texto = '', marca = 'Todas', estado = 'Todos' } = {}) {
  const busqueda = texto.trim().toLowerCase();
  return productos.filter((p) => {
    const coincideTexto = busqueda === '' || `${p.marca} ${p.nombre}`.toLowerCase().includes(busqueda);
    const coincideMarca = marca === 'Todas' || p.marca === marca;
    const coincideEstado = estado === 'Todos' || p.estado === estado;
    return coincideTexto && coincideMarca && coincideEstado;
  });
}

export function sortProducts(productos, orden = 'asc') {
  const copia = [...productos];
  return copia.sort((a, b) => (orden === 'asc' ? a.precio - b.precio : b.precio - a.precio));
}

export function getBrands(productos) {
  return [...new Set(productos.map((p) => p.marca))].sort();
}

export function chunk(lista, tamano) {
  const grupos = [];
  for (let i = 0; i < lista.length; i += tamano) grupos.push(lista.slice(i, i + tamano));
  return grupos;
}
