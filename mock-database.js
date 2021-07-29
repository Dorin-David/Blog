/* Mock database before real database setup */

const database = [
    {
        title: `Lo yoga e l'Occidente`,
        author: 'Dorin David',
        header: `Conclusione`,
        author_path: 'dorin_david',
        article_path: '/articoli/yoga-e-occidente/parte3',
        img: '/assets/jung_india.jpg',
        description: `Quel che dovrebbe fare l'occidentale. Analogie tra lo yoga e la psicologia moderna.`,
        category: 'filosofia',
        collection: "Lo yoga e l'Occidente",
        collection_path: '/raccolte/yoga-e-occidente',
        orderCollection: 2,
        previousArticle: '/articoli/yoga-e-occidente/parte2',
        nextArticle: null,
        position: 'top'
    },   
    {
        title: `Carnage`,
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/carnage',
        img: '/assets/carnage.jpg',
        description: `Rappresentazione della fragilità del rapporto, dell’ipocrisia
        del rapporto, dell’egoismo del rapporto; si attribuiscano i tre
        sostantivi anche al singolo, e si avrà così una buona
        panoramica su Carnage`,
        category: 'cinema'
    },
    {
        title: `Lo yoga e l'Occidente`,
        author: 'Dorin David',
        header: `Yoga: religione e scienza`,
        author_path: 'dorin_david',
        article_path: '/articoli/yoga-e-occidente/parte2',
        img: '/assets/jung_india.jpg',
        description: `Mitologemi, simboli e archetipi. Sui pericoli di indebite appropriazioni spirituali. `,
        category: 'filosofia',
        collection: "Lo yoga e l'Occidente",
        collection_path: '/raccolte/yoga-e-occidente',
        orderCollection: 2,
        previousArticle: '/articoli/yoga-e-occidente',
        nextArticle: '/articoli/yoga-e-occidente/parte3',
        position: 'top'
    },
    {
        title: `Film Blu`,
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/film-blu',
        img: '/assets/film-blu.png',
        description: `Film Blu, presenta una moglie compositrice che perde un
        marito compositore. Ella, completamente distrutta, cerca di
        cambiare vita ovvero di ricominciare. Si trasferisce – e qui Kieslowski 
        cala l’asso del genio.`,
        category: 'cinema',
        position: 'right'
    },
    {
        title: `Lo yoga e l'Occidente`,
        author: 'Dorin David',
        header: `La scissione dello spirito occidentale`,
        author_path: 'dorin_david',
        article_path: '/articoli/yoga-e-occidente',
        img: '/assets/jung_india.jpg',
        description: `Carl Gustav Jung sulle ragioni storiche e psicologicche dell'incontro affascinante tra l'Occidente e lo Yoga`,
        category: 'filosofia',
        collection: "Lo yoga e l'Occidente",
        collection_path: '/raccolte/yoga-e-occidente',
        orderCollection: 1,
        previousArticle: null,
        nextArticle: '/articoli/yoga-e-occidente/parte2',
        position: 'top'
    },
    {
        title: `Una giornata particolare`,
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/una-giornata-particolare',
        img: '/assets/una-giornata-particolare.jpg',
        description: `Una trista casalinga ed un triste propagandista: come può la giornata
        non essere particolare?`,
        category: 'cinema'
    },
    {
        title: `Eraserhead`,
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/eraserhead',
        img: '/assets/eraserhead.jpg',
        description: `Guardando fotogramma per fotogramma, che
        assieme compongono sequenza dopo sequenza, si ha la
        conferma, oltre che la sensazione, che il film sia un
        ricettacolo di oscurità.`,
        category: 'cinema'
    },
    {
        title: `The Halloween`,
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/the-halloween',
        img: '/assets/halloween_carpenter.jpeg',
        description: `The Halloween di John Carpenter, sebbene dicasi pure
        slasher movie, è un horror movie, che nella storiografia del
        cinema ricopre un ruolo importante: sparti-acque; matrice;
        unicum; ispiratore; eccetera: quello che volete.`,
        category: 'cinema'
    },
    {
        title: `Murder on a train`,
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/murder-on-a-train',
        img: '/assets/murder-on-a-train.jpg',
        description: `Pollock, tramite la consapevolezza dei
        desideri e della modestia del pubblico, acquistò da Agatha
        Christie molti litri di tè ma pochi litri di sangue.`,
        category: 'cinema'
    },
    {
        title: `I hired a contract killer`,
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/i-hired-a-contract-killer',
        img: '/assets/i-hired-a-contract-killer.png',
        description: `La storia di questo film può essere
        presto detta: il protagonista vuole farsi fuori ma non riesce,
        allora assume personalmente un sicario...`,
        category: 'cinema'
    },
    {
        title: 'Adorno e \"Finale di Partita\"',
        header: '(parte sesta)',
        author: 'Luigi Rizzo',
        author_path: 'luigi_rizzo',
        article_path: '/articoli/finale-di-partita/parte6',
        description: `Le conversazioni e le azioni dei personaggi di Fin de partie, dice Adorno, 
        sono «strappate al flusso della schizofrenia» al fine di portare a mera superfluità «ciò che il soggetto è comunque ancora in grado di fare».`,
        category: 'filosofia',
        collection: 'Adorno legge Beckett',
        collection_path: '/raccolte/adorno-legge-beckett',
        orderCollection: 6,
        previousArticle: '/articoli/finale-di-partita/parte5',
        nextArticle: null
    },
    {
        title: `Mircea Eliade - "Lo Yoga"`,
        author: 'Dorin David',
        header: `Introduzione (parte seconda)`,
        author_path: 'dorin_david',
        article_path: '/articoli/lo-yoga/parte2',
        img: '/assets/mircea_eliade.jpg',
        description: `Per cercare di vedere oltre l’esistenza condizionata, millenni prima della psicologia del profondo, i saggi indiani hanno esplorato le zone più profonde 
        e oscure dell’inconscio.`,
        category: 'filosofia',
        collection: 'Lo Yoga - Mircea Eliade',
        collection_path: '/raccolte/lo-yoga-mircea-eliade',
        orderCollection: 2,
        previousArticle: '/articoli/lo-yoga',
        nextArticle: null
    },
    {
        title: `Kynodontas`,
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/kynodontas',
        img: '/assets/kynodontas.jpg',
        description: `  Due sorelle e il fratello sono nati e cresciuti nella loro casa, e lì ancora vivono, assieme ai genitori, crescono e si
        sviluppano. La casa è recintata e, ai figli ormai “adulti”, è severamente vietato uscire dal cancello o avere qualsiasi contatto con il mondo fuori dalla casa: un fratello che ha
        infranto le regole, è uscito e non ha fatto più ritorno.`,
        category: 'cinema'
    },
    {
        title: `Mircea Eliade - "Lo Yoga"`,
        author: 'Dorin David',
        header: `Introduzione (parte prima)`,
        author_path: 'dorin_david',
        article_path: '/articoli/lo-yoga',
        img: '/assets/mircea_eliade.jpg',
        description: `La vecchia e stanca Europa poteva iniziare a “comprendere l’orizzonte spirituale dei ‘primitivi’, 
        la struttura dei loro simboli, la funzione dei loro miti, la maturità delle loro mistiche”. `,
        category: 'filosofia',
        collection: 'Lo Yoga - Mircea Eliade',
        collection_path: '/raccolte/lo-yoga-mircea-eliade',
        orderCollection: 1,
        previousArticle: null,
        nextArticle: '/articoli/lo-yoga/parte2'
      
    },
    {
        title: `Chant d'Hiver`,
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/chant-d-hiver',
        img: '/assets/chant-dhiver.jpg',
        description: `In realtà Iosseliani sa che il vero inverno è l’unica stagione, che macina, trita e sigilla; ciò comunque non depenna un
        sorriso, né una scopata, ci mancherebbe.`,
        category: 'cinema'
    },
    {
        title: `Sunset Boulevard`,
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/sunset-boulevard',
        img: '/assets/sunset-boulevard.jpg',
        description: `Billy Wilder è il primo che, avendo fra le mani l’arma da
        fuoco e di fronte il nemico, sceglie di sparargli di striscio. Il film, fotogramma per fotogramma, pare costruito per 
        essere uno dei migliori film (se non il migliore) della storia del cinema.`,
        category: 'cinema'
    },
    {
        title: 'Adorno e \"Finale di Partita\"',
        header: '(parte quinta)',
        author: 'Luigi Rizzo',
        author_path: 'luigi_rizzo',
        article_path: '/articoli/finale-di-partita/parte5',
        description: `Beckett fa implodere l’individuo sostanziale della tradizione; insinua la
        non-identità nell’identità e procura ad ogni soggetto una disperata incapacità di riconoscersi
        identico a sé medesimo.`,
        category: 'filosofia',
        collection: 'Adorno legge Beckett',
        collection_path: '/raccolte/adorno-legge-beckett',
        orderCollection: 5,
        previousArticle: '/articoli/finale-di-partita/parte4',
        nextArticle: '/articoli/finale-di-partita/parte6'
    },
    {
        title: 'Le voci',
        header: 'Racconto',
        author: 'Dorin David',
        author_path: 'dorin_david',
        article_path: '/racconti/le-voci',
        img: '/assets/night-1890.jpg',
        description: `Il peggio era quando il loro vociare si mischiava a quello dei vivi;
        e dato che il tono e le sembianze (quando ne avevano) erano, pure, simili, 
        non riusciva piu' a distinguere gli uni dagli altri.`,
        category: 'letteratura',
        position: 'center -40px'

    },
    {
        title: 'Adorno e \"Finale di Partita\"',
        header: '(parte quarta)',
        author: 'Luigi Rizzo',
        author_path: 'luigi_rizzo',
        article_path: '/articoli/finale-di-partita/parte4',
        description: `Si percepisce in maniera piuttosto evidente che nella lettura degli
        scritti beckettiani sia stato omesso un qualcosa, si intravede l’alone di una mancanza. Ma il fatto
        che in questo caso venga sottratto un qualcosa, secondo Adorno, presuppone che quel qualcosa
        sopravvive proprio perché è stato evitato, eliminato.`,
        category: 'filosofia',
        collection: 'Adorno legge Beckett',
        collection_path: '/raccolte/adorno-legge-beckett',
        orderCollection: 4,
        previousArticle: '/articoli/finale-di-partita/parte3',
        nextArticle: '/articoli/finale-di-partita/parte5'
    },
    {
        title: 'Adorno e \"Finale di Partita\"',
        header: '(parte terza)',
        author: 'Luigi Rizzo',
        author_path: 'luigi_rizzo',
        article_path: '/articoli/finale-di-partita/parte3',
        description: `Il contesto in cui si svolge il dramma lascia presagire che sia post-apocalittico. 
        I dialoghi spesso inconsistenti dei due personaggi, Clov e Hamm, lasciano intendere
        silentemente di essere sopravvissuti ad una catastrofe.`,
        category: 'filosofia',
        collection: 'Adorno legge Beckett',
        collection_path: '/raccolte/adorno-legge-beckett',
        orderCollection: 3,
        previousArticle: '/articoli/finale-di-partita/parte2',
        nextArticle: '/articoli/finale-di-partita/parte4'
    },
    {
    title: `Ultimo tango a Parigi`,
    author: 'Bruno Lusardi',
    author_path: 'bruno_lusardi',
    article_path: '/articoli/ultimo-tango-a-parigi',
    img: '/assets/ultimo-tango.jpg',
    description: `Lui, lei, si incontrano come per magia. Lei è giovane e
    perduta, lui è vecchio e perduto: inizia una relazione dalle
    tinte gerontofile all’insegna dell’erotismo.`,
    category: 'cinema'
},
    {
        title: `L'enfer`,
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/enfer',
        img: '/assets/enfer.jpg',
        description: `L’Enfer  può dirsi opera mancata prima, ed opera malriuscita
        dopo: forse, quindi, un’opera mai realizzata. Qualcuno
        potrebbe dire che questa affermazione non ha alcun senso,
        ma noi, gente saggia e di pace, ce ne faremmo una ragione. `,
        category: 'cinema'
    },
    {
        title: 'Adorno e \"Finale di Partita\"',
        header: '(parte seconda)',
        author: 'Luigi Rizzo',
        author_path: 'luigi_rizzo',
        article_path: '/articoli/finale-di-partita/parte2',
        description: `Il lavoro di demolizione beckettiano si radica in maniera incisiva ed evidente soprattutto nella sfera del linguaggio. 
        Beckett si libera dell’illusione che gli avvenimenti siano di per sé significanti, insinuando volutamente ambiguità e polivalenze 
        che la stessa parola “senso” provoca.`,
        category: 'filosofia',
        collection: 'Adorno legge Beckett',
        collection_path: '/raccolte/adorno-legge-beckett',
        orderCollection: 2,
        previousArticle: '/articoli/finale-di-partita',
        nextArticle: '/articoli/finale-di-partita/parte3'
    },
    {
        title: 'Ordet',
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/ordet',
        img: '/assets/ordet.jpg',
        description: `Ogni vera opera deve possedere un che di
        indicibile, di inafferrabile, un pertugio ripetuto da cui soffia,
        delicato e potente, un vento irresistibile.`,
        category: 'cinema'
    },
    {
        title: 'The killer inside me',
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/the-killer-inside-me',
        img: '/assets/the-killer-inside-me.jpg',
        description: `Il cinema, servendosi delle figure, può presentare o
        mostrare, a noi, il volto dell’assassino. L’assassino, ci dice Thompson (ma anche Winterbottom, trasponendo) è dentro. Il cinema, dentro, non vede: c’è bisogno di altro: c’è
        bisogno che si sia in grado di vedere senza vedere.`,
        category: 'cinema'
    },

    {
        title: 'Adorno e \"Finale di Partita\"',
        header: '(parte prima)',
        author: 'Luigi Rizzo',
        author_path: 'luigi_rizzo',
        article_path: '/articoli/finale-di-partita',
        description: `La tendenza esistenzialista mira ad un conformismo, ad un “dover essere quel che si è” dando così «accessibilità di ogni spiegazione logica». 
        In opposizione a questo atteggiamento Beckett invece riesce a svincolare da secondi fini il procedimento poetico. `,
        category: 'filosofia',
        collection: 'Adorno legge Beckett',
        collection_path: '/raccolte/adorno-legge-beckett',
        orderCollection: 1,
        previousArticle: null,
        nextArticle: '/articoli/finale-di-partita/parte2'
    },
    {
        title: 'Parasite',
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/parasite',
        img: '/assets/parasite.jpg',
        description: `Probabilmente, per comprendere le radici di certa violenza presente, ad
        esempio, nel cinema orientale, bisognerebbe conoscere un
        po’ di Oriente.`,
        category: 'cinema'
    },
    {
        title: 'Monella',
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/monella',
        img: '/assets/tinto-brass-monella.jpg',
        description: `Brass possiede un merito: la sua camera è al servizio del
        Corpo della Donna, figurazione di matrice pittorica. Forse
        nessun altro si è crogiolato tanto, così ridente e appagato,
        nel filmare un bel culo di donna come se esso fosse
        l’incarnazione della Verità.`,
        category: 'cinema'
    },
    {
        title: 'The Naked Lunch',
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/naked-lunch',
        img: '/assets/burroughs_cronnenberg.jpeg',
        description: `David Cronenberg, canadese interessato alla scienza ed alla
        fantascienza, agli sbocchi della carne ed alla sua contaminazione, vide in William Burroughs un magnete –
        ovvero un potente centro di fascinazione.`,
        category: 'cinema',
        position: 'center bottom',
    },
    {
        title: 'Pulp Fiction',
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/pulp-fiction',
        img: '/assets/pulp_fiction.jpeg',
        description: `Siamo negli anni ’90, e in pochi si possono vantare di poter scrivere e dirigere una simile, geniale e deliziosa cazzata.`,
        category: 'cinema'

    },
    {
        title: `L'artista`,
        header: 'Ovvero il lebbroso',
        author: 'Dorin David',
        author_path: 'dorin_david',
        article_path: '/articoli/artista',
        img: '/assets/prometheus-1883_bocklin.jpg',
        description: `"E’ proprio nella misura in cui sono inconsci, semplici strumenti, che il loro lavoro è fondamentale; 
        essi sono un ponte tra l’ordinario e il Mistero."`,
        category: 'letteratura',
        position: 'center top'

    },

    {
        title: 'La Ruota',
        header: 'Ma in fondo, vogliamo star meglio?',
        author: 'Dorin David',
        author_path: 'dorin_david',
        article_path: '/articoli/la-ruota',
        img: '/assets/ferris-wheel-in-the-tuileries-1905.jpg',
        description: `Le leggi dell’universo non cambieranno mai, per i pezzenti e per gli dèi: prima in alto, poi in basso, la Ruota gira e noi siamo da capo. 
        Comprenderlo? Abbiamo la memoria corta… `,
        category: 'letteratura',
    },
    {
        title: 'Segni',
        header: 'Pensieri in una notte di primavera',
        author: 'Dorin David',
        author_path: 'dorin_david',
        article_path: '/articoli/segni',
        img: '/assets/memory-1948_magritte.jpg',
        description: `E mi sembra tutto bello, tutto necessario, nella mia stupenda casa in una notte primaverile, chissà che cosa stanno faccendo tutti, 
        a cosa pensano, con chi sono.`,
        category: 'letteratura',
        position: 'center bottom'
    },
]

