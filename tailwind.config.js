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
        gridTemplateColumns: {
            'min-content': 'min-content',
        },
        backgroundImage: {
            card:
                'linear-gradient(to bottom,rgba(255, 255, 255, 0) 52%,rgba(0, 0, 0, 1) 100%);',
        },
        padding: {
            card: '12px 12px 8px',
        },
        fontSize: {
            'card-title': '14px',
            'card-helper': '10px',
        },
    },
    colors: {
        font: '#002F61',
        blue: '#005288',
        blue: {
            DEFALUT: '#005288',
            dark: '#002F61',
        },
        gray: '#F8F9FB',
        green: '#06D6A0',
        red: '#EF476F',
        white: '#FFF',
    },
    fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
    },
    fontSize: {
        base: '1rem',
        navigation: '1.5rem',
        body: '2rem',
        title: '3rem',
    },
    spacing: {
        0.5: '0.5rem',
        1: '1rem',
        2: '2rem',
    },
    borderRadius: {
        DEFAULT: '10px',
        circle: '50px',
    },
    screens: {
        sm: { max: '428px' },
        md: { min: '429px', max: '768px' },
        lg: { min: '769px', max: '1024px' },
        xl: { min: '1025px', max: '1280px' },
        '2xl': { min: '1281px', max: '1920px' },
    },
};
