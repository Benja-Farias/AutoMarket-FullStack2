import { useMemo, useState } from 'react';
import CatalogFilters from '../components/CatalogFilters.jsx';
import CarCard from '../components/CarCard.jsx';
import { PRODUCTS } from '../data/products.js';
import { FILTROS_INICIALES, filterProducts, sortProducts, getBrands } from '../utils/filters.js';

export default function CatalogPage() {
  const [filtros, setFiltros] = useState(FILTROS_INICIALES);
  const [orden, setOrden] = useState('asc');

  const marcas = useMemo(() => getBrands(PRODUCTS), []);
  const visibles = useMemo(() => sortProducts(filterProducts(PRODUCTS, filtros), orden), [filtros, orden]);

  return (
    <>
      <div className="container-fluid py-4 px-lg-5">
        <div className="row g-4">
          <aside className="col-12 col-md-4 col-lg-3">
            <CatalogFilters filtros={filtros} marcas={marcas} onChange={setFiltros} />
          </aside>

          <section className="col-12 col-md-8 col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-3 p-3 bg-white rounded shadow-sm">
              <span className="text-muted small">
                Mostrando <strong>{visibles.length}</strong> vehículos
              </span>
              <select
                className="form-select form-select-sm w-auto"
                aria-label="Ordenar por precio"
                value={orden}
                onChange={(e) => setOrden(e.target.value)}
              >
                <option value="asc">Menor precio</option>
                <option value="desc">Mayor precio</option>
              </select>
            </div>

            {visibles.length === 0 ? (
              <div className="alert alert-light border">No hay vehículos que coincidan con los filtros.</div>
            ) : (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-3">
                {visibles.map((producto) => (
                  <div className="col" key={producto.id}>
                    <CarCard producto={producto} mostrarEstado />
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
