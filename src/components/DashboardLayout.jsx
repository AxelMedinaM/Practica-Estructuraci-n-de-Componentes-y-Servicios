import React, { useState, useEffect } from 'react';

const DashboardLayout = ({ panelFiltros, children }) => {
  // 1. Estado para detectar si es pantalla de celular
  const [esMovil, setEsMovil] = useState(window.innerWidth < 768);

  // 2. Escuchar cuando el usuario redimensiona la ventana (o rota el celular)
  useEffect(() => {
    const manejarResize = () => setEsMovil(window.innerWidth < 768);
    window.addEventListener('resize', manejarResize);
    return () => window.removeEventListener('resize', manejarResize);
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      /* Si es móvil, apila de arriba hacia abajo (column). Si es PC, de izquierda a derecha (row) */
      flexDirection: esMovil ? 'column' : 'row', 
      minHeight: '100vh', 
      backgroundColor: '#1c2035',
      fontFamily: '"Inter", system-ui, sans-serif',
      color: '#ffffff'
    }}>
      
      {/* Barra lateral / Menú superior adaptativo */}
      <aside style={{ 
        width: esMovil ? '100%' : '240px', /* 100% en móvil, 240px en PC */
        backgroundColor: '#151828',
        padding: esMovil ? '16px 20px' : '32px 24px', 
        display: 'flex', 
        flexDirection: esMovil ? 'row' : 'column', /* En móvil, el menú es horizontal */
        alignItems: 'center',
        justifyContent: esMovil ? 'space-between' : 'flex-start',
        gap: esMovil ? '16px' : '40px',
        borderRight: esMovil ? 'none' : '1px solid #2a2f4c',
        borderBottom: esMovil ? '1px solid #2a2f4c' : 'none',
        boxSizing: 'border-box',
        overflowX: esMovil ? 'auto' : 'hidden' /* Permite deslizar el menú en celular si no cabe */
      }}>
        <h1 style={{ color: '#3b82f6', fontSize: '1.2rem', margin: 0, fontWeight: '800', letterSpacing: '1.5px' }}>
          DASHBOARD
        </h1>
        <nav style={{ 
          display: 'flex', 
          flexDirection: esMovil ? 'row' : 'column', 
          gap: '20px', 
          color: '#8f9bb3', 
          fontSize: '0.95rem',
          whiteSpace: esMovil ? 'nowrap' : 'normal' /* Evita que el texto colapse en móvil */
        }}>
          {/* En móvil, podemos ocultar los textos y dejar solo los iconos para ahorrar espacio */}
          <div style={{ color: '#10b981', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.2rem' }}>⊞</span> {!esMovil && 'Dashboard'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <span>📄</span> {!esMovil && 'Contratos'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <span>✓</span> {!esMovil && 'Checklist'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <span>📊</span> {!esMovil && 'Reportes'}
          </div>
        </nav>
      </aside>

      {/* Área principal */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%', boxSizing: 'border-box' }}>
        
        <header style={{ 
          padding: esMovil ? '20px' : '24px 40px', /* Menos padding en móvil */
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <h2 style={{ margin: 0, color: '#8f9bb3', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Summary
          </h2>
          {panelFiltros}
        </header>

        <div style={{ 
          padding: esMovil ? '0 20px 20px 20px' : '0 40px 40px 40px', /* Menos padding en móvil */
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column',
          gap: '24px',
          maxWidth: '1400px',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;