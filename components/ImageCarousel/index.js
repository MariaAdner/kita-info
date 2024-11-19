import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { StyledCarousel, StyledCarouselImage } from "./ImageCarousel.styled";

export default function ImageCarousel() {
  const carouselImages = [
    {
      name: "Garderobe",
      path: "/garderobe.png",
    },

    { name: "Gruppenraum", path: "/gruppenraum.png" },
    { name: "Gruppenraum1", path: "/gruppenraum1.jpeg" },
    { name: "Gruppenraum2", path: "/gruppenraum2.jpeg" },
    { name: "Außengelände1", path: "/spielplatz1.jpeg" },
    { name: "Außengelände2", path: "/außenbereich.jpeg" },
  ];

  return (
    <StyledCarousel>
      <Carousel
        showArrows={true}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        emulateTouch={true}
        transitionTime={3}
        showThumbs={true}
        dynamicHeight={true}
      >
        <div>
          <Image src={"/garderobe.png"} width={350} height={275} alt="ddd" />
        </div>
        <div>
          <Image src="/gruppenraum.png" width={350} height={275} alt="ddd" />
        </div>
        <div>
          <Image
            src={"/gruppenraum1.jpeg"}
            width={350}
            height={275}
            alt="ddd"
          />
        </div>

        {/* {carouselImages.map((image) => (
          <li key={image.name}>
            <StyledCarouselImage
              src={image.path}
              height={275}
              width={350}
              alt={image.name}
            />
          </li>
        ))} */}
      </Carousel>
    </StyledCarousel>
  );
}
