export const DOMINIOS_PERMITIDOS = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
export const MAX_NOMBRE = 100;
export const MAX_CORREO = 100;
export const MAX_COMENTARIO = 500;
export const MIN_PASSWORD = 8;

const FORMATO_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateName(nombre = '') {
  const valor = nombre.trim();
  if (valor === '') return 'El nombre es obligatorio.';
  if (valor.length > MAX_NOMBRE) return `El nombre no puede superar los ${MAX_NOMBRE} caracteres.`;
  return '';
}

export function validateEmail(correo = '') {
  const valor = correo.trim().toLowerCase();
  if (valor === '') return 'El correo es obligatorio.';
  if (valor.length > MAX_CORREO) return `El correo no puede superar los ${MAX_CORREO} caracteres.`;
  if (!FORMATO_EMAIL.test(valor)) return 'El correo no tiene un formato válido.';
  if (!DOMINIOS_PERMITIDOS.some((dominio) => valor.endsWith(dominio))) {
    return 'Utiliza un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.';
  }
  return '';
}

export function validatePassword(password = '') {
  if (password === '') return 'La contraseña es obligatoria.';
  if (password.length < MIN_PASSWORD) return `La contraseña debe tener al menos ${MIN_PASSWORD} caracteres.`;
  if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) return 'La contraseña debe incluir letras y números.';
  return '';
}

export function validateComment(comentario = '') {
  const valor = comentario.trim();
  if (valor === '') return 'El comentario es obligatorio.';
  if (valor.length > MAX_COMENTARIO) return `El comentario no puede superar los ${MAX_COMENTARIO} caracteres.`;
  return '';
}

export function validateLogin({ correo, password }) {
  return {
    correo: validateEmail(correo),
    password: password ? '' : 'La contraseña es obligatoria.',
  };
}

export function validateSignup({ nombre, correo, password, confirmar }) {
  return {
    nombre: validateName(nombre),
    correo: validateEmail(correo),
    password: validatePassword(password),
    confirmar: password !== confirmar ? 'Las contraseñas no coinciden.' : '',
  };
}

export function validateContact({ nombre, correo, comentario }) {
  return {
    nombre: validateName(nombre),
    correo: validateEmail(correo),
    comentario: validateComment(comentario),
  };
}

export const hasErrors = (errores) => Object.values(errores).some(Boolean);
