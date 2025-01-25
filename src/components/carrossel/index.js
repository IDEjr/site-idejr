import styles from "./carrossel.module.css";
import Case from "@/components/case";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "@/components/sectionHeader";

register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carrossel({ carrossel, cases }) {
  cases.sort((a, b) => new Date(b.data) - new Date(a.data));

  const filteredcases = cases.filter((case_) => case_.bool === true);

  return (
    <>
      <div id="portfolio"></div>
      <SectionHeader title={carrossel.secao} description={carrossel.titulo} />
      <div className={styles.container}>
        <div className={styles.carrossel}>
          <Swiper
            style={{
              "--swiper-theme-color": "rgb(56, 47, 118)",
              "--swiper-pagination-color": "rgb(56, 47, 118)",
              "--swiper-pagination-bullet-inactive-color": "rgb(56, 47, 118)",
              "--swiper-pagination-bullet-inactive-opacity": "0.5",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": " 15px",
            }}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              enabled: true,
              clickable: true,
              dynamicBullets: true,
            }}
            grabCursor={true}
            className={styles.swiperContainer}
          >
            {filteredcases.map((case_) => (
              <SwiperSlide key={case_.titulo} className={styles.swiperIndi}>
                <Case
                  fileName={case_.fileName}
                  imagem={case_.imagem}
                  titulo={case_.titulo}
                  data={case_.data}
                  link={case_.link}
                />
                <div className={styles.margin}></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
