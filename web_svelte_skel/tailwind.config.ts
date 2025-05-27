import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';
import daisyui from 'daisyui';

export default {
  prefix: 'tw-',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join('node_modules', '@skeletonlabs', 'skeleton', '**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', 'Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [
    typography,
    forms,
    daisyui,
    skeleton({
      prefix: 'sk-',
      themes: {
        preset: [
          { name: 'rocket', enhancements: true },
          { name: 'hamlindigo', enhancements: true },
          { name: 'modern', enhancements: true },
          { name: 'skeleton', enhancements: true },
          { name: 'vintage', enhancements: true },
        ]
      },
      transformers: { tw: true }
    })
  ],
  daisyui: {
    prefix: 'dy-',
    themes: true, // enable all DaisyUI themes
  },
} satisfies Config;
