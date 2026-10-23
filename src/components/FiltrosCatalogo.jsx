import { FILTROS_INICIALES } from '../utils/filters.js';

export default function CatalogFilters({ filtros, marcas, onChange }) {
  const actualizar = (campo, valor) => onChange({ ...filtros, [campo]: valor });

  return (
    <div className="card shadow-sm border-0 sticky-top filtros-sticky">
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3">Filtros</h5>

        <div className="mb-3">
          <label htmlFor="filtroTexto" className="form-label small fw-semibold">Buscar</label>
          <input
            id="filtroTexto"
            type="text"
            className="form-control form-control-sm"
            placeholder="Marca, modelo..."
            value={filtros.texto}
            onChange={(e) => actualizar('texto', e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="filtroMarca" className="form-label small fw-semibold">Marca</label>
          <select
            id="filtroMarca"
            className="form-select form-select-sm"
            value={filtros.marca}
            onChange={(e) => actualizar('marca', e.target.value)}
          >
            <option value="Todas">Todas</option>
            {marcas.map((marca) => (
              <option key={marca} value={marca}>{marca}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <span className="form-label small fw-semibold d-block">Estado</span>
          {['Todos', 'Nuevo', 'Usado'].map((estado) => (
            <div className="form-check" key={estado}>
              <input
                className="form-check-input"
                type="radio"
                name="estado"
                id={`estado${estado}`}
                checked={filtros.estado === estado}
                onChange={() => actualizar('estado', estado)}
              />
              <label className="form-check-label small" htmlFor={`estado${estado}`}>{estado}</label>
            </div>
          ))}
        </div>

        <button type="button" className="btn btn-outline-secondary btn-sm w-100" onClick={() => onChange(FILTROS_INICIALES)}>
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}
