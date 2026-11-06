export const TarjetaMetrica = ({ titulo, valor, color = '#2563eb', subtitulo }) => {
  return (
    <div style={{
      flex: '1 1 200px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '20px',
      margin: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '180px'
    }}>
      <h3 style={{ margin: '0 0 8px 0', fontSize: '0.875rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {titulo}
      </h3>
      <p style={{ fontSize: '2rem', fontWeight: '700', margin: 0, color: color }}>
        {valor}
      </p>
      {subtitulo && (
        <span style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '6px' }}>
          {subtitulo}
        </span>
      )}
    </div>
  );
};
