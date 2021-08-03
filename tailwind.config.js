// imports
// import { fontWeight } from 'tailwindcss/defaultTheme';

export const purge = ['./**/*.html'];
export const darkMode = false;
export const theme = {
    extend: {
        minWidth: {
            screen: '360px',
        },
        maxWidth: {
            screen: '1920px',
        },
        width: {
            inherit: 'inherit',
        },
        height: {
            inherit: 'inherit',
        },
        margin: {
            center: '0 auto',
        },
        fontWeight: {
            inherit: 'inherit',
        },
    },
    colors: {
        primary: {
            DEFAULT: '#35495E',
            soft: '#E6EEFF',
        },
    },
    fontFamily: {
        base: ['Dosis', 'sans-serif'],
        secondary: ['OpenSans', 'sans-serif'],
    },
    fontSize: {
        base: '1rem',
        title: '4rem',
    },
    spacing: {
        '1/5': '1.5rem',
        1: '1rem',
        2: '2rem',
    },
    borderRadius: {
        DEFAULT: '10px',
    },
    screens: {
        sm: { max: '428px' },
        md: { min: '429px', max: '768px' },
        lg: { min: '769px', max: '1024px' },
        xl: { min: '1025px', max: '1280px' },
        '2xl': { min: '1281px', max: '1920px' },
    },
};
export const variants = {
    extend: {},
};
export const plugins = [];
