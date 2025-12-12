import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, BookOpen, Calculator, Home } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.logo}>
                    <img src="/src/assets/logo-full.png" alt="Fondo Activo" style={{ height: '40px' }} />
                </div>
                <div className={styles.links}>
                    <Link to="/" className={`${styles.link} ${isActive('/') ? styles.active : ''}`}>
                        <Home size={18} /> Inicio
                    </Link>
                    <Link to="/education" className={`${styles.link} ${isActive('/education') ? styles.active : ''}`}>
                        <BookOpen size={18} /> Educación
                    </Link>
                    <Link to="/tools" className={`${styles.link} ${isActive('/tools') ? styles.active : ''}`}>
                        <Calculator size={18} /> Simuladores
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
