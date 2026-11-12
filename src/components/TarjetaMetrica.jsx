import React from 'react';

export const TarjetaMetrica = ({ titulo, valor, color, subtitulo }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.05)', /* Difuminado transparente */
      borderRadius: '12px',
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(255, 255, 255, 0.05)', /* Borde muy sutil */
      height: '100%',
      boxSizing: 'border-box'
    }}>
      <h4 style={{ 
        margin: '0 0 12px 0', 
        fontSize: '0.85rem', 
        color: '#8f9bb3', /* Gris claro azulado para el título */
        textTransform: 'uppercase', 
        letterSpacing: '1px',
        textAlign: 'center'
      }}>
        {titulo}
      </h4>
      
      <span style={{ 
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        color: color /* Aquí toma el color que le pasamos desde App.jsx */
      }}>
        {valor}
      </span>
      
      {subtitulo && (
        <p style={{ margin: '12px 0 0 0', fontSize: '0.8rem', color: '#64748b', textAlign: 'center' }}>
          {subtitulo}
        </p>
      )}
    </div>
  );
};