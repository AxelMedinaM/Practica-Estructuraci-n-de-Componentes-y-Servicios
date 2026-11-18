import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const GraficoTendencia = ({ datos }) => {
  if (!datos || !datos.labels || datos.labels.length === 0) {
    return (
      <p style={{ color: '#8f9bb3', textAlign: 'center', padding: '40px 0' }}>
        No hay datos suficientes para mostrar la tendencia.
      </p>
    );
  }

  const data = {
    labels: datos.labels,
    datasets: [
      {
        label: 'Medición del Sensor',
        data: datos.values,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        pointBackgroundColor: '#10b981',
        pointBorderColor: '#ffffff',
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.35,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: '#8f9bb3' }
      },
      title: {
        display: true,
        text: 'Evolución de Mediciones',
        color: '#ffffff',
        font: { size: 14 }
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#151828',
        titleColor: '#ffffff',
        bodyColor: '#10b981',
        borderColor: '#2a2f4c',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        ticks: { color: '#8f9bb3' },
        grid: { color: 'rgba(255, 255, 255, 0.05)' }
      },
      y: {
        ticks: { color: '#8f9bb3' },
        grid: { color: 'rgba(255, 255, 255, 0.05)' }
      }
    }
  };

  return (
    <div style={{ position: 'relative', height: '280px', width: '100%' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default GraficoTendencia;