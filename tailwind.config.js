/** @type {import('tailwindcss').Config} */
// npx tailwindcss -i ./iascweb/iascweb/static/css/input.css -o ./iascweb/iascweb/static/css/output.css --minify
module.exports = {
  content: [
    "./iascweb/website/templates/*.html",
    "./static/js/**/*.js",
    "./iascweb/iascweb/static/css/*.css",

    // Add other paths where Tailwind CSS classes might be used
  ],
  theme: {
    extend: {},
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [require("flowbite/plugin")],
};
