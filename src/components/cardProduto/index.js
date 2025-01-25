import Image from "next/image";
import styles from "./cardProduto.module.css";

export default function CardProduto({ produto, descricao, imagem }) {
  return (
    <>
      <div className={styles.link}>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.img}>
              <Image
                src={imagem}
                fill
                style={{ objectFit: "contain" }}
                alt="Servico"
              />
            </div>
            <div className={styles.dados}>
              <h4 className={styles.produto}>{produto}</h4>
              <p className={styles.descricao}>{descricao}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
