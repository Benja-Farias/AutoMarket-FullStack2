import { formatPrice } from '../utils/format.js';

export default function CarCard({ producto, mostrarEstado = false, onVerDetalle = () => {} }) {
  const { nombre, detalle, precio, estado, imagen } = producto;
  const claseInsignia = estado === 'Nuevo' ? 'bg-primary-subtle text-primary' : 'bg-secondary-subtle text-secondary';

  return (
    <div className="card h-100 shadow-sm border-0">
      <img src={imagen} className="card-img-top" alt={nombre} />
      <div className="card-body d-flex flex-column">
        {mostrarEstado && <span className={`badge ${claseInsignia} mb-2 w-auto align-self-start`}>{estado}</span>}
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text text-muted small">{detalle}</p>
        <h6 className="text-primary fw-bold fs-5 mt-auto">{formatPrice(precio)}</h6>
        <button type="button" className="btn btn-outline-primary w-100 mt-2" onClick={() => onVerDetalle(producto)}>
          Ver detalles
        </button>
      </div>
    </div>
  );
}
