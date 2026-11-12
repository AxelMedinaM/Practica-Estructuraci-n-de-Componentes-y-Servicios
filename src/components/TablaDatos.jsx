import React from 'react';

export const TablaDatos = ({ dataset }) => {
  if (!dataset || dataset.length === 0) {
    return <p style={{ color: '#8f9bb3', textAlign: 'center', padding: '20px' }}>No hay datos disponibles para mostrar.</p>;
  }

  return (
    <table style={{
      width: '100%',
      borderCollapse: 'collapse',
      color: '#ffffff',
      fontSize: '0.9rem'
    }}>
      <thead>
        <tr style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.05)', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)' 
        }}>
          <th style={{ padding: '16px', textAlign: 'left', color: '#8f9bb3', fontWeight: '600', fontSize: '0.8rem' }}>ID</th>
          <th style={{ padding: '16px', textAlign: 'left', color: '#8f9bb3', fontWeight: '600', fontSize: '0.8rem' }}>ETIQUETA</th>
          <th style={{ padding: '16px', textAlign: 'left', color: '#8f9bb3', fontWeight: '600', fontSize: '0.8rem' }}>VALOR NUMÉRICO</th>
          <th style={{ padding: '16px', textAlign: 'left', color: '#8f9bb3', fontWeight: '600', fontSize: '0.8rem' }}>ESTADO</th>
        </tr>
      </thead>
      <tbody>
        {dataset.map((fila, index) => (
          <tr key={fila.id || index} style={{ 
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'background-color 0.2s'
          }}>
            <td style={{ padding: '16px', color: '#8f9bb3' }}>#{fila.id}</td>
            <td style={{ padding: '16px', fontWeight: '500' }}>{fila.etiqueta}</td>
            <td style={{ padding: '16px' }}>{fila.valor}</td>
            <td style={{ padding: '16px' }}>
              <span style={{
                color: fila.estado === 'Activo' ? '#10b981' : '#ef4444',
                backgroundColor: fila.estado === 'Activo' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                padding: '6px 12px',
                borderRadius: '20px',
                fontWeight: '600',
                fontSize: '0.8rem'
              }}>
                {fila.estado}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};