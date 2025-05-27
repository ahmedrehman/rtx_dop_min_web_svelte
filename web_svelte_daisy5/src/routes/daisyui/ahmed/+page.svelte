<script lang="ts">
	let { children } = $props();
  import { base } from '$app/paths';
   $inspect(base);
  let title = "Hello, Svelte!";
</script>

<main>

  <div class="w3">
    <div class="w3-card w3-padding w3-red">W3.css content</div>
  </div>

  <button
 
  class="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all"
>
  Test Button
</button>
    <h1 class="tw:font-sans tw:text-3xl tw:font-bold tw:text-green-800">
      {title} (This uses Inter)
    </h1>
    <p class="tw:font-serif tw:text-lg tw:text-gray-600">
      This paragraph uses Lora, styled with Tailwind's serif font stack.
    </p>

    <button class="tw:bg-green-500 tw:text-white tw:font-medium tw:py-2 tw:px-4 tw:rounded hover:tw:bg-green-600">
      Tailwind
    </button>
    <button class="tw:dy-btn  tw:dy-btn-primary">
      Click Me
      </button>
     

      <div data-theme="rocket">
        <a
        class="sk-btn sk-variant-filled"
        href="https://skeleton.dev/"
        target="_blank"
        rel="noreferrer"
      >
        skeleton rocket
      </a>
      
        </div><div data-theme="skeleton">
        <a
        class="sk-btn sk-variant-filled"
        href="https://skeleton.dev/"
        target="_blank"
        rel="noreferrer"
      >
        skeleton skeleton
      </a>
      
        </div>
</main>

<style>
	 
</style>