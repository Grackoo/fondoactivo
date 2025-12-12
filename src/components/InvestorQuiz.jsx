import React, { useState } from 'react';
import { CheckCircle, AlertCircle, ArrowRight, Phone } from 'lucide-react';

const questions = [
    {
        text: "¿Cuál es tu objetivo principal al invertir?",
        options: [
            { text: "Proteger mi dinero y evitar pérdidas", points: 1 },
            { text: "Crecer mi capital moderadamente", points: 2 },
            { text: "Maximizar ganancias aunque arriesgue mucho", points: 3 }
        ]
    },
    {
        text: "¿Por cuánto tiempo planeas dejar tu dinero invertido?",
        options: [
            { text: "Menos de 1 año", points: 1 },
            { text: "De 2 a 5 años", points: 2 },
            { text: "Más de 5 años", points: 3 }
        ]
    },
    {
        text: "Si tu inversión pierde 15% de su valor en un mes, ¿qué harías?",
        options: [
            { text: "Vendería todo para no perder más", points: 1 },
            { text: "Esperaría a que se recupere", points: 2 },
            { text: "Compraría más aprovechando el precio bajo", points: 3 }
        ]
    },
    {
        text: "¿Cómo describirías tu conocimiento financiero?",
        options: [
            { text: "Principiante", points: 1 },
            { text: "Intermedio", points: 2 },
            { text: "Avanzado", points: 3 }
        ]
    }
];

const InvestorQuiz = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (points) => {
        const newScore = score + points;
        if (currentStep < questions.length - 1) {
            setScore(newScore);
            setCurrentStep(currentStep + 1);
        } else {
            setScore(newScore);
            setShowResult(true);
        }
    };

    const getProfile = () => {
        // Max score = 12, Min score = 4
        if (score <= 6) return {
            type: 'Conservador',
            desc: 'Tu prioridad es la seguridad. Prefieres rendimientos estables y bajo riesgo.',
            color: '#10B981',
            rec: 'CETES, Bonos Gubernamentales.'
        };
        if (score <= 9) return {
            type: 'Moderado',
            desc: 'Buscas un balance entre seguridad y crecimiento. Aceptas algo de volatilidad.',
            color: '#F59E0B',
            rec: 'Portafolio mixto (Deuda + Fibras/ETFs).'
        };
        return {
            type: 'Agresivo',
            desc: 'Buscas los máximos rendimientos posibles y tienes un horizonte largo. La volatilidad es tu aliada.',
            color: '#EF4444',
            rec: 'Acciones, Criptomonedas, ETFs de sector.'
        };
    };

    const resetQuiz = () => {
        setScore(0);
        setCurrentStep(0);
        setShowResult(false);
    };

    if (showResult) {
        const profile = getProfile();
        return (
            <div className="card-3d animate-fade-in" style={{ padding: '40px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Tu Perfil es:</h2>
                <div style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: profile.color,
                    marginBottom: '20px',
                    textTransform: 'uppercase'
                }}>
                    {profile.type}
                </div>
                <p style={{ fontSize: '1.2rem', color: '#D1D5DB', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                    {profile.desc}
                </p>

                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '12px', marginBottom: '40px' }}>
                    <strong>Recomendación Inicial:</strong> {profile.rec}
                </div>

                <div style={{ borderTop: '2px dashed #E5E7EB', paddingTop: '30px' }}>
                    <h3 style={{ marginBottom: '15px' }}>¿Listo para empezar?</h3>
                    <p style={{ marginBottom: '20px' }}>
                        Nuestro equipo de expertos en <strong>Fondo Activo</strong> puede diseñar una estrategia a tu medida.
                    </p>
                    <a
                        href={`https://wa.me/527711960057?text=${encodeURIComponent(`Hola Fondo Activo, realicé el cuestionario y mi perfil es ${profile.type}. Me gustaría recibir asesoría para empezar a invertir.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: '#25D366',
                            color: 'white',
                            padding: '16px 32px',
                            borderRadius: '8px',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            transition: 'transform 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <Phone size={20} /> Contactar por WhatsApp
                    </a>
                </div>

                <button onClick={resetQuiz} style={{ marginTop: '20px', background: 'none', color: '#6B7280', textDecoration: 'underline' }}>
                    Repetir Cuestionario
                </button>
            </div>
        );
    }

    const question = questions[currentStep];

    return (
        <div className="card-3d animate-fade-in" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', color: '#6B7280', fontSize: '0.9rem' }}>
                <span>Pregunta {currentStep + 1} de {questions.length}</span>
                <span>Perfilamiento</span>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', color: 'var(--color-text-light)' }}>
                {question.text}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {question.options.map((option, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleAnswer(option.points)}
                        style={{
                            padding: '16px',
                            border: '2px solid #E5E7EB',
                            borderRadius: '8px',
                            textAlign: 'left',
                            fontSize: '1.1rem',
                            background: 'var(--color-primary)',
                            color: 'white',
                            transition: 'all 0.2s',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--color-secondary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default InvestorQuiz;
