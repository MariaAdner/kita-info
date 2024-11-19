import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  StyledEmbla,
  StyledViewport,
  StyledEmblaContainer,
  StyledSlide,
  StyledEmblaImage,
  EmblaButtonPrev,
  EmblaButtonNext,
  EmblaButtonMenu,
} from "./ImageSlider.styled";

export default function ImageSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const sliderImages = [
    // {
    //   name: "Garderobe",
    //   path: "/garderobe.png",
    // },

    // { name: "Gruppenraum", path: "/gruppenraum.png" },
    { name: "Gruppenraum1", path: "/gruppenraum1.jpeg" },
    // { name: "Gruppenraum2", path: "/gruppenraum2.jpeg" },
    { name: "Außengelände1", path: "/spielplatz1.jpeg" },
    { name: "Außengelände2", path: "/außenbereich.jpeg" },
  ];

  return (
    <StyledEmbla>
      <StyledViewport ref={emblaRef}>
        <StyledEmblaContainer>
          {sliderImages.map((image) => (
            <StyledSlide key={image.name}>
              <StyledEmblaImage
                src={image.path}
                width={350}
                height={275}
                alt={image.name}
              />
            </StyledSlide>
          ))}
        </StyledEmblaContainer>
      </StyledViewport>
      <EmblaButtonMenu>
        <EmblaButtonPrev onClick={scrollPrev}>Prev</EmblaButtonPrev>
        <EmblaButtonNext onClick={scrollNext}>Next</EmblaButtonNext>
      </EmblaButtonMenu>
    </StyledEmbla>
  );
}
