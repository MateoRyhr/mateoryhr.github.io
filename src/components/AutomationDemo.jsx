// src/components/AutomationDemo.jsx
import React, { useState } from 'react';
import { N8N_WEBHOOK_URL } from '../data/config';
import './AutomationDemo.css';

const AutomationDemo = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const generateSubmissionId = (email) => {
    const bucket = Math.floor(Date.now() / 600000); // 10-min bucket
    const emailSlug = email.replace(/[@.]/g, '');
    return `gfs_demo_${emailSlug}_1000_${bucket}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setStatus('loading');
    setErrorMsg('');

    const payload = {
      submission_id: generateSubmissionId(email),
      form_response_id: `demo-form-${Date.now()}`,
      trigger_id: 'demo-trigger-web',
      submitted_at: new Date().toISOString(),
      namedValues: {
        "Razón Social": ["Empresa Demo SRL"],
        "CUIT": ["30-12345678-1"],
        "Email": [email.trim()],
        "Importe": ["1000"],
        "Alícuota IVA": ["21"],
        "Condición de Venta": ["Contado"]
      }
    };

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Error del servidor: ${response.status}`);
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'No se pudo conectar con el servidor de automatización.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setEmail('');
    setErrorMsg('');
  };

  return (
    <section className="demo-section">
      <div className="demo-container">
        <h2 className="section-title">Probá la Automatización</h2>

        <div className="demo-content">
          <div className="demo-info">
            <p className="demo-description">
              Este workflow de <strong>n8n</strong> automatiza la emisión de facturas electrónicas 
              con <strong>ARCA</strong>. Completá el formulario con tu email y recibí 
              una <strong>factura ficticia de demostración</strong> para ver el sistema en acción.
            </p>
            <ul className="demo-steps">
              <li>📝 Completás el formulario con tu email</li>
              <li>⚡ n8n recibe los datos vía webhook</li>
              <li>📄 El workflow genera una factura demo</li>
              <li>📬 Te llega el comprobante por email</li>
              <li>💾 La operación queda registrada en Drive, Sheets y PostgreSQL</li>
            </ul>
          </div>

          <div className="demo-card">
            {status === 'success' ? (
              <div className="demo-success">
                <div className="demo-success-icon">✅</div>
                <h3>¡Factura enviada!</h3>
                <p>
                  La automatización se ejecutó correctamente. Revisá tu casilla de email 
                  <strong> {email}</strong> — deberías recibir la factura demo en unos momentos.
                </p>
                <p className="demo-success-note">
                  El comprobante ya fue registrado en Google Drive y PostgreSQL.
                </p>
                <button onClick={handleReset} className="btn-secondary">
                  Probar de nuevo
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="demo-form">
                <div className="demo-field">
                  <label htmlFor="demo-email">
                    Tu email <span className="demo-required">*</span>
                  </label>
                  <input
                    id="demo-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ej: nombre@empresa.com"
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="demo-prefill-note">
                  <span className="demo-prefill-icon">ℹ️</span>
                  <span>
                    Los demás datos se completarán con valores de demostración:
                    Razón Social "Empresa Demo SRL", CUIT "30-12345678-1", 
                    Importe $1000, IVA 21%, Contado.
                  </span>
                </div>

                {status === 'error' && (
                  <div className="demo-error">
                    <span>❌</span>
                    <span>{errorMsg} — Verificá que el webhook de n8n esté activo.</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary demo-submit"
                  disabled={status === 'loading' || !email.trim()}
                >
                  {status === 'loading' ? (
                    <span className="demo-loading">
                      <span className="demo-spinner" />
                      Enviando...
                    </span>
                  ) : (
                    'Enviar Demo'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationDemo;
