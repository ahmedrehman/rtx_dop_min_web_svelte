# stack:   Svelte Tailwind + Daisy
- Svelte
- Tailwindcss
- Tailwindcss Forms
- DaisyUI  (kind of bootstrap)
- Skeleton (antothe UI Components like Daisy)
- maybe add w3css for fun

```
npm add -D @types/node
npm install -D tailwindcss
npm install daisyui
npm install -D @tailwindcss/forms
npm install @skeletonlabs/skeleton
 npm i -D @skeletonlabs/skeleton @skeletonlabs/tw-plugin

```

## Tailwind

install with svelte

```
npm run dev

npm build:node
```

### add prefix

const defaultTheme = require('tailwindcss/defaultTheme');
```
module.exports = {
  prefix: 'tw-', // Add 'tw-' prefix to all Tailwind classes

```

```
<script>
  let title = "Hello, Svelte!";
</script>

<main>
  <h1 class="tw-font-sans tw-text-3xl tw-font-bold tw-text-gray-800">
    {title} (This uses Inter)
  </h1>
  <p class="tw-font-serif tw-text-lg tw-text-gray-600">
    This paragraph uses Lora, styled with Tailwind's serif font stack.
  </p>
</main>
```

example
## optional prefixed w3css
```
in app.html
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
```

```
<div class="w3">
  <div class="w3-card w3-padding">W3.css content</div>
</div>

```

## Fonts
# Font and Prefix Configuration
 - JetBrains Mono  for code
 - font-sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'];
 - Inter  
## 1. Tailwind Config
Update `tailwind.config.js`:
```javascript
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', 'Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
};




```
in app.html
```
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lora:wght@400..700&display=swap" rel="stylesheet">

```
