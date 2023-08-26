/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {

                    "primary": "#1F8881",

                    "secondary": "#5E5E5E",

                    "accent": "#8be589",

                    "neutral": "#FAFAFA",

                    "base-100": "#FAFAFA",

                    "info": "#6379d9",

                    "success": "#0d6348",

                    "warning": "#91580d",

                    "error": "#db2962",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
}

