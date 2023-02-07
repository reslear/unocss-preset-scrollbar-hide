# unocss-preset-scrollbar-hide
unocss preset for hide scrollbars, although the element can still be scrolled if the element's content overflows.

same as [tailwind-scrollbar-hide](https://github.com/reslear/tailwind-scrollbar-hide)

<!--
[![npm](https://img.shields.io/npm/v/tailwind-scrollbar-hide)](https://www.npmjs.com/package/tailwind-scrollbar-hide)
![npm](https://img.shields.io/npm/dt/tailwind-scrollbar-hide)
![npm](https://img.shields.io/npm/dw/tailwind-scrollbar-hide)
![Dependents (via libraries.io)](https://img.shields.io/librariesio/dependents/npm/tailwind-scrollbar-hide?0)
[![install size](https://packagephobia.com/badge?p=tailwind-scrollbar-hide)](https://packagephobia.com/result?p=tailwind-scrollbar-hide)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

![Firefox >=64 Chrome >= 2 Safari >= 4 Internet Explorer >= 10 ](https://badges.herokuapp.com/browsers?googlechrome=2&firefox=64&safari=4&iexplore=10)
-->

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
