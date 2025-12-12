import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Calculator } from 'lucide-react';

const InvestmentCalculator = () => {
    const [initial, setInitial] = useState(10000);
    const [monthly, setMonthly] = useState(2000);
    const [years, setYears] = useState(10);
    const [rate, setRate] = useState(10); // 10% annual
    const [data, setData] = useState([]);

    useEffect(() => {
        calculateData();
    }, [initial, monthly, years, rate]);

    const calculateData = () => {
        let currentBalance = initial;
        let totalInvested = initial;
        const newData = [];

        for (let i = 0; i <= years; i++) {
            if (i === 0) {
                newData.push({
                    year: 'Inicio',
                    Inversión: initial,
                    Ganancia: 0,
                    Total: initial
                });
                continue;
            }

            const monthlyRateFactor = Math.pow(1 + rate / 100, 1 / 12);
            for (let m = 0; m < 12; m++) {
                currentBalance *= monthlyRateFactor;
                currentBalance += monthly;
                totalInvested += monthly;
            }

            newData.push({
                year: `Año ${i}`,
                Inversión: Math.round(totalInvested),
                Ganancia: Math.round(currentBalance - totalInvested),
                Total: Math.round(currentBalance)
            });
        }
        setData(newData);
    };

    // Custom 3D Bar Shape (Simulated)
    const renderCustomBarShape = (props) => {
        const { fill, x, y, width, height } = props;
        return (
            <g>
                {/* Main Front Face */}
                <rect x={x} y={y} width={width} height={height} stroke="none" fill={fill} />
                {/* Top Face (Simulating depth) */}
                <path d={`M${x},${y} L${x + 5},${y - 5} L${x + width + 5},${y - 5} L${x + width},${y} Z`} fill={shadeColor(fill, 20)} />
                {/* Right Face */}
                <path d={`M${x + width},${y} L${x + width + 5},${y - 5} L${x + width + 5},${y + height - 5} L${x + width},${y + height} Z`} fill={shadeColor(fill, -20)} />
            </g>
        );
    };

    // Helper to darken/lighten color
    const shadeColor = (col, amt) => {
        let usePound = false;
        if (col[0] == "#") {
            col = col.slice(1);
            usePound = true;
        }
        var num = parseInt(col, 16);
        var r = (num >> 16) + amt;
        if (r > 255) r = 255;
        else if (r < 0) r = 0;
        var b = ((num >> 8) & 0x00FF) + amt;
        if (b > 255) b = 255;
        else if (b < 0) b = 0;
        var g = (num & 0x0000FF) + amt;
        if (g > 255) g = 255;
        else if (g < 0) g = 0;
        return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
    }

    return (
        <div className="card-3d" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px', alignItems: 'start' }}>

            {/* Controls */}
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--color-text-light)' }}>
                    <Calculator />
                    <h3>Parámetros</h3>
                </div>

                <div className="input-group" style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '5px', fontWeight: '500' }}>Inversión Inicial</label>
                    <input
                        type="number"
                        value={initial}
                        onChange={(e) => setInitial(Number(e.target.value))}
                        style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'white' }}
                    />
                </div>

                <div className="input-group" style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '5px', fontWeight: '500' }}>Aportación Mensual</label>
                    <input
                        type="number"
                        value={monthly}
                        onChange={(e) => setMonthly(Number(e.target.value))}
                        style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'white' }}
                    />
                </div>

                <div className="input-group" style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '5px', fontWeight: '500' }}>Plazo (Años)</label>
                    <input
                        type="range"
                        min="1" max="30"
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        style={{ width: '100%' }}
                    />
                    <div style={{ textAlign: 'right', fontWeight: 'bold' }}>{years} años</div>
                </div>

                <div className="input-group" style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '5px', fontWeight: '500' }}>Rendimiento Anual (%)</label>
                    <input
                        type="range"
                        min="1" max="30" step="0.5"
                        value={rate}
                        onChange={(e) => setRate(Number(e.target.value))}
                        style={{ width: '100%' }}
                    />
                    <div style={{ textAlign: 'right', fontWeight: 'bold' }}>{rate}%</div>
                </div>

                <div style={{ marginTop: '20px', padding: '15px', background: 'var(--color-secondary)', color: 'white', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.9rem' }}>Monto Final Estimado</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${data[data.length - 1]?.Total.toLocaleString()}</div>
                </div>
            </div>

            {/* Chart */}
            <div style={{ height: '400px' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--color-text-light)' }}>Proyección de Crecimiento</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip
                            formatter={(value) => `$${value.toLocaleString()}`}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                        />
                        <Legend />
                        <Bar dataKey="Inversión" stackId="a" fill="#9CA3AF" shape={renderCustomBarShape} />
                        <Bar dataKey="Ganancia" stackId="a" fill="#D4AF37" shape={renderCustomBarShape} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default InvestmentCalculator;
