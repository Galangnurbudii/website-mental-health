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
                primary: "#246CBE",
                putih: "#FDFDFD",
                hitam: "#333333",
                primaryDisabled: "#EFF2FF",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            backgroundColor: {
                putih: "#FDFDFD",
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
