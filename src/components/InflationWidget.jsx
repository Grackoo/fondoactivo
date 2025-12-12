import React from 'react';
import { TrendingUp, AlertTriangle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { year: '2020', inflation: 3.15 },
    { year: '2021', inflation: 7.36 },
    { year: '2022', inflation: 7.82 },
    { year: '2023', inflation: 4.66 },
    { year: '2024 (Est)', inflation: 4.00 },
];

const InflationWidget = () => {
    return (
        <div className="card-3d" style={{ maxWidth: '400px', background: 'var(--color-primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3>Inflación en México</h3>
                <TrendingUp color="var(--color-danger)" />
            </div>

            <div style={{ height: '200px', width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorInflation" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="year" fontSize={12} tick={{ fill: '#D1D5DB' }} />
                        <YAxis hide />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'var(--color-primary)', borderColor: 'rgba(255,255,255,0.1)', color: '#F9FAFB' }}
                        />
                        <Area type="monotone" dataKey="inflation" stroke="#EF4444" fillOpacity={1} fill="url(#colorInflation)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div style={{ background: 'rgba(254, 242, 242, 0.1)', padding: '10px', borderRadius: '8px', marginTop: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <AlertTriangle size={20} className="text-red-500" color="#FCA5A5" />
                <p style={{ fontSize: '0.8rem', color: '#FCA5A5' }}>
                    Tu dinero pierde valor si no lo inviertes. Objetivo Banxico: 3% +/- 1%.
                </p>
            </div>
        </div>
    );
};

export default InflationWidget;
