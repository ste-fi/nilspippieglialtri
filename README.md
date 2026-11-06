Nils, Pippi e gli altri
Progetto per l'esame di Digital Humanities: archivio digitale della letteratura per l'infanzia nordica (1835–1950), con analisi approfondita del Viaggio meraviglioso di Nils Holgersson di Selma Lagerlöf.
Sito statico in HTML5, CSS e JavaScript puro, senza framework né passaggi di compilazione.
Come vederlo in locale
Basta aprire `index.html` con il browser. La mappa richiede la connessione (Leaflet e i tasselli di OpenStreetMap vengono caricati dalla rete).
Come pubblicarlo su GitHub Pages
Crea un repository pubblico (per esempio `nils-archivio`) e carica tutti i file di questa cartella, mantenendo la struttura.
Vai in Settings → Pages, scegli come sorgente il ramo `main` e la cartella `/ (root)`.
Dopo un minuto il sito è raggiungibile a `https://<utente>.github.io/nils-archivio/`.
Sostituisci `[utente]` e `[Cognome, Nome]` nei file (cerca le parentesi quadre).
Struttura
File	Contenuto
`index.html`	Home sul modello del progetto d'esempio: il progetto, esplora la raccolta, tre chiavi di lettura
`catalogo.html`	Catalogo dei 13 item: menù a tendina (autore, titolo, paese, anno, tema), ricerca libera, schede e linea del tempo
`item-nils-holgersson.html`	Pagina analitica dell'item (si raggiunge dal catalogo): scheda DC, tab, mappa Leaflet, accordion, link tipizzati, aside
`dati.html`	Tabella delle entità con riconciliazione ai record di autorità, esportabile in CSV
`xml/nils-holgersson-dc.xml`	Metadati Dublin Core / DCTERMS
`xml/nils-holgersson-tei.xml`	Full-text TEI con modello dei fenomeni del testo
`js/data.js`	Dati dei 13 item (testo come risorsa principale) e delle entità da riconciliare
`css/style.css`	Foglio di stile unico
Corrispondenza con le linee guida
Requisito	Dove
Home con architettura visibile	`index.html`: navbar con le voci del sito (Progetto non attivo) e sezioni sul modello dell'esempio. L'architettura estesa e gli standard sono nelle slide
Catalogo con navigazione attiva	`catalogo.html`: menù a tendina, ricerca libera, vista a schede e linea del tempo
Pagina analitica dell'item con aside	`item-nils-holgersson.html`
Pagina dei dati	`dati.html`
Almeno 5 componenti	vedi sotto: sette componenti
Almeno 1 tool per sviluppatori	Leaflet (mappa del viaggio)
Metadati HTML nel corpo + DC nell'head	tabella con attributi RDFa; `<meta name="DC.…">` in `index.html` e nella pagina item
Metadati XML/DC	`xml/nils-holgersson-dc.xml` (link nella pagina item)
XML/TEI	`xml/nils-holgersson-tei.xml` (link nella pagina item)
Autorità e riconciliazione	`dati.html` e commenti `RICONCILIARE` nei due XML
Collegamenti tipizzati	tabella «Collegamenti tipizzati a risorse esterne»
Componenti da descrivere all'orale
Navbar responsive (W3Schools, Responsive Topnav): si comprime in un menu a tendina sotto i 720 px, con pulsante «hamburger» e `aria-expanded`.
Schede / cards (Cards): ogni item del catalogo, generata da JavaScript a partire da `js/data.js`.
Filtro e ricerca (Filter List / Search): menù a tendina per autore, titolo, paese, anno e tema (si riempiono dai dati) e ricerca libera senza distinzione di accenti.
Accordion (Collapsibles): pagina item.
Tab (Tabs): testo, immagini, video nella pagina item, con navigazione da tastiera.
Modale (Modal Box): scheda rapida nel catalogo e ingrandimento delle immagini.
Breadcrumb (Breadcrumbs): percorso in ogni pagina interna
