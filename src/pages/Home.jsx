import React from 'react';
import { Link } from 'react-router-dom';
import StockTicker from '../components/StockTicker';
import InflationWidget from '../components/InflationWidget';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';

const Home = () => {
    return (
        <>
            <StockTicker />
            <div className="container animate-fade-in">
                {/* Hero Section */}
                <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '60px 0', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', lineHeight: '1.1' }}>
                            Tu futuro financiero comienza hoy
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '30px' }}>
                            Fondo Activo te ofrece estrategias de inversión personalizadas, tecnología de punta y asesoría experta.
                            Protege y haz crecer tu patrimonio.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <Link to="/education" style={{
                                background: 'var(--color-secondary)',
                                color: 'var(--color-primary)',
                                padding: '12px 24px',
                                borderRadius: '8px',
                                fontWeight: '600',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                Empezar a aprender <ArrowRight size={18} />
                            </Link>
                            <Link to="/tools" style={{
                                background: 'var(--color-primary)',
                                color: 'white',
                                border: '2px solid var(--color-secondary)',
                                padding: '12px 24px',
                                borderRadius: '8px',
                                fontWeight: '600'
                            }}>
                                Simular Inversión
                            </Link>
                        </div>
                    </div>

                    <div style={{ flex: '0 0 400px' }}>
                        <InflationWidget />
                    </div>
                </section>

                {/* Features / Statistics */}
                <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', padding: '60px 0' }}>
                    <div className="card-3d" style={{ textAlign: 'center' }}>
                        <Shield size={40} color="var(--color-secondary)" style={{ marginBottom: '15px' }} />
                        <h3>Seguridad</h3>
                        <p>Regulados por la CNBV.</p>
                    </div>
                    <div className="card-3d" style={{ textAlign: 'center' }}>
                        <TrendingUp size={40} color="var(--color-secondary)" style={{ marginBottom: '15px' }} />
                        <h3>Rendimiento</h3>
                        <p>Estrategias que superan la inflación.</p>
                    </div>
                    <div className="card-3d" style={{ textAlign: 'center' }}>
                        <Users size={40} color="var(--color-secondary)" style={{ marginBottom: '15px' }} />
                        <h3>Experiencia</h3>
                        <p>Más de 10 años en el mercado.</p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
