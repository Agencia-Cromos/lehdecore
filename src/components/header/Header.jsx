'use client';

import { useState, useEffect } from 'react';
import { HeaderMenu } from '../lists/headerMenu/HeaderMenu';
import styles from './styles.module.scss';
import { Logo } from '@/fragments/logo/Logo';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Container } from '@/fragments/container/Container';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            <header className={styles.header}>
                <Container>
                    <Logo />
                    <button 
                        className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`} 
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <nav className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
                        <HeaderMenu />
                    </nav>
                </Container>
            </header>
            {isMenuOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
        </>
    );
}