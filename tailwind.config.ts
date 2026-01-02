import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // LandGuard Brand Colors
                navy: {
                    DEFAULT: '#002D50',
                    50: '#E6EBF0',
                    100: '#CCD7E1',
                    500: '#002D50',
                    600: '#002442',
                    700: '#001B33',
                    900: '#000F1A',
                },
                gold: {
                    DEFAULT: '#C5A059',
                    50: '#FAF7F0',
                    100: '#F5EFE1',
                    200: '#EBE0C4',
                    400: '#D4B574',
                    500: '#C5A059',
                    600: '#A78643',
                    700: '#7D6432',
                },
                text: {
                    DEFAULT: '#333333',
                    light: '#666666',
                    lighter: '#999999',
                },
                border: '#E2E8F0', // Slate-200 for default borders
            },
            fontFamily: {
                sans: ['Sarabun', 'IBM Plex Sans Thai', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                'glow-gold': '0 0 20px rgba(197, 160, 89, 0.3)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
