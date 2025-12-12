import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { instrumentsData } from '../data/instruments';

const InstrumentDetail = () => {
    const { id } = useParams();
    const instrument = instrumentsData[id];

    if (!instrument) {
        return <Navigate to="/education" replace />;
    }

    return (
        <div className="container animate-fade-in" style={{ padding: '60px 0' }}>
            <Link to="/education" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '30px', fontWeight: '500', color: 'var(--color-text-light)' }}>
                <ArrowLeft size={20} /> Volver a Educación
            </Link>

            <div className="card-3d" style={{ borderTop: `6px solid ${instrument.color}`, borderBottom: 'none' }}>
                <h1 style={{ fontSize: '3rem', color: instrument.color, marginBottom: '20px' }}>{instrument.title}</h1>

                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '40px', color: 'var(--color-text-light)' }}>
                    {instrument.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

                    <div>
                        <h3 style={{ marginBottom: '20px', color: 'var(--color-text-light)' }}>Características Clave</h3>
                        <ul style={{ listStyle: 'none' }}>
                            {instrument.features.map((feature, idx) => (
                                <li key={idx} style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'start' }}>
                                    <CheckCircle color={instrument.color} size={20} style={{ marginTop: '3px' }} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#9CA3AF', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Nivel de Riesgo</h4>
                            <span style={{ fontSize: '1.5rem', fontWeight: '700', color: instrument.color }}>{instrument.risk}</span>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#9CA3AF', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Horizonte Ideal</h4>
                            <span style={{ fontSize: '1.25rem', fontWeight: '600' }}>{instrument.timeHorizon}</span>
                        </div>

                        <div>
                            <h4 style={{ color: '#9CA3AF', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Inversión Mínima</h4>
                            <span style={{ fontSize: '1.25rem', fontWeight: '600' }}>{instrument.minInvestment}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InstrumentDetail;
