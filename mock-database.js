/* Mock database before real database setup */


export const database = [
    {
        title: 'Adorno e \"Finale di Partita\"',
        author: 'Luigi Rizzo',
        author_path: 'autori/luigi_rizzo',
        article_path: '/articoli/finale-di-partita',
        // img: '/assets/parasite.jpg',
        description: `La tendenza esistenzialista mira ad un conformismo, ad un “dover essere quel che si è” dando così «accessibilità di ogni spiegazione logica». 
        In opposizione a questo atteggiamento Beckett invece riesce a svincolare da secondi fini il procedimento poetico. `,
    },
    {
        title: 'Parasite',
        author: 'Bruno Lusardi',
        author_path: 'autori/bruno_lusardi',
        article_path: '/articoli/parasite',
        img: '/assets/parasite.jpg',
        description: `Probabilmente, per comprendere le radici di certa violenza presente, ad
        esempio, nel cinema orientale, bisognerebbe conoscere un
        po’ di Oriente.`,
    },
    {
        title: 'Monella',
        author: 'Bruno Lusardi',
        author_path: 'autori/bruno_lusardi',
        article_path: '/articoli/monella',
        img: '/assets/tinto-brass-monella.jpg',
        description: `Brass possiede un merito: la sua camera è al servizio del
        Corpo della Donna, figurazione di matrice pittorica. Forse
        nessun altro si è crogiolato tanto, così ridente e appagato,
        nel filmare un bel culo di donna come se esso fosse
        l’incarnazione della Verità`,
    },
    {
        title: 'The Naked Lunch',
        author: 'Bruno Lusardi',
        author_path: 'autori/bruno_lusardi',
        article_path: '/articoli/naked-lunch',
        img: '/assets/burroughs_cronnenberg.jpeg',
        description: `David Cronenberg, canadese interessato alla scienza ed alla
        fantascienza, agli sbocchi della carne ed alla sua contaminazione, vide in William Burroughs un magnete –
        ovvero un potente centro di fascinazione.`,
        position: 'center bottom'
    },
    {
        title: 'Pulp Fiction',
        author: 'Bruno Lusardi',
        author_path: 'autori/bruno_lusardi',
        article_path: '/articoli/pulp-fiction',
        img: '/assets/pulp_fiction.jpeg',
        description: `Siamo negli anni ’90, e in pochi si possono vantare di poter scrivere e dirigere una simile, geniale e deliziosa cazzata.`,
        
    },
    {
        title: `L'artista`,
        header: 'Ovvero il lebbroso',
        author: 'Dorin David',
        author_path: 'autori/dorin_david',
        article_path: '/articoli/artista',
        img: '/assets/prometheus-1883_bocklin.jpg',
        description: `"E’ proprio nella misura in cui sono inconsci, semplici strumenti, che il loro lavoro è fondamentale; 
        essi sono un ponte tra l’ordinario e il Mistero."`,
        position: 'center top'

    },
    {
        title: 'Le voci',
        header: 'Racconto',
        author: 'Dorin David',
        author_path: 'autori/dorin_david',
        article_path: '/racconti/le-voci-dorin-david',
        img: '/assets/night-1890.jpg',
        description: `Il peggio era quando il loro vociare si mischiava a quello dei vivi;
        e dato che il tono e le sembianze (quando ne avevano) erano, pure, simili, 
        non riusciva piu' a distinguere gli uni dagli altri.`,
        position: 'center -40px'

    },
    {
        title: 'La Ruota',
        header: 'Ma in fondo, vogliamo star meglio?',
        author: 'Dorin David',
        author_path: 'autori/dorin_david',
        article_path: '/articoli/la-ruota',
        img: '/assets/ferris-wheel-in-the-tuileries-1905.jpg',
        description: `Le leggi dell’universo non cambieranno mai, per i pezzenti e per gli dèi: prima in alto, poi in basso, la Ruota gira e noi siamo da capo. 
        Comprenderlo? Abbiamo la memoria corta… `,
    },
    {
        title: 'Segni',
        header: 'Pensieri in una notte di primavera',
        author: 'Dorin David',
        author_path: 'autori/dorin_david',
        article_path: '/articoli/segni',
        img: '/assets/memory-1948_magritte.jpg',
        description: `E mi sembra tutto bello, tutto necessario, nella mia stupenda casa in una notte primaverile, chissà che cosa stanno faccendo tutti, 
        a cosa pensano, con chi sono.  `,
        position: 'center bottom'
    },
    {
        title: 'Alan Watts',
        header: '\"Vuoto e meraviglioso\"',
        author: 'Dorin David',
        author_path: '/autori/dorin_david',
        article_path: '/articoli/zen-alan-watts',
        img: '/assets/Alan-Watts.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a velit gravida, tristique leo quis, lacinia quam. Praesent a metus quis turpis blandit tristique. Cras vitae urna vulputate, porttitor elit et, luctus mi.',
        //set logic for tags
        tags: ['dorin david', 'filosofia', 'zen', 'alan watts',]
    },
    {
        title: 'Witold Gombrowicz',
        header: 'Enfant terrible',
        author: 'Dorin David',
        author_path: 'autori/dorin_david',
        article_path: '/articoli/gombrowicz',
        img: '/assets/gombrowicz.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a velit gravida, tristique leo quis, lacinia quam. Praesent a metus quis turpis blandit tristique. Cras vitae urna vulputate, porttitor elit et, luctus mi.',
        position: 'center bottom'
    }
]

export const authors = {
    'Dorin David': {
        name: 'Dorin David',
        img: '/assets/authors/Dorin_David.jpg',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a velit gravida, tristique leo quis, lacinia quam. Praesent a metus quis turpis blandit tristique. Cras vitae urna vulputate, porttitor elit et, luctus mi.',
        author_path: '/autori/dorin_david'
    },
    'Bruno Lusardi': {
        name: 'Bruno Lusardi',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a velit gravida, tristique leo quis, lacinia quam. Praesent a metus quis turpis blandit tristique. Cras vitae urna vulputate, porttitor elit et, luctus mi.',
        author_path: '/autori/bruno_lusardi'
    },
    'Luigi Rizzo': {
        name: 'Luigi Rizzo',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a velit gravida, tristique leo quis, lacinia quam. Praesent a metus quis turpis blandit tristique. Cras vitae urna vulputate, porttitor elit et, luctus mi.',
        author_path: '/autori/luigi_rizzo'
    }
}
