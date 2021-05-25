module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#F3F6F4',
                fontColorlight: '#7EA08B',
                fontColordark: '#3D5144',
                barBgc: '#D8E2DC',
                redBgc: '#FFCAD4',
                textBgc: '#fff',
            },
            fontFamily: {
                title: ['Caveat'],
                fonts: ['Rubik'],
            },
            spacing: {
                half: '50vh',
                h60Screen:'60vh',
                splitter:'2px'
            },
            zIndex: {
                '-10': '-10',
               }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}