const collections = [  {
        collection: "Lo yoga e l'Occidente",
        author: 'Dorin David',
        author_path: '/autori/dorin_david',
        path: '/raccolte/yoga-e-occidente',
        img: '/assets/jung_india.jpg',
        category: 'filosofia',
        description: `In un breve saggio del 1936, Jung esplora i rapporti psicologici e culturali dell'incontro tra l'Occidente e lo yoga...
         mettendo in guardia l'occidentale da appropriazioni indebite.`,
    },
    
    {
        collection: 'Adorno legge Beckett',
        author: 'Luigi Rizzo',
        author_path: '/autori/luigi_rizzo',
        path: '/raccolte/adorno-legge-beckett',
        category: 'filosofia',
        description: `Quello di Adorno è un tentativo. Il tentativo finalizzato a comprendere l’opera di chi sosteneva di
        preferire quegli artisti “destinati” a non aver nulla da esprimere e di non essere assolutamente
        tenuti a farlo. L’opera qui posta in esame è quella di Samuel Beckett.`,
    },
    {
        collection: 'Lo Yoga - Mircea Eliade',
        author: 'Dorin David',
        author_path: '/autori/dorin_david',
        path: '/raccolte/lo-yoga-mircea-eliade',
        img: '/assets/yoga_tantra.jpg',
        category: 'filosofia',
        description: `Il saggio di Mircea Eliade che ha portato in Europa la concezione dello Yoga come valida mistica e filosofia.`,
    }
]

function authorHasCollection(author) {
    return collections.some(collection => collection.author === author)
}

const authors = {
    'Dorin David': {
        name: 'Dorin David',
        img: '/assets/authors/Dorin_David.jpg',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a velit gravida, tristique leo quis, lacinia quam. Praesent a metus quis turpis blandit tristique. Cras vitae urna vulputate, porttitor elit et, luctus mi.',
        author_path: '/autori/dorin_david',
        hasCollection: authorHasCollection('Dorin David')
    },
    'Bruno Lusardi': {
        name: 'Bruno Lusardi',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a velit gravida, tristique leo quis, lacinia quam. Praesent a metus quis turpis blandit tristique. Cras vitae urna vulputate, porttitor elit et, luctus mi.',
        author_path: '/autori/bruno_lusardi',
        hasCollection: authorHasCollection('Bruno Lusardi')
    },
    'Luigi Rizzo': {
        name: 'Luigi Rizzo',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a velit gravida, tristique leo quis, lacinia quam. Praesent a metus quis turpis blandit tristique. Cras vitae urna vulputate, porttitor elit et, luctus mi.',
        author_path: '/autori/luigi_rizzo',
        hasCollection: authorHasCollection('Luigi Rizzo')
    }
}

export { database, collections, authors }