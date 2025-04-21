<script>
	// Example tree data for the table
	let treeData = [
		{
			id: 1,
			name: "Parent 1",
			children: [
				{ id: 2, name: "Child 1.1" },
				{ id: 3, name: "Child 1.2" },
			],
		},
		{
			id: 4,
			name: "Parent 2",
			children: [
				{ id: 5, name: "Child 2.1" },
				{ id: 6, name: "Child 2.2" },
			],
		},
	];

	// Track expanded rows using a Set
	let expandedRows = new Set();

	// Toggle the expansion state of a row
	function toggleRow(id) {
		if (expandedRows.has(id)) {
			expandedRows.delete(id);
		} else {
			expandedRows.add(id);
		}
		// Force Svelte to update the DOM by reassigning the Set
		expandedRows = new Set(expandedRows);
	}
</script>


<div class="tw-min-h-screen tw-bg-base-200 tw-p-6">
	<!-- Header -->
	<div class="tw-flex tw-justify-between tw-items-center tw-mb-4">
		<h1 class="tw-text-3xl tw-font-bold">Collapsible Tree Table</h1>
		<input
			type="text"
			placeholder="Search..."
			class="tw-dy-input tw-dy-input-bordered tw-w-64"
		/>
	</div>

	<!-- Table -->
	<div class="tw-overflow-x-auto">
		<table class="tw-dy-table tw-dy-table-zebra tw-w-full">
			<thead>
				<tr>
					<th class="tw-w-8"></th>
					<th>Name</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{#each treeData as row (row.id)}
					<!-- Parent Row -->
					<tr class="hover">
						<td class="tw-cursor-pointer" on:click={() => toggleRow(row.id)}>
							{#if row.children?.length}
								<span class="tw-dy-btn tw-dy-btn-xs tw-dy-btn-ghost">
									{expandedRows.has(row.id) ? "▼" : "►"}
								</span>
							{/if}
						</td>
						<td>{row.name}</td>
						<td>
							<div class="tw-flex tw-gap-2">
								<button class="tw-dy-btn tw-dy-btn-xs tw-dy-btn-primary">Edit</button>
								<button class="tw-dy-btn tw-dy-btn-xs tw-dy-btn-error">Delete</button>
							</div>
						</td>
					</tr>

					<!-- Child Rows -->
					{#if expandedRows.has(row.id)}
						{#each row.children as child (child.id)}
							<tr class="hover">
								<td></td>
								<td class="tw-pl-8">{child.name}</td>
								<td>
									<div class="tw-flex tw-gap-2">
										<button class="tw-dy-btn tw-dy-btn-xs tw-dy-btn-primary">Edit</button>
										<button class="tw-dy-btn tw-dy-btn-xs tw-dy-btn-error">Delete</button>
									</div>
								</td>
							</tr>
						{/each}
					{/if}
				{/each}
			</tbody>
		</table>
	</div>

	<!-- Additional Widgets -->
	<div class="tw-flex tw-gap-4 tw-mt-8">
		<button class="tw-dy-btn tw-dy-btn-accent">Add New Parent</button>
		<button class="tw-dy-btn tw-dy-btn-secondary">Refresh</button>
	</div>
</div>
