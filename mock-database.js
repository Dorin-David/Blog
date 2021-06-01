/* Mock database before real database setup */


const database = [{
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
        article_path: '/articoli/finale-di-partita-pt2',
        description: `Il lavoro di demolizione beckettiano si radica in maniera incisiva ed evidente soprattutto nella sfera del linguaggio. 
        Beckett si libera dell’illusione che gli avvenimenti siano di per sé significanti, insinuando volutamente ambiguità e polivalenze 
        che la stessa parola “senso” provoca`,
        category: 'filosofia',
        collection: 'Adorno legge Beckett',
        orderCollection: 2
    },
    {
        title: 'Ordet',
        author: 'Bruno Lusardi',
        author_path: 'bruno_lusardi',
        article_path: '/articoli/ordet',
        img: '/assets/ordet.jpg',
        description: `Ogni vera opera deve possedere un che di
        indicibile, di inafferrabile, un pertugio ripetuto da cui soffia,
        delicato e potente, un vento irresistibile`,
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
        article_path: '/articoli/finale-di-partita-pt1',
        description: `La tendenza esistenzialista mira ad un conformismo, ad un “dover essere quel che si è” dando così «accessibilità di ogni spiegazione logica». 
        In opposizione a questo atteggiamento Beckett invece riesce a svincolare da secondi fini il procedimento poetico. `,
        category: 'filosofia',
        collection: 'Adorno legge Beckett',
        orderCollection: 1
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
        l’incarnazione della Verità`,
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
        title: 'Le voci',
        header: 'Racconto',
        author: 'Dorin David',
        author_path: 'dorin_david',
        article_path: '/racconti/le-voci-dorin-david',
        img: '/assets/night-1890.jpg',
        description: `Il peggio era quando il loro vociare si mischiava a quello dei vivi;
        e dato che il tono e le sembianze (quando ne avevano) erano, pure, simili, 
        non riusciva piu' a distinguere gli uni dagli altri.`,
        category: 'letteratura',
        position: 'center -40px'

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
        a cosa pensano, con chi sono.  `,
        category: 'letteratura',
        position: 'center bottom'
    },
    {
        title: 'Alan Watts',
        header: '\"Vuoto e meraviglioso\"',
        author: 'Dorin David',
        author_path: 'dorin_david',
        article_path: '/articoli/zen-alan-watts',
        img: '/assets/Alan-Watts.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a velit gravida, tristique leo quis, lacinia quam. Praesent a metus quis turpis blandit tristique. Cras vitae urna vulputate, porttitor elit et, luctus mi.',
        category: 'filosofia',
        tags: ['dorin david', 'filosofia', 'zen', 'alan watts',]
    },
    {
        title: 'Witold Gombrowicz',
        header: 'Enfant terrible',
        author: 'Dorin David',
        author_path: 'dorin_david',
        article_path: '/articoli/gombrowicz',
        img: '/assets/gombrowicz.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a velit gravida, tristique leo quis, lacinia quam. Praesent a metus quis turpis blandit tristique. Cras vitae urna vulputate, porttitor elit et, luctus mi.',
        category: 'letteratura',
        position: 'center bottom'
    }
]

const collections = [
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
    // {
    //     collection: 'Lo Yoga',
    //     author: 'Dorin David',
    //     author_path: '/autori/dorin_david',
    //     path: '/raccolte/adorno-legge-beckett',
    //     img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1173551320l/302434.jpg',
    //     category: 'filosofia',
    //     description: `Il saggio di Mircea Eliade che ha portato in Europa la concezione dello Yoga come valida mistica`,
    // }
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