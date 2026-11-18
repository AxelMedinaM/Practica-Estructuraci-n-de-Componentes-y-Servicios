import datasetLocal from '../data/dataset.json';
import apiClient from './apiClient';

export const obtenerSerieDeTiempo = async () => {
  const response = await apiClient.get('/forecast', {
    params: {
      latitude: 19.2433, 
      longitude: -98.8653,
      current_weather: true
    }
  });

  return response.data.current_weather; 
};

export const obtenerDatosVisualizacion = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(datasetLocal);
    }, 500); 
  });
};

export const procesarDatos = (datos = []) => {
  if (!Array.isArray(datos) || datos.length === 0) {
    return {
      datosTabla: [],
      etiquetas: [],
      valores: [],
      metricas: {
        total: 0,
        promedio: '0.00',
        activos: 0,
        inactivos: 0
      }
    };
  }

  const etiquetas = datos.map((item) => item.etiqueta);
  const valores = datos.map((item) => Number(item.valor) || 0);

  const datosTabla = datos.map((item) => ({
    id: item.id,
    etiqueta: item.etiqueta,
    valor: Number(item.valor),
    estado: item.estado
  }));

  const sensoresActivos = datosTabla.filter((item) => item.estado === 'Activo');

  const total = datosTabla.length;
  const activos = sensoresActivos.length;
  const inactivos = total - activos;
  const sumaValores = valores.reduce((acc, curr) => acc + curr, 0);
  const promedio = (sumaValores / total).toFixed(2);

  return {
    datosTabla,
    etiquetas,
    valores,
    metricas: {
      total,
      promedio,
      activos,
      inactivos
    }
  };
};

export const formatearParaGrafico = (datosCrudos = []) => {
  if (!Array.isArray(datosCrudos) || datosCrudos.length === 0) {
    return {
      labels: [],
      values: []
    };
  }

  const labels = datosCrudos.map((item) => item.etiqueta || item.fecha || 'Sin etiqueta');
  const values = datosCrudos.map((item) => Number(item.valor) || 0);

  return {
    labels,
    values
  };
};