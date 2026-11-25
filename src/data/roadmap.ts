import type { LevelId } from "../core/types";
export const levels: LevelId[] = ["A1.1", "A1.2", "A2.1", "A2.2"];
export const colors = ["#3155d9", "#a43e9c", "#087f70", "#956711"];
// Svaki red: naziv na srpskom, naziv na nemačkom i 5 planiranih lekcija.
const plans = `
Svakodnevne aktivnosti|Alltag|Jutarnja rutina;Razdvojivi glagoli;Redosled obaveza;Negacija;Večernja rutina
Posao i zanimanja|Beruf und Arbeit|Zanimanja;Radna mesta;Moje obaveze;Modalni glagoli;Radni dan
Kupovina|Einkaufen|Odeća;Cene;Akuzativ;Plaćanje;Razmena proizvoda
Hrana i restorani|Essen und Restaurant|Jelovnik;Porudžbina;Ljubazne molbe;Razgovor za stolom;Račun
Stan i nameštaj|Wohnung und Möbel|Prostorije;Nameštaj;Množina;Prisvojni oblici;Opis stana
Vreme i zakazivanje termina|Uhrzeit und Termine|Satnica;Datumi;Zakazivanje;Pomeranje termina;Potvrda
Snalaženje u gradu|Orientierung in der Stadt|Mesta u gradu;Pravci;Osnovni predlozi;Uputstva na mapi;Pitanje za put
Hobiji|Hobbys|Interesovanja;Slobodno vreme;Učestalost;Poziv;Dogovor
Osnovni zdravstveni vokabular|Gesundheit|Delovi tela;Simptomi;Apoteka;Savet;Termin kod lekara
Jednostavni razgovori|Einfache Gespräche|Upoznavanje;Telefonski poziv;Kratka poruka;Ljubazno odbijanje;Poziv na druženje
#
Putovanja i odmor|Reisen und Urlaub|Destinacije;Rezervacija;Plan puta;Na recepciji;Razgledanje
Javni prevoz|Öffentliche Verkehrsmittel|Vrste karata;Red vožnje;Presedanje;Kašnjenje;Na stanici
Zdravlje i odlazak kod lekara|Gesundheit und Arztbesuch|Simptomi;Povratni glagoli;Davanje saveta;Pregled;Uputstva
Posao i kolege|Arbeit und Kollegen|Radne obaveze;Dativ;Pomoć kolegi;Sastanci;Kratak radni mejl
Stanovanje|Wohnen|Lokacija;Položaj nameštaja;Promena položaja;Oglas;Razgledanje stana
Iskustva iz prošlosti|Erlebnisse in der Vergangenheit|Perfekt sa haben;Perfekt sa sein;Pravilni participi;Nepravilni participi;Prepričavanje dana
Svakodnevni problemi|Alltagsprobleme|Izgubljena stvar;Kvar;Molba za pomoć;Objašnjenje situacije;Dogovor o popravci
Kupovina i usluge|Einkaufen und Dienstleistungen|Opis proizvoda;Poređenje cena;Komparativ;Superlativ;Dogovor o usluzi
Opisivanje ljudi i mesta|Menschen und Orte beschreiben|Izgled;Osobine;Okruženje;Poređenje gradova;Preporuka
Pravljenje planova|Pläne machen|Predlozi;Mogućnosti;Modalni glagoli;Promena planova;Konačan dogovor
#
Prijava za posao|Bewerbung|Oglas za posao;Iskustvo;Uvodni mejl;Nastavci prideva;Intervju
Komunikacija na poslu|Kommunikation am Arbeitsplatz|Radne upute;Zavisna rečenica sa dass;Pitanja za pojašnjenje;Usmeni izveštaj;Dogovor o rokovima
Problemi sa stanovanjem|Probleme beim Wohnen|Prijava problema;Razlozi sa weil;Kontakt sa stanodavcem;Dativ i akuzativ;Dogovor o popravci
Opisivanje iskustava|Erfahrungen beschreiben|Präteritum od sein;Präteritum od haben;Modalni glagoli u prošlosti;Perfekt u razgovoru;Pričanje priče
Izražavanje mišljenja|Meinungen äußern|Lično mišljenje;Slaganje;Neslaganje;Obrazloženje;Poređenje predloga
Davanje objašnjenja|Erklärungen geben|Uzrok;Posledica;Uslov sa wenn;Koraci u uputstvu;Provera razumevanja
Reklamacije|Reklamationen|Opis nedostatka;Dokaz kupovine;Molba za povraćaj;Zamena;Pisani prigovor
Društvene situacije|Soziale Situationen|Poziv;Dogovor u grupi;Izvinjenje;Ljubazna reakcija;Održavanje razgovora
Planovi za budućnost|Zukunftspläne|Namere;Rokovi;Plan A i plan B;Uslovni dogovor;Kratka prezentacija
Složeniji razgovori|Komplexere Alltagsgespräche|Institucije;Telefon;Prosleđivanje informacija;Kombinovanje veznika;Završni razgovor`;
export const roadmap = plans
  .trim()
  .split("\n#\n")
  .map((level) =>
    level.split("\n").map((line) => {
      const [sr, de, topics] = line.split("|");
      return { title: [sr, de] as [string, string], topics: topics.split(";") };
    }),
  );
