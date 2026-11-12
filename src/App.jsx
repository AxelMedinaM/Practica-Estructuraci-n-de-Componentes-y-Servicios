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
        
        if (filtros.categoria !== 'todas') {
          datosFiltrados = datosFiltrados.filter(item => item.categoria === filtros.categoria);
        }
        if (filtros.fecha) {
          datosFiltrados = datosFiltrados.filter(item => item.fecha === filtros.fecha);
        }

        const datosProcesados = procesarDatos(datosFiltrados);
        setDatos(datosProcesados.datosTabla);
        setMetricas(datosProcesados.metricas);
      } catch (error) {
        console.error('Error al cargar:', error);
      } finally {
        setCargando(false);
      }
    };
    cargarDatosFiltrados();
  }, [filtros]);

  // Estilo base para las tarjetas/contenedores tipo Widget oscuro
  const widgetStyle = {
    backgroundColor: '#252a40',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.3)',
    color: '#ffffff'
  };

  return (
    <DashboardLayout panelFiltros={<PanelFiltros filtros={filtros} setFiltros={setFiltros} />}>
      {cargando ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '60px', color: '#8f9bb3' }}>
          <p style={{ fontSize: '1.1rem', letterSpacing: '1px' }}>Actualizando métricas...</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* Fila superior: Tarjetas de Métricas */}
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            <div style={widgetStyle}>
              <TarjetaMetrica titulo="Total Sensores" valor={metricas.total} color="#3b82f6" />
            </div>
            <div style={widgetStyle}>
              <TarjetaMetrica titulo="Activos" valor={metricas.activos} color="#10b981" />
            </div>
            <div style={widgetStyle}>
              <TarjetaMetrica titulo="Inactivos" valor={metricas.inactivos} color="#ef4444" />
            </div>
            <div style={{...widgetStyle, backgroundColor: '#3b82f6'}}>
              {/* Tarjeta destacada con fondo azul vibrante */}
              <TarjetaMetrica titulo="Promedio" valor={metricas.promedio} color="#ffffff" />
            </div>
          </section>

          {/* Fila inferior: 2 Columnas (Gráficos y Tabla de detalles) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
            
            <section style={widgetStyle}>
              <h3 style={{ margin: '0 0 20px 0', fontSize: '0.85rem', color: '#8f9bb3', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Datos Climáticos (API)
              </h3>
              <PanelAnalitico />
            </section>

            <section style={{...widgetStyle, overflow: 'hidden'}}>
              <h3 style={{ margin: '0 0 20px 0', fontSize: '0.85rem', color: '#8f9bb3', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Registro de Sensores
              </h3>
              {/* La tabla se adapta al contenedor */}
              <div style={{ overflowX: 'auto' }}>
                <TablaDatos dataset={datos} />
              </div>
            </section>

          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

export default App;