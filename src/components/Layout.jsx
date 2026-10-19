import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { useSession } from '../hooks/useSession.js';

export default function Layout({ children }) {
  const { usuario, cerrarSesion } = useSession();
  return (
    <>
      <Navbar usuario={usuario} onLogout={cerrarSesion} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
