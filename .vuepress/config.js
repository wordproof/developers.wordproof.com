module.exports = {
    title: 'WordProof Developers',
    description: 'Everything you need to know about developing for WordProof',
    themeConfig: {
        sidebar: [
            ['/rest-api/', 'API'],
            ['/schema/', 'Schema'],
            ['/plug-and-play/', 'Plug and Play'],
        ],
        nav: [

            { text: '🎓 Academy', link: 'https://wordproof.com/academy' },
        ],
    },
    head: [
        ['link', { rel: 'icon', href: '' }]
    ],

    dest: 'public',
}