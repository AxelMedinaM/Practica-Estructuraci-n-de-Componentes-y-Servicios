export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#1e293b',
      color: '#ffffff',
      padding: '16px 24px',
      borderRadius: '12px',
      marginBottom: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      flexWrap: 'wrap',
      gap: '8px'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
        Dashboard de Ciencia de Datos
      </h1>
      <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8' }}>
        Alumno: <strong style={{ color: '#f8fafc' }}>Axel Medina Maldonado</strong>
      </p>
    </nav>
  );
}
