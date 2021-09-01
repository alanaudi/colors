# Tailwindcss Colors

![Copic Name](screenshot/copic-with-name.png)
![Copic Code](screenshot/copic-with-code.png)

# Color Sets
- [x] [Copic 358 Colors](https://copic.jp/pdf/copic-catalog-en.pdf)
  - [x] name supported
  - [x] color system code supported
- [ ] Pantone
- [ ] Morandi

## Usage
- Installation
```sh
# npm
npm install @alanaudi/tailwindcss-colors
# yarn
yarn add @alanaudi/tailwindcss-colors
```

- Configuration
```js
// tailwind.config.js
const copicColors = require('@alanaudi/tailwindcss-colors')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,css,ts}'],
  },
  darkMode: class, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...copicColors
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

```
