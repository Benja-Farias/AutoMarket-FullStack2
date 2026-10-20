export const USERS_KEY = 'automarket_usuarios';
export const SESSION_KEY = 'automarket_sesion';

function leerUsuarios() {
  const datos = localStorage.getItem(USERS_KEY);
  return datos ? JSON.parse(datos) : [];
}

export function registerUser({ nombre, correo, password }) {
  const usuarios = leerUsuarios();
  const emailNormalizado = correo.trim().toLowerCase();

  const existe = usuarios.some((u) => u.correo === emailNormalizado);
  if (existe) {
    return { ok: false, error: 'Ya existe una cuenta con ese correo.' };
  }

  usuarios.push({ 
    nombre: nombre.trim(), 
    correo: emailNormalizado, 
    password: password 
  });
  
  localStorage.setItem(USERS_KEY, JSON.stringify(usuarios));

  return { ok: true };
}

export function loginUser(correo, password) {
  const usuarios = leerUsuarios();
  const emailNormalizado = correo.trim().toLowerCase();

  const usuario = usuarios.find(
    (u) => u.correo === emailNormalizado && u.password === password
  );

  if (!usuario) {
    return { ok: false, error: 'Correo o contraseña incorrectos.' };
  }

  const sesion = { nombre: usuario.nombre, correo: usuario.correo };
  localStorage.setItem(SESSION_KEY, JSON.stringify(sesion));
  
  return { ok: true, user: sesion };
}

export function getSession() {
  const datos = localStorage.getItem(SESSION_KEY);
  return datos ? JSON.parse(datos) : null;
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}