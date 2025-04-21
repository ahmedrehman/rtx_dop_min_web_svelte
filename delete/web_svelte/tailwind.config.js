/** @type {import('tailwindcss').Config} */
// @ts-expect-error: daisyui has no types
import { join } from 'path';
import daisyuiPlugin  from 'daisyui';
import  { skeleton } from '@skeletonlabs/tw-plugin';
//import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';



export default {
  
  prefix: 'tw-',
  content: ['./src/**/*.{html,js,svelte,ts}',
 // for skellton   join('node_modules', '@skeletonlabs', 'skeleton', '**/*.{html,js,svelte,ts}')
  ],

  theme: {
      extend: {
    			fontFamily: {
    			  sans: ['Inter', 'ui-sans-serif', 'system-ui', ...defaultTheme.fontFamily.sans], // Sans-serif stack
    			  serif: ['Lora', 'Georgia', 'Times New Roman', 'serif'], // Serif stack
    			},
    },
  
  },
  plugins: [
     typography, 
     forms,
     containerQueries, 
     daisyuiPlugin , //either this or in app.css
  
      // skeleton({themes: { preset: [
      //   {
      //     name: 'rocket',
      //     enhancements: true,
      //   },
      //   {
      //     name: 'hamlindigo',
      //     enhancements: true,
      //   },
      //   {
      //     name: 'modern',
      //     enhancements: true,
      //   },
      //   {
      //     name: 'skeleton',
      //     enhancements: true,
      //   },
      //   {
      //     name: 'vintage',
      //     enhancements: true,
      //   },
      // ], },
      // prefix:"sk-"
      // }),
  // plugins: [
  //   daisyui,
  //   // skeleton({
  //   //   themes: {
  //   //     preset: ['skeleton'] // or 'modern', 'classic', etc.
  //   //   }
  //   // })

  ],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    // themes: ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua'],
    themes: true,  // ['light', 'dark'],
    logs: true,
    prefix: "dy-",
  }
  


}
export const daisyui = {
    styled: true,
    base: true,
    utils: true,
    // themes: ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua'],
    themes: true,  // ['light', 'dark'],
    logs: true,
    prefix: "dy-",
};
