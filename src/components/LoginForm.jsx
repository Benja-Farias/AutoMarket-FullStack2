import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from './FormField.jsx';
import { validateLogin, hasErrors } from '../utils/validators.js';

export default function LoginForm({ onLogin, onSuccess = () => {} }) {
  const [valores, setValores] = useState({ correo: '', password: '' });
  const [errores, setErrores] = useState({});
  const [mensaje, setMensaje] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValores((anterior) => ({ ...anterior, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = validateLogin(valores);
    setErrores(nuevosErrores);
    setMensaje(null);
    if (hasErrors(nuevosErrores)) return;

    const resultado = onLogin(valores);
    if (!resultado.ok) {
      setMensaje({ tipo: 'danger', texto: resultado.error });
      return;
    }
    setMensaje({ tipo: 'success', texto: `¡Bienvenido, ${resultado.user.nombre}!` });
    onSuccess(resultado.user);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FormField id="correo" label="Correo" type="email" placeholder="correo@gmail.com" value={valores.correo} onChange={handleChange} error={errores.correo} />
      <FormField id="password" label="Contraseña" type="password" placeholder="Tu contraseña" value={valores.password} onChange={handleChange} error={errores.password} />
      <button type="submit" className="btn btn-primary w-100">Ingresar</button>
      {mensaje && (
        <div id="mensajeFinal" className={`alert alert-${mensaje.tipo} mt-3 mb-0`} role="alert">
          {mensaje.texto}
        </div>
      )}
      <p className="text-center small mt-3 mb-0">
        ¿No tienes cuenta? <Link to="/signup">Regístrate</Link>
      </p>
    </form>
  );
}
