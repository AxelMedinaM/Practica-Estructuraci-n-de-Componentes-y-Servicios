import datasetLocal from '../data/dataset.json';

// Simula una petición HTTP devolviendo una Promesa con el JSON local
export const obtenerDatosVisualizacion = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(datasetLocal);
    }, 500); // Simulamos 500ms de retraso de red
  });
};

// Filtra o formatea la información (ej. extraer etiquetas y valores numéricos) preparándola para el renderizado
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

  // Extraemos etiquetas y valores numéricos
  const etiquetas = datos.map((item) => item.etiqueta);
  const valores = datos.map((item) => Number(item.valor) || 0);

  // Formateamos los datos para la tabla
  const datosTabla = datos.map((item) => ({
    id: item.id,
    etiqueta: item.etiqueta,
    valor: Number(item.valor),
    estado: item.estado
  }));

  // Filtramos sensores activos
  const sensoresActivos = datosTabla.filter((item) => item.estado === 'Activo');

  // Calculamos métricas para las tarjetas de resumen
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
