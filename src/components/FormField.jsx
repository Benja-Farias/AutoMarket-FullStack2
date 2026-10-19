export default function FormField({
  id,
  label,
  value,
  onChange,
  error = '',
  type = 'text',
  placeholder = '',
  as = 'input',
  rows = 5,
}) {
  const clases = `form-control${error ? ' is-invalid' : ''}`;
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fw-semibold">
        {label}
      </label>
      {as === 'textarea' ? (
        <textarea id={id} name={id} rows={rows} className={clases} value={value} onChange={onChange} placeholder={placeholder} />
      ) : (
        <input id={id} name={id} type={type} className={clases} value={value} onChange={onChange} placeholder={placeholder} />
      )}
      {error && (
        <div id={`${id}Error`} className="invalid-feedback d-block">
          {error}
        </div>
      )}
    </div>
  );
}
