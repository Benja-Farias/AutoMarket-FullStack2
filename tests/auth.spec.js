import { registerUser, loginUser, SESSION_KEY } from '../src/utils/auth.js';
import { createFakeStorage } from './helpers.js';

describe('auth (inicio de sesión con storage simulado)', () => {
  const usuario = { nombre: 'Carolina', correo: 'Caro@Gmail.com', password: 'clave1234' };

  // PRUEBA 2
  it('loginUser inicia sesión con credenciales correctas y falla con las incorrectas', () => {
    const storage = createFakeStorage();
    registerUser(usuario, storage);

    const bueno = loginUser('caro@gmail.com', 'clave1234', storage);
    expect(bueno.ok).toBeTrue();
    expect(bueno.user).toEqual({ nombre: 'Carolina', correo: 'caro@gmail.com' });
    expect(storage.setItem).toHaveBeenCalledWith(SESSION_KEY, JSON.stringify(bueno.user));

    expect(loginUser('caro@gmail.com', 'incorrecta1', storage).ok).toBeFalse();
    expect(loginUser('nadie@gmail.com', 'clave1234', storage).error).toBe('Correo o contraseña incorrectos.');
  });
});
