import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from './FormularioField.jsx';
import { validateSignup, hasErrors } from '../utils/validators.js';

export default function SignupForm({ onRegister, onSuccess = () => {} }) {
  const [valores, setValores] = useState({ nombre: '', correo: '', password: '', confirmar: '' });
  const [errores, setErrores] = useState({});
  const [mensaje, setMensaje] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValores((anterior) => ({ ...anterior, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = validateSignup(valores);
    setErrores(nuevosErrores);
    setMensaje(null);
    if (hasErrors(nuevosErrores)) return;

    const resultado = onRegister({ nombre: valores.nombre, correo: valores.correo, password: valores.password });
    if (!resultado.ok) {
      setMensaje({ tipo: 'danger', texto: resultado.error });
      return;
    }
    setMensaje({ tipo: 'success', texto: 'Cuenta creada correctamente. Ahora puedes iniciar sesión.' });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FormField id="nombre" label="Nombre" placeholder="Ej: Carolina" value={valores.nombre} onChange={handleChange} error={errores.nombre} />
      <FormField id="correo" label="Correo" type="email" placeholder="correo@gmail.com" value={valores.correo} onChange={handleChange} error={errores.correo} />
      <FormField id="password" label="Contraseña" type="password" placeholder="Mínimo 8 caracteres, letras y números" value={valores.password} onChange={handleChange} error={errores.password} />
      <FormField id="telefono" label="Teléfono (opcional)" type="tel" placeholder="+56 9 1234 5678" value={valores.telefono} onChange={handleChange} />
      <button type="submit" className="btn btn-primary w-100">Crear cuenta</button>
      {mensaje && (
        <div id="mensajeFinal" className={`alert alert-${mensaje.tipo} mt-3 mb-0`} role="alert">
          {mensaje.texto}
        </div>
      )}
      <p className="text-center small mt-3 mb-0">
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </form>
  );
}
