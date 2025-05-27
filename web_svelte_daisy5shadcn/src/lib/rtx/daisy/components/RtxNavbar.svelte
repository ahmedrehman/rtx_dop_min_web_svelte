<script>
	import RtxThemeswitch from '$lib/rtx/daisy/components/RtxThemeswitch.svelte';
	// Optional interactivity
	let defaultnavconf = {
		// defaults

		design: 'Design1',
		template: '', //override default design template
		navbar: {
			// defaults
			template: 'RtxNavbar'
		},
		type_children: {
			title: { _cnf: { type: 'H1', show: true } }, // default hideempty
			menu_button_1: { _cnf: { type: 'menu_button', show: true, active: true } }, // default hideempty
			menu_button_2: { _cnf: { type: 'menu_button', show: true, active: true } } // default hideempty
		}
	};

	let navdata = {
		title: 'Hello World', // or  title:{ 'Hello World', content: {}, actions: {} },
		menu_button_1: {
			actions: {
				main: {
					action_on: 'click',
					action_type: 'URL',
					action_target: '/ahmed/example/sverdle'
				}
			}
		},

		menu_button_2: {
			actions: {
				main: {
					action_on: 'click',
					action_type: 'URL',
					action_target: '/ahmed/example/sverdle'
				}
			}
		}
	};

	let butto_left_show = true;
	let butto_right_show = true;
	let title_show = 'menu';
	let debug_themeswitch_show = true;
</script>

<div class="tw:dy-navbar tw:dy-bg-base-100 tw:shadow-sm">
	{#if butto_left_show}
		<div class="tw:flex-none">
			<button class="tw:dy-btn tw:dy-btn-square tw:dy-btn-ghost" aria-label="Open Main menu">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="tw:inline-block tw:h-5 tw:w-5 tw:stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>
	{/if}

	{#if title_show}
		<div class="tw:flex-1">
			<a class="tw:dy-btn tw:dy-btn-ghost tw:text-xl">daisyUI</a>
		</div>
	{/if}

	<div class="tw:flex tw:gap-2">
		<input
			type="text"
			placeholder="Search"
			class="tw:dy-input tw:dy-input-bordered tw:w-24 tw:md:w-auto"
		/>

		<div class="tw:flex-none">
			<ul class="tw:dy-menu tw:dy-menu-horizontal tw:px-1">
				<li><a>Link</a></li>
				<li>
					<details>
						<summary>Parent</summary>
						<ul class="tw:bg-base-100 tw:rounded-t-none tw:p-2">
							<li><a>Link 1</a></li>
							<li><a>Link 2</a></li>
						</ul>
					</details>
				</li>
			</ul>
		</div>

		{#if debug_themeswitch_show}
			<div class="tw:flex-1">
				<RtxThemeswitch />
			</div>
		{/if}

		<div class="tw:flex-none">
			<div class="tw:dy-dropdown tw:dy-dropdown-end">
				<div tabindex="0" role="button" class="tw:dy-btn tw:dy-btn-ghost tw:dy-btn-circle">
					<div class="tw:dy-indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="tw:h-5 tw:w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
						<span class="tw:dy-badge tw:dy-badge-sm tw:dy-indicator-item">8</span>
					</div>
				</div>
				<div
					tabindex="0"
					class="tw:dy-card tw:dy-card-compact tw:dy-dropdown-content tw:bg-base-100 tw:z-1 tw:mt-3 tw:w-52 tw:shadow"
				>
					<div class="tw:dy-card-body">
						<span class="tw:text-lg tw:font-bold">8 Items</span>
						<span class="tw:text-info">Subtotal: $999</span>
						<div class="tw:dy-card-actions">
							<button class="tw:dy-btn tw:dy-btn-primary tw:dy-btn-block">View cart</button>
						</div>
					</div>
				</div>
			</div>

			<div class="tw:dy-dropdown tw:dy-dropdown-end">
				<div
					tabindex="0"
					role="button"
					class="tw:dy-btn tw:dy-btn-ghost tw:dy-btn-circle tw:dy-avatar"
				>
					<div class="w-10 tw:rounded-full">
						<img
							alt="Tailwind CSS Navbar component"
							src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
						/>
					</div>
				</div>
				<ul
					tabindex="0"
					class="tw:dy-menu tw:dy-menu-sm tw:dy-dropdown-content tw:bg-base-100 tw:rounded-box tw:z-1 tw:mt-3 tw:w-52tw:p-2 tw:shadow"
				>
					<li>
						<a class="tw:justify-between">
							Profile
							<span class="tw:dy-badge">New</span>
						</a>
					</li>
					<li><a>Settings</a></li>
					<li><a>Logout</a></li>
				</ul>
			</div>
		</div>

		{#if butto_right_show}
			<div class="tw:flex-none">
				<button class="tw:dy-btn tw:dy-btn-square tw:dy-btn-ghost" aria-label="Open Main Side menu">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="tw:inline-block tw:h-5 tw:w-5 tw:stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
						/>
					</svg>
				</button>
			</div>
		{/if}
	</div>
</div>
