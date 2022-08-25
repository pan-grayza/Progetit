/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '32rem',

            md: '36rem',
        },
        extend: {
            spacing: {
                sidebarRightPosition:
                    'calc(32rem + calc(calc(100vw - 32rem) / 2))',
                searchLeftPosition:
                    'calc(32rem + calc(calc(100vw - 32rem) / 2))',
                navWidth: 'calc(32rem - 3px)',
            },
            backgroundImage: {
                signUpWaves: "url('../assets/SVGs/Textures/SignUpWaves.svg')",
            },
        },
        colors: {
            transparent: 'transparent',
            white: '#ffffff',
            halfTransperentWhite: 'rgb(255, 255, 255, 50%)',
            greenGray: 'rgb(230, 240, 240, 100%)',
            halfTransperentGreenGray: 'rgb(230, 240, 240, 50%)',
            halfTransperentGray: 'rgb(240, 240, 240, 50%)',

            midnight: {
                100: 'rgb(25, 50, 60)',
                75: 'rgb(25, 50, 60, 75%)',
                50: 'rgb(25, 50, 60, 50%)',
                25: 'rgb(25, 50, 60, 25%)',
            },
            lightBlue: {
                100: 'rgb(220, 239, 255)',
                75: 'rgb(220, 239, 255, 75%)',
                50: 'rgb(220, 239, 255, 50%)',
                25: 'rgb(220, 239, 255, 25%)',
            },
            seaGreen: {
                100: 'rgb(27, 153, 139)',
                75: 'rgb(27, 153, 139, 75%)',
                50: 'rgb(27, 153, 139, 50%)',
                25: 'rgb(27, 153, 139, 25%)',
            },
            lightGreen: '#C2F970',
            gray: '#D9D9D9',
        },
    },
    plugins: [
        function ({addVariant}) {
            addVariant('child', '& > *')
            addVariant('child-hover', '& > *:hover')
            addVariant('hover-child', '&:hover > *')
            addVariant('grand-child', '& > * > *')
            addVariant('grand-child-hover', '& > * > *:hover')
            addVariant('hover-grand-child', '&:hover > * > *')
        },
    ],
}
