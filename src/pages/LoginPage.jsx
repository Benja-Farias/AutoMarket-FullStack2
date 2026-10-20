import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm.jsx';
import { loginUser } from '../utils/auth.js';

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container my-5">
        <div className="card shadow-sm border-0 form-card mx-auto">
          <div className="card-body p-4">
            <h1 className="h3 fw-bold mb-4">Iniciar sesión</h1>
            <LoginForm
              onLogin={({ correo, password }) => loginUser(correo, password)}
              onSuccess={() => setTimeout(() => window.location.href = '/', 800)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
