/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const styles = {
  tableContainer: css`
    overflow-x: auto; /* Enables horizontal scroll */
    white-space: nowrap; 
    padding: 24px;
    background-color: #F7F9FB;;
    border-radius: 16px;
  scrollbar-width: thin; /* for Firefox */
  scrollbar-color: #888 #e0e0e0; /* for Firefox */
  `,
  tableTitle: css`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
  `,
  table: css`
    width: 500px;
    border-collapse: collapse;
  `,
  tableHeader: css`
    text-align: left;
    font-size: 14px;
    color: #888;
    border-bottom: 1px solid #e0e0e0;
  `,
  tableRow: css`
    font-size: 14px;
    color: #333;
    border-bottom: 1px solid #e0e0e0;
    height: 50px;
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
