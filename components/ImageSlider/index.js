import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  StyledEmbla,
  StyledEmblaContainer,
  StyledSlide,
  StyledEmblaImage,
} from "./ImageSlider.styled";
import Image from "next/image";

export default function ImageSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

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
    <StyledEmbla ref={emblaRef}>
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
    </StyledEmbla>
  );
}
