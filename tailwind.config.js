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
            colors: {},
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            backgroundColor: {
                putih: "#FDFDFD",
            },
            colors: {

                secondaryPost: "#FFFFFF",
                thirdPost: "#DDDDDD",
                // Pakai colors dari const di atas
                blurPost: "#D9D9D9",

                primary: "#4C9BF5",
                disabled: "#736D6D",
                hoverBackground: "#7EB8F8",

                clickedBackground: "#0974F1",
                disabledBackground: "#EFF2FF",
                counselingBackground: "#D7E8FC",
                whiteFABackground: "#FAFAFA",
                cardBlue: "#B2D4FB",
                putih: "#FDFDFD",
                hitam: "#333333",
            },

            screens: {
                xs: "320px",
            },

        },
    },

    daisyui: {
        themes: false,
    },

    plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
