import { useState, useEffect } from 'react';
import PanelAnalitico from './components/PanelAnalitico';
import Navbar from './components/Navbar';
import { TarjetaMetrica } from './components/TarjetaMetrica';
import { TablaDatos } from './components/TablaDatos';
import { obtenerDatosVisualizacion, procesarDatos } from './services/dataService';

function App() {
  // Utiliza los hooks useState para almacenar el dataset y métricas
  const [datos, setDatos] = useState([]);
  const [metricas, setMetricas] = useState({ total: 0, promedio: '0.00', activos: 0, inactivos: 0 });
  const [cargando, setCargando] = useState(true);

  // Utiliza useEffect para ejecutar obtenerDatosVisualizacion() al montar la aplicación
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const datosCrudos = await obtenerDatosVisualizacion();
        const datosProcesados = procesarDatos(datosCrudos);
        
        setDatos(datosProcesados.datosTabla);
        setMetricas(datosProcesados.metricas);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      padding: '24px 16px',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Navbar />

        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#0f172a', margin: '0 0 6px 0' }}>
            Práctica 2: Estructuración de Componentes y Servicios
          </h2>
          <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>
            Visualización y gestión modular de datos de sensores.
          </p>
        </header>

        {cargando ? (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '48px',
            color: '#64748b'
          }}>
            <p style={{ fontSize: '1.1rem' }}>Cargando datos del servicio...</p>
          </div>
        ) : (
          <>
            {/* AQUÍ AGREGAMOS EL COMPONENTE DE LA PRÁCTICA 3 */}
            <section style={{ marginBottom: '28px' }}>
              <PanelAnalitico />
            </section>
            {/* Renderiza al menos tres instancias de TarjetaMetrica con diferentes métricas clave */}
            <section style={{ marginBottom: '28px' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#334155', marginBottom: '12px' }}>
                Métricas Clave
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: '-8px'
              }}>
                <TarjetaMetrica
                  titulo="Total Sensores"
                  valor={metricas.total}
                  color="#2563eb"
                  subtitulo="Dispositivos registrados"
                />
                <TarjetaMetrica
                  titulo="Sensores Activos"
                  valor={metricas.activos}
                  color="#16a34a"
                  subtitulo="En funcionamiento"
                />
                <TarjetaMetrica
                  titulo="Sensores Inactivos"
                  valor={metricas.inactivos}
                  color="#dc2626"
                  subtitulo="Fuera de línea"
                />
                <TarjetaMetrica
                  titulo="Promedio General"
                  valor={metricas.promedio}
                  color="#7c3aed"
                  subtitulo="Valor numérico promedio"
                />
              </div>
            </section>

            {/* Renderiza una instancia de TablaDatos inyectando la información del estado */}
            <section>
              <h3 style={{ fontSize: '1.1rem', color: '#334155', marginBottom: '12px' }}>
                Registro de Datos
              </h3>
              <TablaDatos dataset={datos} />
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
