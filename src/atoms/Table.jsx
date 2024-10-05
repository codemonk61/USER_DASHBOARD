/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const styles = {
  tableContainer: css`

    padding: 24px;
    background-color: #F7F9FB;;
    border-radius: 16px;


    /* Media query for mobile */
    @media (max-width: 768px) {
      padding: 10px;
    }
  `,
  tableTitle: css`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
  `,
  table: css`
    width: 100%;
    border-collapse: collapse;

    /* Responsive: On smaller screens, we display as block */
    @media (max-width: 768px) {
      display: block;
    }
  `,
  tableHeader: css`
    text-align: left;
    font-size: 14px;
    color: #888;
    border-bottom: 1px solid #e0e0e0;

    /* Hide the headers on small screens */
    @media (max-width: 768px) {
      display: none;
    }
  `,
  tableRow: css`
    font-size: 14px;
    color: #333;
    border-bottom: 1px solid #e0e0e0;
    height: 50px;

    /* Stack rows on small screens */
    @media (max-width: 768px) {
      display: block;
      margin-bottom: 15px;
      border-bottom: none;
      border: 1px solid #e0e0e0;
      padding: 10px;
      border-radius: 8px;
    }
  `,
  tableCell: css`
    padding: 8px 12px;

    /* On mobile, make cells display as block */
    @media (max-width: 768px) {
      display: block;
      padding: 5px 0;
      text-align: right;

      /* Add labels for mobile */
      &::before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        color: #555;
      }
    }
  `,
};

const productData = [
  { name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82, amount: 6518.18 },
  { name: 'Marco Lightweight Shirt', price: 128.5, quantity: 37, amount: 4754.5 },
  { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64, amount: 2559.36 },
  { name: 'Lightweight Jacket', price: 20, quantity: 184, amount: 3680 },
  { name: 'Marco Shoes', price: 79.49, quantity: 64, amount: 1965.81 },
];

const formatCurrency = (value) => {
  return `$${value.toFixed(2)}`;
};

const Table = () => {
  return (
    <div css={styles.tableContainer}>
      <div css={styles.tableTitle}>Top Selling Products</div>
      <table css={styles.table}>
        <thead>
          <tr>
            <th css={styles.tableHeader}>Name</th>
            <th css={styles.tableHeader}>Price</th>
            <th css={styles.tableHeader}>Quantity</th>
            <th css={styles.tableHeader}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product, index) => (
            <tr key={index} css={styles.tableRow}>
              <td css={styles.tableCell} data-label="Name">{product.name}</td>
              <td css={styles.tableCell} data-label="Price">{formatCurrency(product.price)}</td>
              <td css={styles.tableCell} data-label="Quantity">{product.quantity}</td>
              <td css={styles.tableCell} data-label="Amount">{formatCurrency(product.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
