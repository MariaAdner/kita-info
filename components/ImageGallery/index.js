import Image from "next/image";
import { StyledGallery } from "./ImageGallery.styled";

const images = [
  {
    name: "Garderobe",
    path: "/garderobe.png",
  },
  { name: "Außengelände", path: "/spielplatz.png" },
  { name: "Gruppenraum", path: "/gruppenraum.png" },
];

export default function ImageGallery() {
  return (
    <StyledGallery>
      {images.map((image) => (
        <li key={image.name}>
          <Image src={image.path} height={250} width={300} alt={image.name} />
        </li>
      ))}
    </StyledGallery>
  );
}
