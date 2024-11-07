import Link from "next/link";

export default function Thanks() {
  return (
    <div>
      <p> Vielen Dank, wir haben Ihre Nachricht erhalten!</p>
      <Link href="/profile">
        <button>Zurück zur Übersicht</button>
      </Link>
    </div>
  );
}
