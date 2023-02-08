# unocss-preset-scrollbar-hide
UnoCSS preset for hide scrollbars, although the element can still be scrolled if the element's content overflows. Part of the [UnoCSS Community Presets](https://github.com/unocss/unocss#community-presets).

- same as [tailwind-scrollbar-hide](https://github.com/reslear/tailwind-scrollbar-hide)


[![npm](https://img.shields.io/npm/v/unocss-preset-scrollbar-hide)](https://www.npmjs.com/package/unocss-preset-scrollbar-hide)
![npm](https://img.shields.io/npm/dt/unocss-preset-scrollbar-hide)
![npm](https://img.shields.io/npm/dw/unocss-preset-scrollbar-hide)
![Dependents (via libraries.io)](https://img.shields.io/librariesio/dependents/npm/unocss-preset-scrollbar-hide?0)
[![install size](https://packagephobia.com/badge?p=unocss-preset-scrollbar-hide)](https://packagephobia.com/result?p=unocss-preset-scrollbar-hide)
<!-- [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) -->

![unocss-preset-scrollbar-hide animation demo](https://user-images.githubusercontent.com/12596485/217338621-876e1a28-fd49-4135-b6bf-e2f45da49ca6.gif)

[Live demo](https://reslear.github.io/packages/tailwind-scroll-hide/index.html)


## Installation

Install the preset from npm:

```sh
# Using npm
npm install unocss-preset-scrollbar-hide

# Using Yarn
yarn add unocss-preset-scrollbar-hide

# Using pnpm
pnpm add unocss-preset-scrollbar-hide
```

Then add the plugin to your `tailwind.config.js` file:

```ts
// unocss.config.ts
import { presetScrollbarHide } from 'unocss-preset-scrollbar-hide'

export default defineConfig({
  // ...
  presets: [
    // ...
    presetScrollbarHide()
  ],
})
```

## Usage

Use in you template `scrollbar-hide` for visual hiding scrollbar

```html
<div class="w-4 scrollbar-hide">...</div>
```

## License

[MIT](./LICENSE)
