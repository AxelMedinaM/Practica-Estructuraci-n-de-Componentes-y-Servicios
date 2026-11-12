import React from 'react';

const DashboardLayout = ({ panelFiltros, children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui' }}>
      
      <header style={{ padding: '20px', backgroundColor: '#1e293b', color: 'white', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <h2 style={{ margin: 0 }}>Dashboard Interactivo</h2>
        {panelFiltros}
      </header>

      <main style={{ 
        padding: '24px', 
        flex: 1, 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '24px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;