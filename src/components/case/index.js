import Image from "next/image";
import styles from "./case.module.css";

export default function Case({ imagem, link }) {
  return (
    <>
      <a href={link} target="_blank" className={styles.link}>
        <div className={styles.card}>
          <div className={styles.img}>
            <Image
              src={imagem}
              fill
              style={{ objectFit: "contain" }}
              alt="Case"
            />
          </div>
        </div>
      </a>
    </>
  );
}
