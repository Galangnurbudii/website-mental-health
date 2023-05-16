const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            backgroundColor: {
                putih: "#FDFDFD",
            },
            colors: {
                primaryPost: '#4C9BF5',
                secondaryPost: '#FFFFFF',
                thirdPost: '#DDDDDD',
                fourthPost: "#4C9BF5",
                // Pakai colors dari const di atas
                blurPost: "#D9D9D9",
                
                primary: '#4C9BF5',
                disabled: '#736D6D',
                hoverbBackground: '#7EB8F8',
                clickedBackground: '#0974F1',
                disabledBackground: '#EFF2FF',
                counselingBackground: '#D7E8FC',
                whiteFABackground: "#FAFAFA",
                cardBlue: "#B2D4FB",
            },
            screens: {
                'xs': '320px',
                'sm': '668px',
                'md': '896px',
                'lg': '1181px',
                'xl': '1080px',
                '2xl': '1536px',
                // 1180 x 880
            },
        },
    },

    daisyui: {
        themes : false
    },
    
    plugins: [require("@tailwindcss/forms"), require("daisyui")],

};
