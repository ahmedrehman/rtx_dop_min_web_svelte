<script lang="ts">
	//´true´, ´false´
	let style_size = 'xl'; //´sm´, ´md´, ´lg´, ´xl´, ´2xl´, ´3xl´, ´4xl´, ´5xl´, ´6xl´
	let cardd_size_class = 'tw:dy-card-xl'; //´sm´, ´md´, ´lg´, ´xl´, ´2xl´, ´3xl´, ´4xl´, ´5xl´, ´6xl´

	let image_url = 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp';
	let hasImage = true;
	let image_position = 'top'; //´top´, ´bottom´, ´left´, ´right´, background
	let image_alt = 'Shoes';
	let card_title = 'Card Title';
	let card_description =
		'A card component has a figure, a body part, and inside body there are title and actions parts';
	let button_text = 'Buy Now';
</script>

<div class="tw:dy-card tw:bg-base-100 tw:w-96 tw:shadow-sm">
	{#if hasImage}
		{#if image_position == 'top'}
			<figure>
				<img src={image_url} alt={image_alt} />
			</figure>
		{/if}
	{/if}

	<div class="tw:dy-card-body">
		<h2 class="tw:dy-card-title">{card_title}</h2>
		<p>
			{card_description}
		</p>
		<div class="tw:dy-card-actions tw:justify-end">
			<button class="tw:dy-btn tw:dy-btn-primary">{button_text}</button>
		</div>
	</div>
</div>

<style>
</style>
