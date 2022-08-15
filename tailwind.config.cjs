/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            white: '#ffffff',
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
