import { useState } from 'react';
import { getSession, logout } from '../utils/auth.js';

export function useSession() {
  const [usuario, setUsuario] = useState(() => getSession());

  const cerrarSesion = () => {
    logout();
    setUsuario(null);
  };

  return { usuario, cerrarSesion };
}
