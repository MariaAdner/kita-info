import Link from "next/link";

export default function SendMessage() {
  return (
    <div>
      <p>Vielen Dank wir haben Ihre Nachricht erhalten!</p>
      <Link href="/">
        <button>Zurück zur Startseite</button>
      </Link>
    </div>
  );
}
