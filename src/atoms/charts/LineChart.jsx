/** @jsxImportSource @emotion/react */
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { css } from '@emotion/react';
import Text from "../Text";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const LineChart = () => {
    // Data for the chart
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // X-axis labels
        datasets: [
            {
                label: 'Current Week',
                data: [12, 15, 10, 18, 14, 20], // Data for the current week
                borderColor: '#000000', // Black line for current week
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // Optional area fill
                pointBorderColor: '#000000',
                pointBackgroundColor: '#000000',
                borderWidth: 2,
                tension: 0.4, // Smooth the curve
                pointRadius: 0,
            },
            {
                label: 'Previous Week',
                data: [10, 9, 14, 12, 15, 19], // Data for the previous week
                borderColor: '#9C9DFE', // Blue line for previous week
                backgroundColor: 'rgba(156, 157, 254, 0.1)',
                pointBorderColor: '#9C9DFE',
                pointBackgroundColor: '#9C9DFE',
                borderWidth: 2,
                tension: 0.4,
                borderDash: [5, 5], // Dashed line
                pointRadius: 0,
            }
        ],
    };

    // Configuration options for the chart
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.5,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => `${value}M`,
                    font: {
                        size: 12,
                    },
                },
                max: 30,
                grid: {
                    color: '#e5e7eb', // Light gray grid
                    drawBorder: false, // Hide Y-axis border
                },
            },
            x: {
                ticks: {
                    font: {
                        size: 12,
                    },
                },
                grid: {
                    display: false, // Remove vertical lines
                },
            },
        },
        plugins: {
            legend: {
                display: false, // We create custom legends
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.dataset.label}: $${tooltipItem.raw}M`;
                    },
                },
            },
        },
    };

    // Emotion styles for the chart container and custom legend

    const container = css`margin: 20px 0px;background: #F7F9FB; border-radius: 16px; padding: 24px`

    const customLegend = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    font-family: Arial, sans-serif;
  `;

    const legendItem = css`
    display: flex;
    align-items: center;
    margin-right: 12px;
    font-size: 12px;
  `;

    const legendDot = css`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
  `;

    const currentWeekStyle = css`
    background-color: #000000;
  `;

    const previousWeekStyle = css`
    background-color: #9C9DFE;
  `;

    return (
        <div css={[container]}>
            <div css={customLegend}>
                <Text fontStyleGuide="heading2" mr="md">Revenue</Text>
                <div css={legendItem}>
                    <span css={[legendDot, currentWeekStyle]}></span>
                    <span>Current Week <strong>$58,211</strong></span>
                </div>
                <div css={legendItem}>
                    <span css={[legendDot, previousWeekStyle]}></span>
                    <span>Previous Week <strong>$68,768</strong></span>
                </div>
            </div>

            <Line data={data} options={options} />
        </div>

    );
};

export default LineChart;
