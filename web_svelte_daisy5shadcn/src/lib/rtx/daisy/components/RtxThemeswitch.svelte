<script lang="ts">
	import { onMount } from 'svelte';

	// Explicitly type the list of themes
	const themes: string[] = [
		'light',
		'dark',
        'lofi',
        'wireframe',
        'nonenone',
		'cupcake',
		'bumblebee',
        'corporate',
		'emerald',
		'synthwave',
		'halloween',
		'forest',
		'aqua',
		
		'pastel',
		'fantasy',
		
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter',
        
	];

	let currentTheme: string = 'light';

	onMount(() => {
		const saved = localStorage.getItem('theme');
		if (saved) {
			currentTheme = saved;
			document.documentElement.setAttribute('data-theme', currentTheme);
		}
	});

	function changeTheme(event: Event): void {
		const select = event.target as HTMLSelectElement;
		currentTheme = select.value;
		document.documentElement.setAttribute('data-theme', currentTheme);
		localStorage.setItem('theme', currentTheme);
	}
</script>

<div class="tw:flex tw:items-center tw:gap-4">
	<select
		class="tw:dy-select tw:dy-select-bordered tw:max-w-xs"
		on:change={changeTheme}
		bind:value={currentTheme}
	>
		{#each themes as theme}
			<option value={theme}>{theme}</option>
		{/each}
	</select>
	<!-- Color preview squares -->
	<div class="tw:flex tw:gap-1">
		<span class="tw:w-4 tw:h-4 tw:rounded tw:bg-primary"></span>
		<span class="tw:w-4 tw:h-4 tw:rounded tw:bg-secondary"></span>
		<span class="tw:w-4 tw:h-4 tw:rounded tw:bg-accent"></span>
		<span class="tw:w-4 tw:h-4 tw:rounded tw:bg-neutral"></span>
	</div>
</div>
