import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Projections',
        data: [13, 11, 9, 8, 12, 12], 
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 0, 
        borderRadius: 5, 
      },
      {
        label: 'Actuals',
        data: [13, 11, 9, 8, 12, 12], 
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderWidth: 0, 
        borderRadius: 5, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true, 
    aspectRatio: 1.3, 
    plugins: {
      legend: {
        display: false, 
      },
      title: {
        display: true,
        text: 'Projections vs Actuals',
        align: 'start',
        color: '#000',
        font: {
          size: 14,
          weight: 'bold',
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 20,
        bottom: 10,
      },
    },
    scales: {
      x: {
        stacked: true, 
        grid: {
          display: false, 
        },
        ticks: {
          color: '#9CA3AF', 
          font: {
            size: 12,
          },
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 30, 
        ticks: {
          stepSize: 10, 
          callback: function (value) {
            return value + 'M'; 
          },
          color: '#9CA3AF', 
          font: {
            size: 12,
          },
        },
        grid: {
          borderDash: [8, 4], 
          color: '#E5E7EB', 
        },
      },
    },
  };

  return  <Bar data={data} options={options} />;

};

export default BarChart;
