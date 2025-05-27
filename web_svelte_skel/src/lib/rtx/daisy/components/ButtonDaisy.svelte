<script lang="ts">
	let button_type = 'button' as 'link' | 'button'; //link button
	//let button_type: "link" | "button" = "button"; // either "link" or "button"
    let targetUrl = '/dashboard'; // URL to navigate to when the button is clicked
    let label='Click me'; // Button label

	import { goto } from '$app/navigation';
	function handleClick() {
		goto(
            targetUrl
			// ,{
			// 	replaceState: false,
			// 	noscroll: false,
			// 	keepfocus: false,
			// 	state: {}
			// }
		);
	}
    //<button class="tw:dy-btn" on:click={handleClick}>{label}</button>
</script>

{#if button_type === 'link'}
	<a class="tw:dy-link" href="{targetUrl}" on:click|preventDefault={handleClick}>{label}</a>
{/if}

{#if button_type == 'button'}
	
	<button class="tw:dy-btn tw:dy-btn-dash" on:click={handleClick}>{label}</button>
{/if}

<style>
</style>
