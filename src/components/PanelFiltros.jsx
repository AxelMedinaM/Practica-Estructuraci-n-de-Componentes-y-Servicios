import React from 'react';

const PanelFiltros = ({ filtros, setFiltros }) => {
  const handleChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value
    });
  };

  const inputStyle = {
    padding: '10px 20px', 
    borderRadius: '24px', /* Bordes completamente redondeados tipo píldora */
    border: '1px solid #2a2f4c',
    backgroundColor: '#252a40', /* Azul oscuro para los inputs */
    color: '#ffffff',
    fontSize: '0.85rem',
    fontWeight: '500',
    outline: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <select 
        name="categoria" 
        value={filtros.categoria} 
        onChange={handleChange}
        style={inputStyle}
      >
        <option value="todas">Todas las categorías</option>
        <option value="temperatura">Temperatura</option>
        <option value="humedad">Humedad</option>
        <option value="presion">Presión</option>
        <option value="luz">Luz</option>
        <option value="aire">Calidad del Aire</option>
        <option value="ruido">Ruido</option>
      </select>

      <input 
        type="date" 
        name="fecha" 
        value={filtros.fecha} 
        onChange={handleChange}
        style={{...inputStyle, colorScheme: 'dark'}} 
      />
    </div>
  );
};

export default PanelFiltros;