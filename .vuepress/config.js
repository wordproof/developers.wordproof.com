module.exports = {
    title: 'WordProof Developers',
    description: 'Everything you need to know about developing for WordProof',
    themeConfig: {
        sidebar: [
            ['/rest-api/', 'API'],
            ['/schema/', 'Schema'],
            ['/ui-kit/', 'UI Kit'],
            ['/plug-and-play/', 'Plug and Play'],
        ],
        nav: [

            { text: '🎓 Academy', link: 'https://wordproof.com/academy' },
            { text: '💅🏻 UI Kit', link: 'https://uikit.wordproof.com' },
        ],
    },
    head: [
        ['link', { rel: 'icon', href: '' }]
    ],

    dest: 'public',
}