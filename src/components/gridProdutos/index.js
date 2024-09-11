import Image from 'next/image'
import styles from './gridProdutos.module.css'
import CardProduto from '@/components/cardProduto'
import SectionHeader from '@/components/sectionHeader'


export default function GridProdutos({ grid, produtos }) {
  const filteredProdutos = produtos.filter((produto) => produto.bool === true);

  return (
    <>
      <div id='produtos'></div>
      <SectionHeader title = {grid.secao} description = {grid.titulo}/>
      <div className={styles.chamariz}>
        <ul className={styles.produtosGrid}>
          {filteredProdutos && filteredProdutos.map((produto, i) => (
            <CardProduto
              className={styles.produtoInd}
              key={i}
              produto={produto.produto}
              descricao={produto.descricao}
              imagem={produto.imagem}
            />
          ))}
        </ul>
      </div>
    </>
  );
}