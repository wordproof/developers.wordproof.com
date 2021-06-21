module.exports = {
    title: 'WordProof Developers',
    description: 'Everything you need to know about developing for WordProof',
    themeConfig: {
        sidebar: [
            ['/uikit/', 'UIKit'],
            ['/rest-api/', 'API'],
            ['/schema/', 'Schema'],
            ['/plug-and-play/', 'Plug and Play'],
        ],
        nav: [

            { text: '🎓 Academy', link: 'https://wordproof.com/academy' },
            { text: '💅🏻 UIKit', link: 'https://uikit.wordproof.com' },
        ],
    },
    head: [
        ['link', { rel: 'icon', href: '' }]
    ],

    dest: 'public',
}