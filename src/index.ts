import type { Preset } from 'unocss'

export function presetScrollBarHide(): Preset {
  return {
    name: 'unocss-preset-scrollbar-hide',
    rules: [
      [/^scrollbar-hide$/, ([_]) => {
        return `.scrollbar-hide{scrollbar-width:none}
.scrollbar-hide::-webkit-scrollbar{display:none}`
      }],
      [/^scrollbar-default$/, ([_]) => {
        return `.scrollbar-default{scrollbar-width:auto}
.scrollbar-default::-webkit-scrollbar{display:block}`
      }],
    ],
  }
}
