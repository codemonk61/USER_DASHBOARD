/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Text from './Text';

// Define the styles using Emotion's `css` function
const styles = {
    revenueContainer: css`
    padding: 24px;
    background-color: #F7F9FB;
    border-radius: 16px;
    margin: 20px 0px
  `,
    mapPlaceholder: css`
    margin-bottom: 20px;
  `,
    worldMap: css`
    width: 100%;
    height: 150px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #555;
    font-size: 18px;
  `,
    revenueList: css`
    display: flex;
    flex-direction: column;
  `,
    revenueItem: css`
    margin-bottom: 16px;
  `,
    revenueBar: css`
    flex-grow: 1;
    height: 3px;
    background-color: #E5ECF644;
    border-radius: 8px;
    margin: 0 10px;
    position: relative;
  `,
    bar: (width) => css`
    height: 100%;
    background-color: #E5ECF6;
    border-radius: 4px;
    width: ${width}%;
  `,
};

const revenueData = [
    { location: 'New York', revenue: 72 },
    { location: 'San Francisco', revenue: 39 },
    { location: 'Sydney', revenue: 25 },
    { location: 'Singapore', revenue: 61 },
];

const maxRevenue = Math.max(...revenueData.map((data) => data.revenue));

const RevenueByLocation = () => {
    return (
        <div css={styles.revenueContainer}>
            <Text fontStyleGuide="heading2">Revenue by Location</Text>
            <div css={styles.mapPlaceholder}>

                <div css={styles.worldMap}>
                    <img src="../../WorldMap.png" />
                </div>
            </div>
            <div css={styles.revenueList}>
                {revenueData.map((data, index) => (
                    <div key={index} css={styles.revenueItem}>
                        <div css={css`display: flex; justify-content: space-between; align-items: center`}>
                            <Text fontStyleGuide='body2' mb="sm">{data.location}</Text>
                            <Text fontStyleGuide='body2' mb="sm">{data.revenue}K</Text>
                        </div>
                        <div css={styles.revenueBar}>
                            <div css={styles.bar((data.revenue / maxRevenue) * 100)}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RevenueByLocation;
