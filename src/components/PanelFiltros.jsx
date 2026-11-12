import React from 'react';

const PanelFiltros = ({ filtros, setFiltros }) => {
  const handleChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <div>
        <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Categoría:</label>
        <select 
          name="categoria" 
          value={filtros.categoria} 
          onChange={handleChange}
          style={{ padding: '6px', borderRadius: '4px' }}
        >
          <option value="todas">Todas</option>
          <option value="temperatura">Temperatura</option>
          <option value="humedad">Humedad</option>
          <option value="presion">Presión</option>
          <option value="luz">Luz</option>
          <option value="aire">Aire</option>
          <option value="ruido">Ruido</option>
        </select>
      </div>

      <div>
        <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Fecha:</label>
        <input 
          type="date" 
          name="fecha" 
          value={filtros.fecha} 
          onChange={handleChange}
          style={{ padding: '6px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
    </div>
  );
};

export default PanelFiltros;