import React from 'react';
import styles from './sobre.module.css';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import SectionHeader from '@/components/sectionHeader'

export default function Sobre({ sobre, contato }) {
  return (
    <>
      <div id='sobre'></div>
      <div className={styles.container}>
        <div className={styles.social}>
          <a href={contato.github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={45}/>
          </a>
          <a href={contato.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={45}/>
          </a>
          <a href={contato.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={45}/>
          </a>
          <a href={contato.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook size={45}/>
          </a>
        </div>
        <div className={styles.content}>
          <SectionHeader title = {sobre.secao} description = {sobre.titulo} />
          <p>{sobre.descricao}</p>
        </div>
      </div>
    </>
  );
}