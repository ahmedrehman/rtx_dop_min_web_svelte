<script lang="ts">
	import Header from './Header.svelte';
	//import '../../../../app_daisyui.css';
	import '../../../../app.css';
	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<p>
			visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn about SvelteKit
		</p>
	</footer>
</div>


<style>
 
 :global(root) {
		--font-body: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		--font-mono: 'Fira Mono', monospace;
		--color-bg-0: rgb(202, 216, 228);
		--color-bg-1: hsl(209, 36%, 86%);
		--color-bg-2: hsl(224, 44%, 95%);
		--color-theme-1: #ff3e00;
		--color-theme-2: #4075a6;
		--color-text: rgba(0, 0, 0, 0.7);
		--column-width: 42rem;
		--column-margin-top: 4rem;
		font-family: var(--font-body);
		color: var(--color-text);
	}
	
	:global(body) {
		min-height: 100vh;
		margin: 0;
		background-attachment: fixed;
		background-color: var(--color-bg-1);
		background-color: lightblue; /* Change to a distinct color */
		background-size: 100vw 100vh;
		background-image: radial-gradient(
				50% 50% at 50% 50%,
				rgba(255, 255, 255, 0.75) 0%,
				rgba(255, 255, 255, 0) 100%
			),
			linear-gradient(180deg, var(--color-bg-0) 0%, var(--color-bg-1) 15%, var(--color-bg-2) 50%);
	}
	
	:global(h1),
	:global(h2),
	:global(p) {
		font-weight: 400;
	}

	:global(p) {
		line-height: 1.5;
	}

	:global(a) {
		color: var(--color-theme-1);
		text-decoration: none;
	}

	:global(a:hover) {
		text-decoration: underline;
	}

	:global(h1) {
		font-size: 2rem;
		text-align: center;
	}

	:global(h2) {
		font-size: 1rem;
	}

	:global(pre) {
		font-size: 16px;
		font-family: var(--font-mono);
		background-color: rgba(255, 255, 255, 0.45);
		border-radius: 3px;
		box-shadow: 2px 2px 6px rgb(255 255 255 / 25%);
		padding: 0.5em;
		overflow-x: auto;
		color: var(--color-text);
	}

	:global(.text-column) {
		display: flex;
		max-width: 48rem;
		flex: 0.6;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
	}

	:global(input),
	:global(button) {
		font-size: inherit;
		font-family: inherit;
	}

	:global(button:focus:not(:focus-visible)) {
		outline: none;
	}

	@media (min-width: 720px) {
		:global(h1) {
			font-size: 2.4rem;
		}
	}

	:global(.visually-hidden) {
		border: 0;
		clip: rect(0 0 0 0);
		height: auto;
		margin: 0;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
		white-space: nowrap;
	}
</style>
