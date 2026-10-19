export const USERS_KEY = 'automarket_usuarios';
export const SESSION_KEY = 'automarket_sesion';

const normalizar = (correo) => correo.trim().toLowerCase();

function leerUsuarios(storage) {
  try {
    const crudo = storage.getItem(USERS_KEY);
    return crudo ? JSON.parse(crudo) : [];
  } catch {
    return [];
  }
}

export function registerUser({ nombre, correo, password }, storage = globalThis.localStorage) {
  const usuarios = leerUsuarios(storage);
  const email = normalizar(correo);
  if (usuarios.some((u) => u.correo === email)) {
    return { ok: false, error: 'Ya existe una cuenta con ese correo.' };
  }
  usuarios.push({ nombre: nombre.trim(), correo: email, password });
  storage.setItem(USERS_KEY, JSON.stringify(usuarios));
  return { ok: true };
}

export function loginUser(correo, password, storage = globalThis.localStorage) {
  const usuario = leerUsuarios(storage).find(
    (u) => u.correo === normalizar(correo) && u.password === password,
  );
  if (!usuario) return { ok: false, error: 'Correo o contraseña incorrectos.' };
  const sesion = { nombre: usuario.nombre, correo: usuario.correo };
  storage.setItem(SESSION_KEY, JSON.stringify(sesion));
  return { ok: true, user: sesion };
}

export function getSession(storage) {
  try {
    const crudo = (storage ?? globalThis.localStorage).getItem(SESSION_KEY);
    return crudo ? JSON.parse(crudo) : null;
  } catch {
    return null;
  }
}

export function logout(storage) {
  try {
    (storage ?? globalThis.localStorage).removeItem(SESSION_KEY);
  } catch {
  }
}
