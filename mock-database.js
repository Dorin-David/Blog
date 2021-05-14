/* Mock database before real database is active */

export const database = [
    {
        title: 'Alan Watts',
        header: '\"Vuoto e meraviglioso\"',
        author: 'Dorin David',
        author_path: '/autori/dorin_david',
        article_path: '/articoli/zen-alan-watts',
        img: '/assets/Alan-Watts.jpg',
        description: 'Lorem ipsum this is a test',
        //set logic for tags
        tags: ['dorin david', 'filosofia', 'zen', 'alan watts', ]
    },
    {
        title: 'Witold Gombrowicz',
        header: 'Enfant terrible',
        author: 'Dorin David',
        author_path: 'autori/dorin_david',
        article_path: '/articoli/gombrowicz',
        img: '/assets/gombrowicz.jpg',
        description: 'Witold Gombrowicz was bla bla, and therefore to be read because of lalaa'
    },
    {
        title: 'Le voci',
        header: 'Racconto',
        author: 'Dorin David',
        author_path: 'autori/dorin_david',
        article_path: '/racconti/le-voci-dorin-david',
        img: '/assets/self-portrait-with-burning-cigarette-edvard-munch.jpg',
        description: `Il peggio era quando il loro vociare si mischiava a quello dei vivi;
        e dato che il tono e le sembianze (quando ne avevano) erano, pure, simili, 
        non riusciva piu' a distinguere gli uni dagli altri, e quando rispondeva, o 
        annuiva, non avrebbe piu' saputo dire a chi aveva risposto, a chi aveva annuito.`
    }
]

export const authors = {
    'Dorin David': {
        name: 'Dorin David',
        img: '/assets/authors/Dorin_David.jpg',
        bio: 'Passionate about writing since I was a child, I want to share lorem ipsum ipsorum. And this is how I begun.',
        author_path: '/autori/dorin_david'
    }
}
