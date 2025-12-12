import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingDown, TrendingUp, AlertOctagon, ShieldCheck } from 'lucide-react';

const data = [
    { year: 'Año 0', cash: 10000, invested: 10000 },
    { year: 'Año 2', cash: 9216, invested: 12100 },
    { year: 'Año 4', cash: 8493, invested: 14641 },
    { year: 'Año 6', cash: 7827, invested: 17715 },
    { year: 'Año 8', cash: 7213, invested: 21435 },
    { year: 'Año 10', cash: 6648, invested: 25937 },
];

const InflationComparison = () => {
    return (
        <div className="card-3d" style={{ padding: '40px', marginTop: '40px', background: 'var(--color-primary)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>

                {/* Text / Concept */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                        <div style={{ padding: '12px', background: 'rgba(254, 226, 226, 0.1)', borderRadius: '12px', color: '#EF4444' }}>
                            <TrendingDown size={32} />
                        </div>
                        <h2 style={{ fontSize: '2rem', color: 'var(--color-text-light)' }}>Inflación vs Inversión</h2>
                    </div>

                    <p style={{ fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.6' }}>
                        <strong>La inflación es el enemigo silencioso de tu dinero.</strong> Representa el aumento generalizado de los precios, lo que significa que con el mismo dinero, podrás comprar menos cosas en el futuro.
                    </p>

                    <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid var(--color-danger)', padding: '20px', marginBottom: '20px' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FCA5A5', marginBottom: '10px' }}>
                            <AlertOctagon size={18} /> El Costo de no Invertir
                        </h4>
                        <p style={{ fontSize: '0.95rem', color: '#E5E7EB' }}>
                            Si guardas $10,000 bajo el colchón, en 10 años su poder adquisitivo (valor real) podría caer a <strong>$6,648</strong> (con una inflación promedio del 4%).
                        </p>
                    </div>

                    <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid var(--color-success)', padding: '20px' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6EE7B7', marginBottom: '10px' }}>
                            <ShieldCheck size={18} /> La Solución: Invertir
                        </h4>
                        <p style={{ fontSize: '0.95rem', color: '#E5E7EB' }}>
                            Invirtiendo esos mismos $10,000 con un rendimiento compuesto del 10%, tu capital podría crecer a <strong>$25,937</strong>, superando por mucho a la inflación.
                        </p>
                    </div>
                </div>

                {/* Chart */}
                <div style={{ height: '400px', width: '100%' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.2rem' }}>Poder Adquisitivo Real (Proyección 10 Años)</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="splitColorInvested" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="splitColorCash" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                            <XAxis dataKey="year" tick={{ fill: '#D1D5DB' }} />
                            <YAxis tick={{ fill: '#D1D5DB' }} />
                            <Tooltip
                                formatter={(value) => `$${value.toLocaleString()}`}
                                contentStyle={{ backgroundColor: 'var(--color-primary)', borderColor: 'rgba(255,255,255,0.1)', color: '#F9FAFB' }}
                            />
                            <Legend />
                            <Area type="monotone" dataKey="invested" name="Invertido (10%)" stroke="#10B981" fill="url(#splitColorInvested)" strokeWidth={3} />
                            <Area type="monotone" dataKey="cash" name="Efectivo (Inflación -4%)" stroke="#EF4444" fill="url(#splitColorCash)" strokeWidth={3} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
};

export default InflationComparison;
