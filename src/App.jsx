import { useState, useEffect } from 'react';
import DashboardLayout from './components/DashboardLayout';
import PanelFiltros from './components/PanelFiltros';
import PanelAnalitico from './components/PanelAnalitico';
import { TarjetaMetrica } from './components/TarjetaMetrica';
import { TablaDatos } from './components/TablaDatos';
import { obtenerDatosVisualizacion, procesarDatos } from './services/dataService';

function App() {
  const [filtros, setFiltros] = useState({ categoria: 'todas', fecha: '' });

  const [datos, setDatos] = useState([]);
  const [metricas, setMetricas] = useState({ total: 0, promedio: '0.00', activos: 0, inactivos: 0 });
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarDatosFiltrados = async () => {
      setCargando(true);
      try {
        const datosCrudos = await obtenerDatosVisualizacion();
        
        let datosFiltrados = datosCrudos;
        
        // Filtrado por categoría
        if (filtros.categoria !== 'todas') {
          datosFiltrados = datosFiltrados.filter(item => item.categoria === filtros.categoria);
        }
        
        // Filtrado por fecha exacta
        if (filtros.fecha) {
          datosFiltrados = datosFiltrados.filter(item => item.fecha === filtros.fecha);
        }

        const datosProcesados = procesarDatos(datosFiltrados);
        
        setDatos(datosProcesados.datosTabla);
        setMetricas(datosProcesados.metricas);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      } finally {
        setCargando(false);
      }
    };

    cargarDatosFiltrados();
  }, [filtros]);

  return (
    <DashboardLayout panelFiltros={<PanelFiltros filtros={filtros} setFiltros={setFiltros} />}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', gridColumn: '1 / -1' }}>
        
        <header style={{ marginBottom: '12px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#0f172a', margin: '0 0 6px 0' }}>
            Práctica 4: Construcción de un Dashboard Interactivo
          </h2>
          <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>
            Visualización y gestión modular de datos con filtros globales.
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
            <p style={{ fontSize: '1.1rem' }}>Recalculando datos...</p>
          </div>
        ) : (
          <>
            <section style={{ marginBottom: '28px' }}>
              <PanelAnalitico />
            </section>
            
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

            <section>
              <h3 style={{ fontSize: '1.1rem', color: '#334155', marginBottom: '12px' }}>
                Registro de Datos
              </h3>
              <TablaDatos dataset={datos} />
            </section>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

export default App;