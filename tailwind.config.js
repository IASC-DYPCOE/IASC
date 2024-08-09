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
  },
  plugins: [require("flowbite/plugin")],
};
