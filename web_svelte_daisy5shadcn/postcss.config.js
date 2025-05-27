import postcssImport from 'postcss-import';
import tailwindcss from '@tailwindcss/postcss'; // 👈 fix here!
import autoprefixer from 'autoprefixer';
//import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
  plugins: [
    //postcssImport(),
    tailwindcss(), 
   // skeleton(),
    autoprefixer(),
  ],
};