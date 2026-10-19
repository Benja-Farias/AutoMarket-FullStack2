import { MemoryRouter } from 'react-router-dom';
import LoginForm from '../src/components/LoginForm.jsx';
import { renderInDom, typeInto, submitForm } from './helpers.js';

describe('<LoginForm />', () => {
  let vista;
  afterEach(() => vista && vista.cleanup());

  // PRUEBA 3
  it('muestra los errores y no llama a onLogin cuando el formulario está vacío', () => {
    const onLogin = jasmine.createSpy('onLogin'); // mock de la función de login
    vista = renderInDom(<MemoryRouter><LoginForm onLogin={onLogin} /></MemoryRouter>);

    submitForm(vista.container.querySelector('form'));

    expect(vista.container.querySelector('#correoError').textContent).toBe('El correo es obligatorio.');
    expect(vista.container.querySelector('#passwordError').textContent).toBe('La contraseña es obligatoria.');
    expect(onLogin).not.toHaveBeenCalled();
  });

  // PRUEBA 4
  it('con datos válidos llama a onLogin, muestra la bienvenida y ejecuta onSuccess', () => {
    const usuario = { nombre: 'Carolina', correo: 'caro@gmail.com' };
    const onLogin = jasmine.createSpy('onLogin').and.returnValue({ ok: true, user: usuario });
    const onSuccess = jasmine.createSpy('onSuccess');
    vista = renderInDom(<MemoryRouter><LoginForm onLogin={onLogin} onSuccess={onSuccess} /></MemoryRouter>);

    typeInto(vista.container.querySelector('#correo'), 'caro@gmail.com');
    typeInto(vista.container.querySelector('#password'), 'clave1234');
    submitForm(vista.container.querySelector('form'));

    expect(onLogin).toHaveBeenCalledWith({ correo: 'caro@gmail.com', password: 'clave1234' });
    expect(vista.container.querySelector('#mensajeFinal').textContent).toBe('¡Bienvenido, Carolina!');
    expect(onSuccess).toHaveBeenCalledWith(usuario);
  });
});
