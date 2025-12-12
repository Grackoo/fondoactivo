import React, { useEffect, useState } from 'react';
import styles from './StockTicker.module.css';

const MOCK_STOCKS = [
    { symbol: 'IPC', price: 57420.50, change: 0.45 },
    { symbol: 'SP500', price: 4780.20, change: 0.12 },
    { symbol: 'NASDAQ', price: 15600.00, change: -0.25 },
    { symbol: 'AMZN', price: 154.00, change: 1.20 },
    { symbol: 'TSLA', price: 240.50, change: -1.50 },
    { symbol: 'AAPL', price: 195.00, change: 0.30 },
    { symbol: 'CETES 28', price: 11.25, change: 0.00, isRate: true },
    { symbol: 'MXN/USD', price: 17.50, change: -0.10 },
];

const StockTicker = () => {
    return (
        <div className={styles.tickerContainer}>
            <div className={styles.tickerTrack}>
                {[...MOCK_STOCKS, ...MOCK_STOCKS].map((stock, index) => (
                    <div key={`${stock.symbol}-${index}`} className={styles.tickerItem}>
                        <span className={styles.symbol}>{stock.symbol}</span>
                        <span className={styles.price}>
                            {stock.isRate ? `${stock.price}%` : `$${stock.price.toLocaleString()}`}
                        </span>
                        <span className={`${styles.change} ${stock.change >= 0 ? styles.up : styles.down}`}>
                            {stock.change > 0 ? '+' : ''}{stock.change}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StockTicker;
