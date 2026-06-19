import React, { useState } from 'react';
import { PDF_EXTRACTOR_WEBHOOK_URL } from '../data/config';
import './InvoiceDemo.css';

const fmt = (v, c = 'ARS') => new Intl.NumberFormat('es-AR', { style: 'currency', currency: c, minimumFractionDigits: 2 }).format(v || 0);

const InvoiceDemo = () => {
  const [file, setFile] = useState(null);

  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type !== 'application/pdf') { setErrorMsg('Solo se aceptan archivos PDF.'); setFile(null); e.target.value = ''; return; }
    setFile(selected || null);
    setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    setStatus('loading'); setErrorMsg(''); setResult(null);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await fetch(PDF_EXTRACTOR_WEBHOOK_URL, { method: 'POST', body: formData });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || `Error del servidor: ${response.status}`);
      // Normalize n8n response wrappers (array, response, data keys)
      let normalized = data;
      if (Array.isArray(normalized)) normalized = normalized[0] || normalized;
      if (normalized.response && typeof normalized.response === 'object') normalized = normalized.response;
      if (normalized.data && typeof normalized.data === 'object') normalized = normalized.data;

      setResult(normalized);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'No se pudo conectar con el servidor de n8n.');
    }
  };

  const handleReset = () => { setStatus('idle'); setFile(null); setErrorMsg(''); setResult(null); };

  const inv = result?.invoice;
  const nm = {}, im = {};
  (inv?.netosPorAlicuota || []).forEach(n => nm[n.alicuota] = n.monto);
  (inv?.ivaPorAlicuota || []).forEach(i => im[i.alicuota] = i.monto);
  const alicuotas = [...new Set([...Object.keys(nm), ...Object.keys(im)].map(Number))].sort((a, b) => b - a);
  const showIva = inv?.netosPorAlicuota?.length > 0 || inv?.ivaPorAlicuota?.length > 0;
  const gridFields = [
    ['CUIT Emisor', inv?.cuitEmisor],
    ['Razón Social', inv?.razonSocial],
    ['Tipo Comprobante', inv?.tipoComprobante],
    ['Pto. Vta. / Número', inv?.puntoVenta != null ? `${String(inv.puntoVenta).padStart(4, '0')}-${String(inv.numero).padStart(8, '0')}` : '—'],
    ['CAE', inv?.cae],
    ['Vto. CAE', inv?.fechaVencimientoCAE],
    ['Fecha de Emisión', inv?.fechaEmision],
  ];

  return (
    <section className="invoice-section">
      <div className="invoice-container">
        <h2 className="section-title">Extraé Datos de una Factura PDF</h2>
        <div className="invoice-content">
          <div className="invoice-info">
            <p className="invoice-description">
              Este subworkflow de <strong>n8n</strong> recibe un PDF de factura argentina,
              extrae el texto con <strong>OCR + IA</strong> y devuelve sus datos
              estructurados en <strong>JSON canónico</strong>. Subí un PDF de prueba
              para ver el sistema en acción.
            </p>
            <ul className="invoice-steps">
              <li>📄 Subís un PDF de factura electrónica argentina</li>
              <li>⚡ n8n recibe el archivo vía webhook y lo valida</li>
              <li>🔍 Extrae el texto (nativo u OCR con OCR.space)</li>
              <li>🤖 Gemini/OpenAI parsea los campos de la factura</li>
              <li>📋 Recibís el JSON estructurado al instante</li>
            </ul>
          </div>
          <div className="invoice-card">
            {status === 'success' && result ? (
              <div className="invoice-success">
                <div className="invoice-success-header">
                  <div className="invoice-success-status">
                    <span className="invoice-success-icon">✅</span>
                    <div>
                      <h3>Factura procesada exitosamente</h3>
                      <p className="invoice-success-meta">
                        Método: {result.extractionMethod === 'ocr' ? 'OCR' : 'Texto nativo'} · Confianza: {Math.round((result.confidence || 0) * 100)}%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="invoice-data">
                  <div className="invoice-data-section">
                    <h4 className="invoice-data-title">Encabezado</h4>
                    <div className="invoice-grid">
                      {gridFields.map(([label, value]) => (
                        <div className="invoice-grid-item" key={label}>
                          <span className="invoice-label">{label}</span>
                          <span className="invoice-value">{value || '—'}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {showIva && (
                    <div className="invoice-data-section">
                      <h4 className="invoice-data-title">Detalle de IVA</h4>
                      <table className="invoice-table">
                        <thead>
                          <tr>
                            <th>Alícuota</th>
                            <th className="invoice-text-right">Neto</th>
                            <th className="invoice-text-right">IVA</th>
                            <th className="invoice-text-right">Subtotal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {alicuotas.map(al => {
                            const neto = nm[al] || 0, iva = im[al] || 0;
                            return <tr key={al}>
                              <td>{al}%</td>
                              <td className="invoice-text-right">{fmt(neto)}</td>
                              <td className="invoice-text-right">{fmt(iva)}</td>
                              <td className="invoice-text-right">{fmt(neto + iva)}</td>
                            </tr>;
                          })}
                        </tbody>
                        <tfoot>
                          <tr>
                            <th>Totales</th>
                            <th className="invoice-text-right">{fmt(inv?.netosPorAlicuota?.reduce((s, n) => s + n.monto, 0))}</th>
                            <th className="invoice-text-right">{fmt(inv?.ivaPorAlicuota?.reduce((s, i) => s + i.monto, 0))}</th>
                            <th className="invoice-text-right">{fmt(inv?.total)}</th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  )}
                  {inv?.percepciones?.length > 0 && (
                    <div className="invoice-data-section">
                      <h4 className="invoice-data-title">Percepciones</h4>
                      <table className="invoice-table">
                        <thead>
                          <tr><th>Tipo</th><th className="invoice-text-right">Monto</th></tr>
                        </thead>
                        <tbody>
                          {inv.percepciones.map((p, i) => (
                            <tr key={i}><td>{p.tipo || '—'}</td><td className="invoice-text-right">{fmt(p.monto || 0)}</td></tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  <div className="invoice-data-section">
                    <div className="invoice-totals-box">
                      <div className="invoice-totals-row"><span>Exento:</span><span>{fmt(inv?.exento)}</span></div>
                      {inv?.noGravado > 0 && <div className="invoice-totals-row"><span>No Gravado:</span><span>{fmt(inv.noGravado)}</span></div>}
                      <div className="invoice-totals-divider" />
                      <div className="invoice-totals-row invoice-totals-grand">
                        <span>TOTAL {(inv?.moneda || 'ARS')}:</span>
                        <span>{fmt(inv?.total, inv?.moneda)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={handleReset} className="btn-secondary invoice-reset-btn">Probar otra factura</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="invoice-form">
                <div className="invoice-field">
                  <label htmlFor="invoice-file">PDF de factura <span className="invoice-required">*</span></label>
                  <div className="invoice-file-wrapper">
                    <input
                      id="invoice-file"
                      type="file"
                      accept=".pdf,application/pdf"
                      onChange={handleFileChange}
                      required
                      disabled={status === 'loading'}
                      className="invoice-file-input"
                    />
                    <button
                      type="button"
                      className="invoice-file-button"
                      disabled={status === 'loading'}
                      onClick={() => document.getElementById('invoice-file')?.click()}
                    >
                      Seleccionar archivo
                    </button>
                    <span className="invoice-file-name">
                      {file ? file.name : 'Ningún archivo seleccionado'}
                    </span>
                  </div>
                </div>
                <div className="invoice-prefill-note">
                  <span className="invoice-prefill-icon">ℹ️</span>
                  <span>El PDF debe ser una factura electrónica argentina. El sistema devolverá los datos estructurados en JSON.</span>
                </div>
                {status === 'error' && <div className="invoice-error"><span>❌</span><span>{errorMsg}</span></div>}
                <button type="submit" className="btn-primary invoice-submit" disabled={status === 'loading' || !file}>
                  {status === 'loading' ? <span className="invoice-loading"><span className="invoice-spinner" /> Procesando PDF...</span> : 'Extraer Datos'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoiceDemo;
