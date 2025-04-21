<script>
    import '../../app.css'; // Global CSS (e.g., Tailwind or custom styles)
    import { onMount } from 'svelte';
    //let { children } = $props();
    export let children;
	// Default theme
	const defaultTheme = 'corporate';

	// Apply theme to <html> element
	//document.documentElement.setAttribute('data-theme', defaultTheme);
	// onMount(() => {
	// 	document.documentElement.setAttribute('data-theme', defaultTheme);
	// });
</script>

<div    data-theme={defaultTheme} class="layout min-h-screen bg-base-200">
	<main>
		{@render children()}
	
	</main>
</div>
<!--   
<div class="layout">
    <slot />
</div>
-->
 
<style>

    
</style>