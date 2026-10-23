import { Link } from 'react-router-dom';

export default function Footer({ anio = new Date().getFullYear() }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>AutoMarket</h3>
          <p>Tu mejor opción para comprar y vender vehículos de calidad en Chile.</p>
        </div>

        <div className="footer-column">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalogo">Catálogo</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/login">Ingresar</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contacto</h4>
          <p>Email: contacto@automotora.cl</p>
          <p>Teléfono: +56 9 1234 5678</p>
          <p>Ubicación: Santiago, Chile</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {anio} AutoMarket</p>
      </div>
    </footer>
  );
}
