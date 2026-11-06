export const TablaDatos = ({ dataset }) => {
  if (!dataset || dataset.length === 0) {
    return (
      <div style={{
        padding: '24px',
        textAlign: 'center',
        backgroundColor: '#f8fafc',
        borderRadius: '8px',
        border: '1px dashed #cbd5e1',
        color: '#64748b'
      }}>
        <p style={{ margin: 0 }}>No hay datos disponibles para mostrar.</p>
      </div>
    );
  }

  return (
    <div style={{
      marginTop: '16px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      border: '1px solid #e2e8f0',
      overflow: 'hidden'
    }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              <th style={{ padding: '12px 16px', color: '#475569', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase' }}>ID</th>
              <th style={{ padding: '12px 16px', color: '#475569', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase' }}>Etiqueta</th>
              <th style={{ padding: '12px 16px', color: '#475569', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase' }}>Valor Numérico</th>
              <th style={{ padding: '12px 16px', color: '#475569', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase' }}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderiza filas dinámicamente utilizando el método .map() */}
            {dataset.map((fila) => {
              const esActivo = fila.estado === 'Activo';
              return (
                <tr key={fila.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '12px 16px', color: '#64748b', fontWeight: '500' }}>#{fila.id}</td>
                  <td style={{ padding: '12px 16px', color: '#1e293b', fontWeight: '600' }}>{fila.etiqueta}</td>
                  <td style={{ padding: '12px 16px', color: '#0f172a', fontFamily: 'monospace', fontSize: '0.95rem' }}>
                    {fila.valor}
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      backgroundColor: esActivo ? '#dcfce7' : '#fee2e2',
                      color: esActivo ? '#15803d' : '#b91c1c'
                    }}>
                      {fila.estado}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
