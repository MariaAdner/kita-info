import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { StyledCarousel } from "./ImageCarousel.styled";

export default function ImageCarousel() {
  const carouselimages = [
    {
      name: "Garderobe",
      path: "/garderobe.png",
    },

    { name: "Gruppenraum", path: "/gruppenraum.png" },
    { name: "Gruppenraum1", path: "/gruppenraum1.jpeg" },
    { name: "Gruppenraum2", path: "/gruppenraum2.jpeg" },
    { name: "Außengelände", path: "/spielplatz.png" },
    { name: "Außengelände1", path: "/spielplatz1.jpeg" },
    { name: "Außengelände2", path: "/außenbereich.jpeg" },
  ];

  return (
    <StyledCarousel>
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
      >
        <div>
          <Image
            src={"/gruppenraum.png"}
            height={250}
            width={300}
            alt={"Gruppenraum 1"}
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <Image
            src={"/gruppenraum1.jpeg"}
            height={250}
            width={300}
            alt={"Gruppenraum 2"}
          />
        </div>
        <div>
          <Image
            src={"/spielplatz.png"}
            height={250}
            width={300}
            alt={"Außengeländer 1"}
          />
        </div>
        <div>
          <Image
            src={"/spielplatz1.jpeg"}
            height={250}
            width={300}
            alt={"Außengeländer 2"}
          />
        </div>
      </Carousel>
    </StyledCarousel>
  );
}
