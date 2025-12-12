export const instrumentsData = {
    cetes: {
        title: 'CETES (Certificados de la Tesorería)',
        color: '#10B981',
        description: 'Los CETES son instrumentos de deuda bursátil emitidos por el Gobierno Federal. Son pagarés que tiene el gobierno para recaudar fondos en un cierto plazo y que generan rendimientos a quienes invierten en ellos.',
        features: [
            'Riesgo más bajo del mercado (respaldo gubernamental).',
            'Plazos desde 28 días hasta 2 años.',
            'Suelen pagar por encima de la inflación.',
            'Ideal para fondos de emergencia.'
        ],
        risk: 'Bajo',
        timeHorizon: 'Corto Plazo',
        minInvestment: '$100 MXN'
    },
    acciones: {
        title: 'Acciones (Renta Variable)',
        color: '#EF4444',
        description: 'Una acción representa una parte alícuota del capital social de una empresa. Al comprar acciones, te conviertes en socio de la empresa y participas de sus ganancias (dividendos) o pérdidas.',
        features: [
            'Potencial de rendimiento ilimitado.',
            'Derecho a dividendos (en algunas empresas).',
            'Alta liquidez en empresas grandes.',
            'Volatilidad alta: el precio cambia segundo a segundo.'
        ],
        risk: 'Alto',
        timeHorizon: 'Largo Plazo',
        minInvestment: 'Desde $20 MXN (depende del broker)'
    },
    etfs: {
        title: 'ETFs (Exchange Traded Funds)',
        color: '#3B82F6',
        description: 'Son fondos de inversión que cotizan en bolsa como si fueran una acción. Replican un índice (como el S&P 500) o un sector específico, ofreciendo diversificación instantánea.',
        features: [
            'Diversificación instantánea (compras 500 empresas en una sola acción).',
            'Costos de administración bajos.',
            'Transparencia total de los activos.',
            'Ideal para estrategias pasivas.'
        ],
        risk: 'Medio/Alto',
        timeHorizon: 'Medio/Largo Plazo',
        minInvestment: 'Variable'
    },
    fibras: {
        title: 'FIBRAS (Bienes Raíces)',
        color: '#F59E0B',
        description: 'Fideicomisos de Infraestructura y Bienes Raíces. Permiten invertir en inmuebles (centros comerciales, oficinas, naves industriales) sin comprar la propiedad física.',
        features: [
            'Pagos periódicos de rentas (dividendos).',
            'Plusvalía del inmueble a largo plazo.',
            'Beneficios fiscales en algunos casos.',
            'Accesible con poco capital.'
        ],
        risk: 'Medio',
        timeHorizon: 'Medio Plazo',
        minInvestment: 'Desde $10 MXN'
    },
    criptomonedas: {
        title: 'Criptomonedas',
        color: '#8B5CF6',
        description: 'Activos digitales descentralizados que utilizan criptografía para garantizar transacciones. Bitcoin y Ethereum son las más conocidas, funcionando como reserva de valor o "dinero programable".',
        features: [
            'Descentralización (sin bancos ni gobiernos).',
            'Volatilidad extrema (altas ganancias o pérdidas).',
            'Innovación tecnológica (Blockchain).',
            'Operan 24/7.'
        ],
        risk: 'Muy Alto',
        timeHorizon: 'Largo Plazo (Especulativo)',
        minInvestment: 'Fracciones pequeñas'
    }
};
