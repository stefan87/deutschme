export const readings = `
Ich heiße Lea. Mein Name hat drei Buchstaben: L, E und A. Ich wohne in Essen.|Wie heißt sie?~Lea~Anna~Lena|Wie viele Buchstaben hat ihr Name?~Drei~Vier~Fünf|Wo wohnt sie?~In Essen~In Bonn~In Berlin
Hallo! Ich bin Paul. Das ist meine Freundin Aylin. Wir sehen uns morgen wieder.|Wie heißt er?~Paul~Tom~Leon|Wie heißt seine Freundin?~Aylin~Lea~Anna|Wann sehen sie sich wieder?~Morgen~Heute Abend~Am Sonntag
Im Kurs sind acht Personen. Heute sind nur sechs da. Es gibt zehn Stühle.|Wie viele Personen sind im Kurs?~Acht~Sechs~Zehn|Wie viele sind heute da?~Sechs~Acht~Zehn|Wie viele Stühle gibt es?~Zehn~Acht~Sechs
Mila kommt aus Serbien. Sie wohnt jetzt in München. Sie spricht Serbisch und lernt Deutsch.|Woher kommt Mila?~Aus Serbien~Aus Österreich~Aus Deutschland|Wo wohnt sie jetzt?~In München~In Wien~In Bonn|Welche Sprache lernt sie?~Deutsch~Serbisch~Englisch
Ich bin Amir Kaya. Ich wohne in der Gartenstraße zwölf. Meine Telefonnummer beginnt mit null.|Wie lautet der Nachname?~Kaya~Amir~Weber|Wie lautet die Hausnummer?~Zwölf~Zwei~Zwanzig|Wie beginnt die Telefonnummer?~Mit null~Mit eins~Mit zwei
Lena hat einen Bruder. Er heißt Max und ist neun Jahre alt. Zu Hause haben sie eine Katze.|Wer ist Max?~Lenas Bruder~Lenas Vater~Lenas Freund|Wie alt ist Max?~Neun~Zehn~Acht|Welches Tier haben sie?~Eine Katze~Einen Hund~Einen Fisch
Timo arbeitet im Büro. Heute fährt er mit dem Bus. Am Abend lernt er Deutsch.|Wo arbeitet Timo?~Im Büro~In der Schule~Im Café|Wie fährt er heute?~Mit dem Bus~Mit dem Zug~Mit dem Fahrrad|Was macht er am Abend?~Er lernt Deutsch.~Er kocht.~Er arbeitet.
Heute ist Freitag. Am Samstag trifft Eva ihre Oma. Am Sonntag hat Eva Geburtstag.|Welcher Tag ist heute?~Freitag~Montag~Samstag|Wen trifft Eva am Samstag?~Ihre Oma~Ihre Mutter~Ihre Schwester|Wann hat Eva Geburtstag?~Am Sonntag~Am Samstag~Am Freitag
Im Café bestellt Nora einen Tee. Ben nimmt einen Kaffee und ein Stück Kuchen. Beide trinken auch Wasser.|Was bestellt Nora?~Einen Tee~Einen Kaffee~Einen Saft|Was isst Ben?~Kuchen~Brot~Käse|Was trinken beide auch?~Wasser~Milch~Saft
Heute geht Jonas zur Arbeit. Danach kauft er Brot. Am Abend kocht er mit Mia.|Wohin geht Jonas zuerst?~Zur Arbeit~Zum Bahnhof~Ins Kino|Was kauft er?~Brot~Käse~Obst|Mit wem kocht er?~Mit Mia~Mit Eva~Mit Paul
`
  .trim()
  .split("\n")
  .map((line) => {
    const [text, ...q] = line.split("|");
    return {
      text,
      questions: q.map((row) => {
        const [prompt, answer, ...rest] = row.split("~");
        return { prompt, answer, options: [answer, ...rest] };
      }),
    };
  });
