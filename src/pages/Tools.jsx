import React from 'react';
import InvestmentCalculator from '../components/InvestmentCalculator';

const Tools = () => {
    return (
        <div className="container animate-fade-in" style={{ paddingBottom: '60px' }}>
            <section style={{ padding: '60px 0', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Simulador de Inversiones</h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: 'var(--color-text-light)' }}>
                    Visualiza el poder del interés compuesto.
                    Ajusta los montos y el plazo para ver cómo crece tu patrimonio con Fondo Activo.
                </p>
            </section>

            <section>
                <InvestmentCalculator />
            </section>

            <section style={{ marginTop: '60px', textAlign: 'center' }}>
                <p style={{ fontSize: '0.9rem', color: '#9CA3AF' }}>
                    * Esta herramienta es solo para fines ilustrativos y no garantiza rendimientos futuros.
                    Los rendimientos pasados no garantizan rendimientos futuros.
                </p>
            </section>
        </div>
    );
};

export default Tools;
