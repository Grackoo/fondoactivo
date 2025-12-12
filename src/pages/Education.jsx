import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { instrumentsData } from '../data/instruments';
import InflationComparison from '../components/InflationComparison';
import InvestorQuiz from '../components/InvestorQuiz';
import { Shield, TrendingUp, Activity, DollarSign, Bitcoin } from 'lucide-react';

const iconMap = {
    cetes: <Shield />,
    acciones: <TrendingUp />,
    etfs: <Activity />,
    fibras: <DollarSign />,
    criptomonedas: <Bitcoin />
};

const Education = () => {
    const [activeType, setActiveType] = useState('moderado');

    return (
        <div className="container animate-fade-in" style={{ paddingBottom: '60px' }}>

            {/* Introduction */}
            <section style={{ padding: '60px 0', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Centro Educativo</h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: 'var(--color-text-light)' }}>
                    Entiende los conceptos clave antes de invertir tu dinero.
                    La educación es el activo con mayor retorno.
                </p>
            </section>

            {/* Inflation Section */}
            <section style={{ marginBottom: '60px' }}>
                <InflationComparison />
            </section>

            {/* Instruments Grid */}
            <section style={{ marginBottom: '60px' }}>
                <h2 style={{ marginBottom: '30px', borderLeft: '5px solid var(--color-secondary)', paddingLeft: '15px' }}>
                    Instrumentos de Inversión
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
                    {Object.entries(instrumentsData).map(([key, data]) => (
                        <Link to={`/education/${key}`} key={key} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="card-3d" style={{ height: '100%', borderBottom: `4px solid ${data.color}` }}>
                                <div style={{ color: data.color, marginBottom: '15px' }}>
                                    {React.cloneElement(iconMap[key], { size: 40 })}
                                </div>
                                <h3>{data.title}</h3>
                                <p style={{ color: '#D1D5DB', fontSize: '0.9rem', marginTop: '10px' }}>
                                    {data.description.substring(0, 80)}...
                                </p>
                                <div style={{ marginTop: '15px', fontWeight: '600', color: data.color, fontSize: '0.9rem' }}>
                                    Ver detalles &rarr;
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Investor Types / Quiz */}
            <section>
                <h2 style={{ marginBottom: '30px', borderLeft: '5px solid var(--color-secondary)', paddingLeft: '15px' }}>
                    Descubre tu Perfil de Inversionista
                </h2>
                <InvestorQuiz />
            </section>
        </div>
    );
};

export default Education;
