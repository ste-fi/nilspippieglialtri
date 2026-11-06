/* ==========================================================
   Dati del progetto: i 13 item e l'elenco delle entità da riconciliare.
   Per aggiungere un item o un identificativo basta modificare questo file.

   Per ogni item la risorsa principale è il TESTO (campo "testo"):
     tipo "integrale"      = testo completo consultabile online (pubblico dominio)
     tipo "scheda"         = opera ancora protetta da diritti: si rinvia a una scheda di riferimento
     tipo "da-verificare"  = presenza del testo online ancora da controllare
   Le altre tipologie (audio, video, immagini, statue) sono previste solo
   per l'item implementato, nella sua pagina.
   ========================================================== */

const TEMI = { paesaggio: "Paesaggio", folklore: "Folklore", lingua: "Lingua" };
const TESTO_BADGE = { "integrale": "Testo online", "scheda": "Scheda di riferimento", "da-verificare": "Testo da verificare" };

/* titoloItVerificato: false = il titolo italiano va ancora controllato su OPAC SBN */
const ITEMS = [
  {
    id: "t01", autore: "Hans Christian Andersen", vita: "1805–1875",
    titolo: "Eventyr, fortalte for Børn", titoloIt: null, titoloItVerificato: false,
    paese: "Danimarca", anno: 1835, annoNote: "1835–1842 (sei fascicoli)",
    testo: { tipo: "integrale", label: "Facsimile dell'edizione 1837 (Biblioteca Reale, Copenaghen)", url: "https://www.kb.dk/e-mat/dod/130014824392.pdf" },
    diritti: "Pubblico dominio", temi: ["folklore", "lingua"], pagina: null
  },
  {
    id: "t02", autore: "Zacharias Topelius", vita: "1818–1898",
    titolo: "Läsning för barn", titoloIt: null, titoloItVerificato: false,
    paese: "Finlandia", anno: 1865, annoNote: "1865–1896 (otto volumi)",
    testo: { tipo: "integrale", label: "Volumi digitalizzati su DORIA (Biblioteca Nazionale di Finlandia)", url: "https://www.doria.fi/handle/10024/144708" },
    diritti: "Pubblico dominio", temi: ["paesaggio", "folklore", "lingua"], pagina: null
  },
  {
    id: "t03", autore: "Peter Christen Asbjørnsen e Jørgen Moe", vita: "1812–1885 / 1813–1882",
    titolo: "Norske Folkeeventyr", titoloIt: null, titoloItVerificato: false,
    paese: "Norvegia", anno: 1841, annoNote: "1841–1844",
    testo: { tipo: "integrale", label: "Edizione 1852 (Wellcome Collection)", url: "https://preview.wellcomecollection.org/works/hpq8f269" },
    diritti: "Pubblico dominio", temi: ["paesaggio", "folklore", "lingua"], pagina: null
  },
  {
    id: "t04", autore: "Helena Nyblom", vita: "1843–1926",
    titolo: "Det var en gång", titoloIt: null, titoloItVerificato: false,
    paese: "Svezia", anno: 1897, annoNote: "1897–1898 (due volumi); autrice nata a Copenaghen",
    testo: { tipo: "da-verificare", label: "Opere dell'autrice su Project Runeberg (la presenza di «Det var en gång» va controllata)", url: "https://runeberg.org/authors/nyblohel.html" },
    diritti: "Pubblico dominio", temi: ["folklore"], pagina: null
  },
  {
    id: "t05", autore: "Elsa Beskow", vita: "1874–1953",
    titolo: "Tomtebobarnen", titoloIt: null, titoloItVerificato: false,
    paese: "Svezia", anno: 1910, annoNote: "",
    testo: { tipo: "integrale", label: "Edizione 1937 digitalizzata (Università di Göteborg, GUPEA)", url: "https://gupea.ub.gu.se/items/41afb653-4472-4297-ad2d-9e88600e8341" },
    diritti: "Pubblico dominio in Svezia dal 2024 (da verificare)", temi: ["paesaggio", "folklore"], pagina: null
  },
  {
    id: "t06", autore: "Selma Lagerlöf", vita: "1858–1940",
    titolo: "Nils Holgerssons underbara resa genom Sverige",
    titoloIt: "Il viaggio meraviglioso di Nils Holgersson", titoloItVerificato: false,
    paese: "Svezia", anno: 1906, annoNote: "1906–1907 (due volumi)",
    testo: { tipo: "integrale", label: "Traduzione inglese su Project Gutenberg (altre risorse nella pagina dell'item)", url: "https://www.gutenberg.org/etext/10935" },
    diritti: "Pubblico dominio (autrice † 1940)", temi: ["paesaggio", "folklore", "lingua"],
    pagina: "item-nils-holgersson.html"
  },
  {
    id: "t07", autore: "Astrid Lindgren", vita: "1907–2002",
    titolo: "Pippi Långstrump", titoloIt: "Pippi Calzelunghe", titoloItVerificato: true,
    paese: "Svezia", anno: 1945, annoNote: "",
    testo: { tipo: "scheda", label: "Scheda di riferimento (Store norske leksikon)", url: "https://snl.no/Pippi_Langstr%C3%B8mpe" },
    diritti: "Diritti riservati", temi: ["lingua"], pagina: null
  },
  {
    id: "t08", autore: "Tove Jansson", vita: "1914–2001",
    titolo: "Kometjakten", titoloIt: null, titoloItVerificato: false,
    paese: "Finlandia", anno: 1946, annoNote: "pubblicato in Finlandia nel 1946, in Svezia nel 1947",
    testo: { tipo: "scheda", label: "Scheda sulle edizioni (sito ufficiale dei Mumin)", url: "https://www.moomin.com/en/blog/comet-in-moominland/" },
    diritti: "Diritti riservati", temi: ["paesaggio", "lingua"], pagina: null
  },
  {
    id: "t09", autore: "Lennart Hellsing", vita: "1919–2015",
    titolo: "Nyfiken i en strut", titoloIt: null, titoloItVerificato: false,
    paese: "Svezia", anno: 1947, annoNote: "prima raccolta con il personaggio Krakel Spektakel",
    testo: { tipo: "scheda", label: "Scheda dell'autore (Store norske leksikon)", url: "https://snl.no/Lennart_Hellsing" },
    diritti: "Diritti riservati", temi: ["lingua"], pagina: null
  },
  {
    id: "t10", autore: "Thorbjørn Egner", vita: "1912–1990",
    titolo: "Karius og Baktus", titoloIt: null, titoloItVerificato: false,
    paese: "Norvegia", anno: 1949, annoNote: "testo 1941, radiodramma 1946, libro 1949",
    testo: { tipo: "scheda", label: "Studio sulle varianti del testo (rivista Barnboken)", url: "https://barnboken.net/index.php/clr/article/download/126/943" },
    diritti: "Diritti riservati", temi: ["folklore", "lingua"], pagina: null
  },
  {
    id: "t11", autore: "Astrid Lindgren", vita: "1907–2002",
    titolo: "Emil i Lönneberga", titoloIt: "Emil", titoloItVerificato: false,
    paese: "Svezia", anno: 1963, annoNote: "primo libro della serie; ambientato nel Småland intorno al 1900",
    testo: { tipo: "scheda", label: "Scheda sul sito ufficiale di Astrid Lindgren", url: "https://www.astridlindgren.com/no/emil-i-lonneberga-900045" },
    diritti: "Diritti riservati", temi: ["paesaggio"], pagina: null
  },
  {
    id: "t12", autore: "Astrid Lindgren", vita: "1907–2002",
    titolo: "Ronja Rövardotter", titoloIt: null, titoloItVerificato: false,
    paese: "Svezia", anno: 1981, annoNote: "foresta dell'alto Medioevo con troll, gnomi e arpie",
    testo: { tipo: "scheda", label: "Scheda dell'opera (Wikipedia, in inglese)", url: "https://en.wikipedia.org/wiki/Ronja,_the_Robber%27s_Daughter" },
    diritti: "Diritti riservati", temi: ["paesaggio", "folklore"], pagina: null
  },
  {
    id: "t13", autore: "Astrid Lindgren", vita: "1907–2002",
    titolo: "Bröderna Lejonhjärta", titoloIt: "I fratelli Cuordileone", titoloItVerificato: false,
    paese: "Svezia", anno: 1973, annoNote: "ambientato a Nangijala, tra la Valle dei Ciliegi e la Valle della Rosa Spinosa",
    testo: { tipo: "scheda", label: "Scheda sul sito ufficiale di Astrid Lindgren", url: "https://www.astridlindgren.com/gb/broderna-lejonhjarta-swedish-900069" },
    diritti: "Diritti riservati", temi: ["paesaggio", "folklore"], pagina: null
  }
];

