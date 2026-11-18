import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GraficoComparativo = ({ datos }) => {
  if (!datos || !datos.labels || datos.labels.length === 0) {
    return (
      <p style={{ color: '#8f9bb3', textAlign: 'center', padding: '40px 0' }}>
        No hay datos suficientes para la comparativa.
      </p>
    );
  }

  const data = {
    labels: datos.labels,
    datasets: [
      {
        label: 'Valor Registrado',
        data: datos.values,
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(6, 182, 212, 0.8)'
        ],
        borderRadius: 8
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
        text: 'Comparativa por Sensor',
        color: '#ffffff',
        font: { size: 14 }
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#151828',
        titleColor: '#ffffff',
        bodyColor: '#3b82f6',
        borderColor: '#2a2f4c',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        ticks: { color: '#8f9bb3' },
        grid: { display: false }
      },
      y: {
        ticks: { color: '#8f9bb3' },
        grid: { color: 'rgba(255, 255, 255, 0.05)' }
      }
    }
  };

  return (
    <div style={{ position: 'relative', height: '280px', width: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GraficoComparativo;