import { useState } from 'react';
import FormField from './FormularioField.jsx';
import { validateContact, hasErrors } from '../utils/validators.js';

const VACIO = { nombre: '', correo: '', comentario: '' };

export default function ContactForm({ onSubmit = () => {} }) {
  const [valores, setValores] = useState(VACIO);
  const [errores, setErrores] = useState({});
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValores((anterior) => ({ ...anterior, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = validateContact(valores);
    setErrores(nuevosErrores);
    setMensaje('');
    if (hasErrors(nuevosErrores)) return;

    onSubmit(valores);
    setMensaje(`Gracias ${valores.nombre.trim()}, tu mensaje fue enviado.`);
    setValores(VACIO);
  };

  return (
    <form id="formularioContacto" onSubmit={handleSubmit} noValidate>
      <FormField id="nombre" label="Nombre" placeholder="Ej: Carolina" value={valores.nombre} onChange={handleChange} error={errores.nombre} />
      <FormField id="correo" label="Correo" type="email" placeholder="Ej: correo@gmail.com" value={valores.correo} onChange={handleChange} error={errores.correo} />
      <FormField id="comentario" as="textarea" rows={5} label="Comentario" placeholder="Escribe tu mensaje" value={valores.comentario} onChange={handleChange} error={errores.comentario} />
      <button type="submit" className="btn btn-primary">Enviar mensaje</button>
      {mensaje && (
        <div id="mensajeFinal" className="alert alert-success mt-3 mb-0" role="alert">
          {mensaje}
        </div>
      )}
    </form>
  );
}
