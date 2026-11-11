import { useState } from 'react';
import { obtenerSerieDeTiempo } from '../services/dataService';

const PanelAnalitico = () => {
  // Definimos los tres estados utilizando el hook useState
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const consultarAPI = async () => {
    // Antes de llamar al servicio, cambia el estado a true y limpia errores
    setCargando(true);
    setError(null);
    
    try {
      // En el try, guardamos los datos
      const resultado = await obtenerSerieDeTiempo();
      setDatos(resultado);
    } catch (err) {
      // En el catch, guardamos el mensaje de error si la petición falla
      setError('Error al obtener los datos. Verifica tu conexión a internet.');
    } finally {
      // Finalmente, regresamos cargando a false
      setCargando(false); 
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
      <h2>Panel de Datos Climáticos</h2>
      {/* Botón que dispara la petición a la API */}
      <button onClick={consultarAPI} disabled={cargando}>
        Obtener Predicción
      </button>

      {/* Si cargando es true, muestra un indicador visual */}
      {cargando && <p>Analizando datos...</p>}
      
      {/* Si hay un error, muestra un mensaje de alerta en color rojo */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {/* Si hay datos, renderízalos */}
      {datos && !cargando && !error && (
        <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3>Resultados de la API</h3>
          <p><strong>Temperatura:</strong> {datos.temperature}°C</p>
          <p><strong>Velocidad del Viento:</strong> {datos.windspeed} km/h</p>
        </div>
      )}
    </div>
  );
};

export default PanelAnalitico;