import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './pages/PaginaInicio.jsx';
import CatalogPage from './pages/PaginaCatalogo.jsx';
import ContactPage from './pages/PaginaContacto.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/PaginaRegistro.jsx';

function NotFound() {
  return (
    <div className="container my-5 text-center">
      <h2>404 — Página no encontrada</h2>
      <Link to="/" className="btn btn-primary mt-3">Volver al inicio</Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<SignupPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
