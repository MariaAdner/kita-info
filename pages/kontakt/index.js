import Header from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import SubHeader from "@/components/SubHeader";

export default function Kontakt() {
  return (
    <>
      <Header />
      <HomeButton />
      <SubHeader>Kontakt</SubHeader>
      <>
        <div>
          <p>Haus-Leitung: Lydia Pech</p>
          <p>Stellvertretung: Christiane Günther</p>
        </div>
        <div>
          <p>Adresse: Fabrikstraße 11, 08297 Zwönitz</p>
          <p>Telefon: 037754 2855</p>
          <p>E-Mail: kita.sternschnuppe@zwoenitz.de</p>
        </div>
        <form>
          <fieldset>
            <label>
              Name
              <input type="text" name="Name" required />
            </label>
            <label>
              E-Mail-Adresse
              <input type="email" name="E-Mail" required />
            </label>
            <label>
              Ihre Nachricht
              <textarea rows="3" name="Nachricht" required></textarea>
            </label>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="Datenverarbeitung bestätigt"
                  value="Ja"
                  required
                />
                Ich bestätige, dass ich mit der Verarbeitung meiner Eingaben zum
                Zwecke der Anfragebearbeitung, einverstanden bin.
              </label>
            </div>
          </fieldset>
        </form>
        <h4>Öffnungszeiten</h4>
        <p>Montag - Freitag:</p>
        <p>6 - 17 Uhr</p>
      </>
    </>
  );
}
