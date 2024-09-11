import Navbar from '@/components/navbar'
import Carrossel from '@/components/carrossel'
import Sobre from '@/components/sobre'
import Formulario from '@/components/formulario'
import GridProdutos from '@/components/gridProdutos'
import { handleJSONfiles } from '@/utils/jsonHandler'
import { handleJSONfile } from '@/utils/jsonHandler'
import React from 'react'


export default function Home({ nav, secoes, cases, produtos, contato }) {

    return (
        <>
            <React.Fragment>
                <Navbar contato = {contato} nav = {nav}/>
            </React.Fragment>
            <Sobre sobre = {secoes.sobre} contato = {contato}/>
            <Carrossel carrossel = {secoes.carrossel} cases = {cases} />
            <GridProdutos grid = {secoes.gridProdutos} produtos = {produtos}/>
            <Formulario form = {secoes.form}/>
        </>
    )
}


export async function getStaticProps() {

    const secoes = handleJSONfile(`./content/home/secoes.json`);
    const nav = handleJSONfile(`./content/nav/navbar.json`);
    const cases = handleJSONfiles('./content/cases');
    const produtos = handleJSONfiles('./content/produtos');
    const contato = handleJSONfile(`./content/contato/contato.json`);
    
    return {
        props: { secoes, cases, nav, produtos, contato },
    };
}