import Image from "next/image";

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
    <div>
      {images.map((image) => (
        <li key={image.name}>
          <Image src={image.path} height={250} width={300} alt={image.name} />
        </li>
      ))}
    </div>
  );
}
