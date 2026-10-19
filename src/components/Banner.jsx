import { Link } from 'react-router-dom';

export default function Banner({
  titulo = 'Automotora',
  subtitulo = 'Compra y vende autos fácil y seguro.',
  textoBoton = 'Comprar Ahora',
  rutaBoton = '/catalogo',
}) {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
        <Link to={rutaBoton} className="btn-banner">
          {textoBoton}
        </Link>
      </div>
    </div>
  );
}
