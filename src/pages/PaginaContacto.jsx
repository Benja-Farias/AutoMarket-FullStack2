import ContactForm from '../components/ContactForm.jsx';

export default function ContactPage() {
  return (
    <>
      <div className="container my-5">
        <div className="card shadow-sm border-0 form-card mx-auto">
          <div className="card-body p-4">
            <h1 className="h3 fw-bold">Contacto</h1>
            <p className="text-muted">Envíanos tu consulta.</p>
            <ContactForm onSubmit={(datos) => console.log('Formulario de contacto enviado', datos)} />
          </div>
        </div>
      </div>
    </>
  );
}
