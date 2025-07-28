import { useState, useEffect } from "react";
import {
  MainContainer,
  SlidesContainer,
  Slide,
  Controls,
  BotonSlide,
} from "../SlideShow/SlideShow.styled";
import rightArrow from "../../assets/right-arrow.svg";
import leftArrow from "../../assets/left-arrow.svg";

import useBanners from "../../utils/constants/hooks/useBanners";

export default function Slideshow() {
  //Llamamos al hook useBanners para obtener los banners
  const { banners, loading } = useBanners();
  const [currentImag, setCurrentImg] = useState<number>(0);

  useEffect(() => {
    if (banners.length > 0) {
      //si banners tiene elementos entonces actualizamos el estado de currentImg
      const interval = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % banners.length);
      }, 5000); // Cambia la imagen cada 5 segundos
      return () => clearInterval(interval); // Limpia el intervalo al desmontar el componentesdk·$
    }
  }, [banners]);

  const handleNext = () => {
    setCurrentImg((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentImg((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  return (
    <MainContainer>
      {!loading && banners.length > 0 && (
        <>
          <SlidesContainer>
            <Slide>
              <a href={banners[currentImag].data.cta_link}>
                <img
                  src={banners[currentImag].data.main_image.url}
                  alt={banners[currentImag].data.main_image.alt}
                />
              </a>
            </Slide>
          </SlidesContainer>
          <Controls>
            <BotonSlide onClick={handlePrev}>
              <img src={leftArrow} alt="Anterior" />
            </BotonSlide>
            <BotonSlide right onClick={handleNext}>
              <img src={rightArrow} alt="Siguiente" />
            </BotonSlide>
          </Controls>
        </>
      )}
    </MainContainer>
  );
}
