import { validateEmail } from '../src/utils/validators.js';

describe('validateEmail (utils/validators)', () => {
  // PRUEBA 1
  it('acepta correos de los dominios permitidos y rechaza el resto', () => {
    expect(validateEmail('ana@duoc.cl')).toBe('');
    expect(validateEmail('profe@profesor.duoc.cl')).toBe('');
    expect(validateEmail('  Carolina@Gmail.com ')).toBe('');
    expect(validateEmail('ana@hotmail.com')).toBe('Utiliza un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.');
    expect(validateEmail('sin-arroba.gmail.com')).toBe('El correo no tiene un formato válido.');
  });
});
