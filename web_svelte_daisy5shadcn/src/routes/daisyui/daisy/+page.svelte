<script>
	import { base } from '$app/paths';
	// Default theme
	const theme = 'retro';
    
	// Toggle the theme dynamically
	function toggleTheme() {
		// Read the current theme from `data-theme`
		const currentTheme = document.documentElement.getAttribute('data-theme');
		const newTheme = currentTheme === 'retro' ? 'corporate' : 'retro';

		// Update the theme attribute
		document.documentElement.setAttribute('data-theme', newTheme);
	}
</script>
<div class="tw:min-h-screen tw:bg-base-200 tw:flex tw:flex-col">
 
<!-- Navbar -->
<nav class="tw:dy-navbar tw:dy-bg-base-100 tw:shadow-lg">
	<div class="tw:flex-1">
		<a href="{base}" class="tw:dy-btn tw:dy-btn-ghost tw:normal-case tw:text-xl">DaisyUI Page</a>
	</div>
	<div class="tw:flex-none">
		<button class="tw:dy-btn tw:dy-btn-primary" on:click={toggleTheme}>Toggle Theme</button>
	</div>
</nav>

<!-- test tailwind-->
<p class="text-blue-500">This is blue text  Tailwind noprefix</p>
<p class="tw:text-blue-500">This is blue text  Tailwind prefix :</p>
<p class="tw-text-blue-500">This is blue text  Tailwind prefix -</p>


<button class="btn btn-primary">DaisyUI Button   no prefix</button>
<button class="dy-btn dy-btn-primary">DaisyUI Button  pref dy-</button>
<button class="tw:btn tw:btn-primary">DaisyUI Button pref tw:</button>
<button class="tw:dy-btn tw:dy-btn-primary">DaisyUI Button pref tw:dy-</button>
<button class="dy-tw:btn dy-tw:btn-primary">DaisyUI Button pref dy-tw:</button>

<!-- Main Content -->
<main class="tw:flex-grow tw:flex tw:flex-col tw:items-center tw:justify-center tw:px-4 tw:py-8">
	<h1 class="tw:text-5xl tw:font-bold tw:text-center">Welcome to DaisyUI</h1>
	<p class="tw:text-lg tw:text-center tw:mt-4">
		Explore the amazing components and themes with DaisyUI!
	</p>

	<!-- Card Example -->
	<div class="tw:dy-card tw:dy-w-96 tw:dy-bg-base-100 tw:shadow-xl tw:mt-8">
		<div class="tw:dy-card-body">
			<h2 class="tw:dy-card-title">Beautiful Card prefix tw:dy-</h2>
			<p>DaisyUI provides a simple way to build beautiful, responsive UI components.</p>
			<div class="tw:dy-card-actions tw:justify-end">
				<button class="tw:dy-btn tw:dy-btn-primary">Get Started</button>
			</div>
		</div>
	</div>
	<!-- Card Example -->
	<div class="dy-card dy-w-96 dy-bg-base-100 tw:shadow-xl tw:mt-8">
		<div class="dy-card-body">
			<h2 class="dy-card-title">Beautiful Cardprefix dy</h2>
			<p>DaisyUI provides a simple way to build beautiful, responsive UI components.</p>
			<div class="dy-card-actions tw:justify-end">
				<button class="dy-btn dy-btn-primary">Get Started</button>
			</div>
		</div>
	</div>
	<!-- Card Example -->
	<div class="tw:card tw:w-96 tw:bg-base-100 tw:shadow-xl tw:mt-8">
		<div class="tw:card-body">
			<h2 class="tw:card-title">Beautiful Card   Prefix tw:</h2>
			<p>DaisyUI provides a simple way to build beautiful, responsive UI components.</p>
			<div class="tw:card-actions tw:justify-end">
				<button class="tw:btn tw:btn-primary">Get Started</button>
			</div>
		</div>
	</div>
	<!-- Card Example -->
	<div class="card w-96 bg-base-100 tw:shadow-xl tw:mt-8">
		<div class="card-body">
			<h2 class="card-title">Beautiful Card  no prefix </h2>
			<p>DaisyUI provides a simple way to build beautiful, responsive UI components.</p>
			<div class="card-actions tw:justify-end">
				<button class="btn btn-primary">Get Started</button>
			</div>
		</div>
	</div>
</main>

<!-- Footer -->
<footer class="tw:dy-footer tw:dy-footer-center tw:p-4 tw:dy-bg-base-300 tw:text-base-content">
	<p>&copy; 2025 My DaisyUI App</p>
</footer>


</div>
