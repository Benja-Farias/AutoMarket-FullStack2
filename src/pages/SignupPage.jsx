import { useNavigate } from 'react-router-dom';
import SignupForm from '../components/SignupForm.jsx';
import { registerUser } from '../utils/auth.js';

export default function SignupPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container my-5">
        <div className="card shadow-sm border-0 form-card mx-auto">
          <div className="card-body p-4">
            <h1 className="h3 fw-bold mb-4">Crear cuenta</h1>
            <SignupForm
              onRegister={registerUser}
              onSuccess={() => setTimeout(() => navigate('/login'), 1200)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
