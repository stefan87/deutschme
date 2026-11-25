export const lessonDialogues = `
Wie schreibt man Tee?|Mit zwei E.
Kannst du Äpfel vorlesen?|Ja: Äpfel.
Wie klingt das ie in Bier?|Wie ein langes I.
Ist das ein ß oder ein B?|Das ist ein ß.
Hallo! Wie heißt du?|Ich heiße Karim.
Guten Morgen, Lea! Wie geht es dir?|Danke, mir geht es gut.
Guten Abend. Wie heißen Sie?|Mein Name ist Weiss.
Ich muss jetzt gehen. Bis morgen!|Tschüs, bis morgen!
Wie viele Bananen möchtest du?|Sechs Bananen, bitte.
Das macht fünfzehn Euro.|Hier sind fünfzehn Euro.
Was kostet das Fahrrad?|Es kostet achtzig Euro.
Ist das die Hausnummer siebenundvierzig?|Ja, genau.
Wo liegt Wien?|In Österreich.
Woher kommen Sie, Frau Roth?|Ich komme aus der Schweiz.
Sprichst du Englisch?|Ja, ich spreche Englisch.
Wo wohnst du jetzt?|Ich wohne jetzt in München.
Wie ist deine Adresse?|Gartenstraße acht.
Wie beginnt deine Telefonnummer?|Mit null.
Wie alt ist deine Schwester?|Sie ist zwanzig Jahre alt.
Hast du eine E-Mail-Adresse?|Ja, ich gebe sie dir.
Sind deine Eltern heute zu Hause?|Ja, sie sind zu Hause.
Hast du Geschwister?|Ja, ich habe einen Bruder.
Wo wohnt deine Oma?|Sie wohnt in Ulm.
Wie heißt dein Hund?|Er heißt Bello.
Habt ihr heute Zeit?|Ja, wir haben Zeit.
Was machst du jetzt?|Ich mache eine Pause.
Wo arbeitet Mara?|Sie arbeitet im Büro.
Fährst du mit dem Bus?|Nein, ich gehe zu Fuß.
Was machst du am Sonntag?|Am Sonntag koche ich.
Wann hast du Geburtstag?|Im Mai.
Wie ist das Wetter im Sommer?|Es ist warm.
Um wie viel Uhr beginnt der Kurs?|Um neun Uhr.
Sind die Tomaten frisch?|Ja, sie sind frisch.
Was möchtest du trinken?|Ein Glas Wasser, bitte.
Was darf es sein?|Einen Kaffee, bitte.
Wie viel kostet die Milch?|Zwei Euro.
Wann beginnt der Film?|Um acht Uhr.
Kommt Lena heute?|Ja, sie kommt später.
Was ist neu?|Die Lampe ist neu.
Lernst du nur Deutsch?|Nein, ich lerne auch Englisch.
`
  .trim()
  .split("\n")
  .map((line) => line.split("|") as [string, string]);
