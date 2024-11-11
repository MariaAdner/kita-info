import Image from "next/image";
import { StyledGallery } from "./ImageGallery.styled";

const images = [
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
