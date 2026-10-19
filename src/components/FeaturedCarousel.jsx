import CarCard from './CarCard.jsx';
import { chunk } from '../utils/filters.js';

export default function FeaturedCarousel({ productos, porSlide = 3, onVerDetalle }) {
  const slides = chunk(productos, porSlide);
  const idCarrusel = 'carruselCards';

  return (
    <div id={idCarrusel} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target={`#${idCarrusel}`}
            data-bs-slide-to={i}
            className={i === 0 ? 'active' : ''}
            aria-current={i === 0 ? 'true' : undefined}
            aria-label={`Diapositiva ${i + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner p-2 pb-5">
        {slides.map((grupo, i) => (
          <div className={`carousel-item${i === 0 ? ' active' : ''}`} key={i}>
            <div className="row g-4">
              {grupo.map((producto) => (
                <div className="col-12 col-md-4" key={producto.id}>
                  <CarCard producto={producto} onVerDetalle={onVerDetalle} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev carrusel-control" type="button" data-bs-target={`#${idCarrusel}`} data-bs-slide="prev">
        <span className="btn btn-dark rounded-circle p-2 shadow d-flex align-items-center justify-content-center carrusel-boton">
          <span className="carousel-control-prev-icon carrusel-icono" aria-hidden="true"></span>
        </span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next carrusel-control" type="button" data-bs-target={`#${idCarrusel}`} data-bs-slide="next">
        <span className="btn btn-dark rounded-circle p-2 shadow d-flex align-items-center justify-content-center carrusel-boton">
          <span className="carousel-control-next-icon carrusel-icono" aria-hidden="true"></span>
        </span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}
