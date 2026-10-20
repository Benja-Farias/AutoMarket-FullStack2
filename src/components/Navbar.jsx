import { Link, NavLink } from 'react-router-dom';

export const ENLACES = [
  { id: 'catalogo', texto: 'Comprar un auto', to: '/catalogo' },
  { id: 'contacto', texto: 'Contáctanos', to: '/contacto' },
];

const claseLink = ({ isActive }) => `nav-link text-dark fw-medium px-2${isActive ? ' active fw-bold' : ''}`;

export default function Navbar({ usuario = null, onLogout = () => {} }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-3">
      <div className="container-fluid px-4 px-lg-5">
        <Link className="navbar-brand fw-bold fs-3 text-dark me-4" to="/">
          AutoMarket
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarAutomotora"
          aria-controls="navbarAutomotora"
          aria-expanded="false"
          aria-label="Mostrar menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarAutomotora">
          <ul className="navbar-nav ms-auto align-items-center gap-lg-3">
            <li className="nav-item">
              <NavLink className={claseLink} to={ENLACES[0].to}>{ENLACES[0].texto}</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-medium px-2" href="#">Vende tu auto</a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark fw-medium px-2"
                href="#"
                id="nosotrosDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Nosotros
              </a>
              <ul className="dropdown-menu border-0 shadow-sm" aria-labelledby="nosotrosDropdown">
                <li><a className="dropdown-item" href="#">Sobre nosotros</a></li>
                <li><a className="dropdown-item" href="#">Preguntas frecuentes</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className={claseLink} to={ENLACES[1].to}>{ENLACES[1].texto}</NavLink>
            </li>

            <li className="nav-item ms-lg-2">
              <span className="nav-link px-2 d-flex align-items-center">
                <img src="https://flagcdn.com/w20/cl.png" width="20" alt="Chile" className="rounded-1 shadow-sm" />
              </span>
            </li>

            {usuario ? (
              <li className="nav-item ms-lg-2 d-flex align-items-center gap-2">
                <span className="fw-medium">Hola, {usuario.nombre}</span>
                <button type="button" className="btn btn-outline-secondary btn-sm rounded-pill" onClick={onLogout}>
                  Salir
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item ms-lg-2">
                  <NavLink className={claseLink} to="/login">Ingresar</NavLink>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-primary rounded-pill px-3 py-1 fw-medium d-inline-flex align-items-center gap-2" to="/signup">
                    <i className="bi bi-person fs-5"></i>
                    <span>Regístrate</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
