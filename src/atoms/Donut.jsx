/** @jsxImportSource @emotion/react */
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { css } from '@emotion/react';
import Text from "./Text";

ChartJS.register(ArcElement, Tooltip, Legend);

const SalesChart = () => {
  const data = {
    labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
    datasets: [
      {
        data: [300.56, 135.18, 154.02, 48.96],
        backgroundColor: ["#000000", "#B2E7B2", "#9C9DFE", "#D4E9FE"],
        borderWidth: 2, // To match the thin border between sections
        borderColor: "#fff", // White border between segments
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "65%", // Adjust the center cutout to make the doughnut chart match your design
    plugins: {
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        bodyFont: {
          size: 14,
        },
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: $${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
  };


  const chartContainer = css`
    background: #F7F9FB;
    padding: 24px;
    border-radius: 16px;
  `;

  const totalSales = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  `;

  const listStyle = css`
    list-style-type: none;
    padding: 0;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const listItemStyle = css`
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px;
  `;

  const legendDot = css`
    width: 10px;
    height: 10px;
    display: inline-block;
    border-radius: 50%;
    margin-right: 10px;
  `;

  const directStyle = css`
    background-color: #000000;
  `;

  const affiliateStyle = css`
    background-color: #B2E7B2;
  `;

  const sponsoredStyle = css`
    background-color: #9C9DFE;
  `;

  const emailStyle = css`
    background-color: #D4E9FE;
  `;

  return (
    <div css={chartContainer}>
    <Text fontStyleGuide="heading2" mb="lmd">Total Sales</Text>
      <Doughnut data={data} options={options} />
      <div css={totalSales}>
        <ul css={listStyle}>
          <li css={listItemStyle}>
            <span css={[legendDot, directStyle]}></span> Direct <span>$300.56</span>
          </li>
          <li css={listItemStyle}>
            <span css={[legendDot, affiliateStyle]}></span> Affiliate <span>$135.18</span>
          </li>
          <li css={listItemStyle}>
            <span css={[legendDot, sponsoredStyle]}></span> Sponsored <span>$154.02</span>
          </li>
          <li css={listItemStyle}>
            <span css={[legendDot, emailStyle]}></span> E-mail <span>$48.96</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SalesChart;
