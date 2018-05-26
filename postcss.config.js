const tailwind = require('tailwindcss')
const cssnext = require('postcss-cssnext')

module.exports = {
    plugins: [
        tailwind('./tailwind.config.js'),
        cssnext()
    ]
}
