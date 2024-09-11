import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { FaBars, FaTimes, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './navbar.module.css';

const handleMove = (id, navRef, barsRef, timesRef) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    navRef.current.classList.remove(styles.responsiveNav);
    barsRef.current.classList.remove(styles.responsiveBars);
    timesRef.current.classList.remove(styles.responsiveTimes);
  }
};

export default function Navbar({ contato, nav }) {
  const navRef = useRef();
  const barsRef = useRef();
  const timesRef = useRef();

  const toggleNavbar = () => {
    navRef.current.classList.toggle(styles.responsiveNav);
    barsRef.current.classList.toggle(styles.responsiveBars);
    timesRef.current.classList.toggle(styles.responsiveTimes);
  };

  return (
    <>
      <div className={styles.cabecalho}>
        <Link href="/" className={styles.logo}>
          <Image
            src={nav.logo}
            fill
            style={{objectFit: 'contain'}}
            alt="Logo"
          />
        </Link>
        <nav className={styles.navbar} ref={navRef}>
          <h3 className={styles.sections} onClick={() => handleMove('sobre', navRef, barsRef, timesRef)}>Sobre</h3>
          <h3 className={styles.sections} onClick={() => handleMove('portfolio', navRef, barsRef, timesRef)}>Portfólio</h3>
          <h3 className={styles.sections} onClick={() => handleMove('produtos', navRef, barsRef, timesRef)}>Produtos</h3>
          <h3 className={styles.sections} onClick={() => handleMove('contato', navRef, barsRef, timesRef)}>Contato</h3>
        </nav>
        <button className={styles.timesBtn} ref={timesRef} onClick={toggleNavbar}>
          <FaTimes />
        </button>
        <button className={styles.barsBtn} ref={barsRef} onClick={toggleNavbar}>
          <FaBars />
        </button>
      </div>
      <div className={styles.hero}>
        <Image src={nav.background} layout="fill" objectFit="cover" objectPosition="left" alt="Background" quality={100} />
        <div className={styles.inicio}>
          <h1 className={styles.titulo}>Experiência em desenvolvimento web & sistemas sob encomenda</h1>
          <p className={styles.texto}>Empresa júnior IDE</p>
        </div>
      </div>
    </>
  );
}