/* ----------------------------------------------------------
   Entità da riconciliare con record di autorità.
   Gli identificativi sono VUOTI di proposito: vanno compilati dopo
   aver controllato i record. Se un campo è compilato, la pagina dati
   mostra il collegamento e segna l'entità come "riconciliata".
   ---------------------------------------------------------- */
const AUTORITA = [
  /* persone */
  { label: "Selma Lagerlöf", tipo: "persona", ruolo: "autrice di Nils Holgersson", q: "Selma Lagerlöf", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Hans Christian Andersen", tipo: "persona", ruolo: "autore", q: "Hans Christian Andersen", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Zacharias Topelius", tipo: "persona", ruolo: "autore", q: "Zacharias Topelius", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Peter Christen Asbjørnsen", tipo: "persona", ruolo: "autore e raccoglitore", q: "Peter Christen Asbjørnsen", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Jørgen Moe", tipo: "persona", ruolo: "autore e raccoglitore", q: "Jørgen Moe", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Helena Nyblom", tipo: "persona", ruolo: "autrice", q: "Helena Nyblom", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Elsa Beskow", tipo: "persona", ruolo: "autrice e illustratrice", q: "Elsa Beskow", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Astrid Lindgren", tipo: "persona", ruolo: "autrice (Pippi, Emil, Ronja, I fratelli Cuordileone)", q: "Astrid Lindgren", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Tove Jansson", tipo: "persona", ruolo: "autrice e illustratrice", q: "Tove Jansson", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Lennart Hellsing", tipo: "persona", ruolo: "autore", q: "Lennart Hellsing", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Thorbjørn Egner", tipo: "persona", ruolo: "autore e illustratore", q: "Thorbjørn Egner", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Bertil Lybeck", tipo: "persona", ruolo: "illustratore (edizione 1931 di Nils)", q: "Bertil Lybeck", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Ingrid Vang Nyman", tipo: "persona", ruolo: "illustratrice di Pippi (1945)", q: "Ingrid Vang Nyman", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Theodor Kittelsen", tipo: "persona", ruolo: "illustratore dei racconti popolari norvegesi", q: "Theodor Kittelsen", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Ralf Borselius", tipo: "persona", ruolo: "scultore della statua di Nils a Karlskrona", q: "Ralf Borselius", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Kenne Fant", tipo: "persona", ruolo: "regista del film del 1962", q: "Kenne Fant", wikidata: "", viaf: "", geonames: "", altro: "" },

  /* luoghi */
  { label: "Skurup", tipo: "luogo", ruolo: "comune della «patria» di Nils (Skåne)", q: "Skurup", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Skåne", tipo: "luogo", ruolo: "regione di partenza del viaggio", q: "Skåne", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Karlskrona", tipo: "luogo", ruolo: "tappa del viaggio; statua di Nils", q: "Karlskrona", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Kebnekaise", tipo: "luogo", ruolo: "monte da cui viene l'oca Akka", q: "Kebnekaise", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Lapponia", tipo: "luogo", ruolo: "meta settentrionale del viaggio", q: "Lapponia", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Småland", tipo: "luogo", ruolo: "ambientazione di Emil i Lönneberga", q: "Småland", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Svezia", tipo: "luogo", ruolo: "ambito geografico dell'opera", q: "Svezia", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Danimarca", tipo: "luogo", ruolo: "paese di Andersen", q: "Danimarca", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Norvegia", tipo: "luogo", ruolo: "paese di Asbjørnsen, Moe, Egner", q: "Norvegia", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Finlandia", tipo: "luogo", ruolo: "paese di Topelius e Jansson", q: "Finlandia", wikidata: "", viaf: "", geonames: "", altro: "" },

  /* concetti / soggetti */
  { label: "Letteratura per l'infanzia", tipo: "concetto", ruolo: "soggetto principale", q: "Children's literature", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Identità nazionale", tipo: "concetto", ruolo: "asse della domanda di ricerca", q: "National identity", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Folklore", tipo: "concetto", ruolo: "asse della domanda di ricerca", q: "Folklore", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Fiabe", tipo: "concetto", ruolo: "genere", q: "Fairy tales", wikidata: "", viaf: "", geonames: "", altro: "" },
  { label: "Geografia (didattica)", tipo: "concetto", ruolo: "finalità scolastica di Nils", q: "Geography education", wikidata: "", viaf: "", geonames: "", altro: "" }
];
