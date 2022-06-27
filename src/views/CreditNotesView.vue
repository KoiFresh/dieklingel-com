<template>
  <div class="home">
    <p class="headline">
      <span>Impressum</span>
    </p>
    <p class="address">
      <span>Kai Mayer</span><br />
      <span>Pilgramstraße 14</span><br />
      <span>74081 Heilbronn Sontheim</span><br />
    </p>
    <p>
      <span class="subtitle">Vertreten durch:</span>
      <span>Kai Mayer</span>
    </p>
    <p>
      <span class="subtitle">Kontakt:</span>
      <span>kai.mayer@t-online.de</span>
    </p>
    <div>
      <span class="subtitle">Haftungsausschluss:</span>
      <p>
        <span class="subtitle">Haftung für Inhalte</span>
        <span>
          Die Inhalte unserer Seiten und Apps wurden mit größter Sorgfalt
          erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
          Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
          sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
          den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
          als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </span>
      </p>
      <p>
        <span class="subtitle">Urheberrecht</span>
        <span>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten oder innerhalb einer unserer Apps unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede
          Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
          der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht
          kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite
          nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
          beachtet. Insbesondere werden Inhalte Dritter als solche
          gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
          aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
          umgehend entfernen.
        </span>
      </p>
      <p>
        <span class="subtitle">Datenschutz</span>
        <span>
          Die Nutzung unserer Webseite oder App ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
          die Datenübertragung im Internet (z.B. bei der Kommunikation per
          E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
          Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von
          im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch
          Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung
          und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
          Die Betreiber der Seiten und Apps behalten sich ausdrücklich
          rechtliche Schritte im Falle der unverlangten Zusendung von
          Werbeinformationen, etwa durch Spam-Mails, vor.
        </span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class CreditNotesView extends Vue {}
</script>

<style lang="sass" scoped>
.home
  margin: 20px

.headline
  font-size: 22px
  font-weight: bold

.subtitle
  font-weight: bold
  &:after
    content: "\A"
    white-space: pre
</style>
