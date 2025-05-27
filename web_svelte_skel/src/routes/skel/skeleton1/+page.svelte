<script>
 

	let name = "";
	let email = "";
  </script>
  <div data-theme="rocket">
	<a
	class="sk-btn sk-variant-filled"
	href="https://skeleton.dev/"
	target="_blank"
	rel="noreferrer"
>
	skeleton rocket
</a>
<a
	class="btn  variant-filled"
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
  <div data-theme="skeleton"  class="tw:min-h-screen tw:bg-base-200 tw:p-6">
	<a
	class="sk-btn sk-variant-filled"
	href="https://skeleton.dev/"
	target="_blank"
	rel="noreferrer"
>
skeletonskeleton
</a>


<a
	class="btn variant-filled"
	href="https://skeleton.dev/"
	target="_blank"
	rel="noreferrer"
>
	Launch Documentation
</a>
<a
	class="tw:btn tw:variant-filled"
	href="https://skeleton.dev/"
	target="_blank"
	rel="noreferrer"
>

	<button class="btn bg-green-500 text-white">Click Me</button>
	<button class="tw:btn tw:bg-green-500 tw:text-white">Click Me</button>
	<button class="btn primary">Skeleton Button</button>
	<button class="tw:btn tw:primary">Skeleton Button</button>
	<button class="sk-btn sk-bg-green-500 sk-text-white">Click Me</button>
	<button class="btn  bg-green-500  text-white">Click Me</button>
	<button class="tw:sk-btn  tw:sk-bg-green-500  tw:sk-text-white">Click Me</button>
	<button class="sk-tw:btn  sk-tw:bg-green-500  sk-tw:text-white">Click Me</button>
	<button class="sk-btn sk-bg-green-500 sk-text-white">Click Me</button>
	<button class="tw:sk-btn tw:sk-bg-green-500 tw:sk-text-white sk-py-2 tw:sk-px-4 sk-rounded hover:tw:sk-bg-green-600">
		Skeleton
	  </button>
	  <div class="sk-loader sk-w-64 sk-h-10 sk-rounded"></div>

	  <div class="tw:sk-loader sk-w-64 sk-h-10 sk-rounded"></div>

	  <div class="sk-tw:loader sk-w-64 sk-h-10 sk-rounded"></div>

	
	  <button class="sk-btn sk-bg-green-500 ">
		Skeleton
	  </button>
	  <button class="btn bg-green-500 ">
		Skeleton
	  </button>
	  <button class="sk-tw:btn sk-tw:bg-green-500 ">
		Skeleton
	  </button>
					  
	<!-- Header -->
	<div class="tw:mb-8">
	  <h1 class="tw:text-3xl tw:font-bold">Skeleton Demo Page</h1>
	  <p class="tw:text-lg tw:text-gray-500">Using Skeleton with Tailwind for a beautiful UI.</p>
	</div>
  
	<!-- Card Example -->
	<div class="tw:card tw:bg-base-100 tw:shadow-xl tw:w-96 tw:mb-8">
	  <div class="tw:card-body">
		<h2 class="tw:card-title">Welcome to the Skeleton Demo</h2>
		<p>Skeleton offers unstyled Svelte components that you can easily integrate with your Tailwind-powered designs.</p>
		<div class="tw:card-actions tw:justify-end">
		  <button class="tw:btn tw:btn-primary">Get Started</button>
		</div>
	  </div>
	</div>
  
	<!-- Form Example -->
	<div class="tw:mb-8">
	  <h2 class="tw:text-2xl tw:font-semibold">Sign Up</h2>
	  <form class="tw:space-y-4">
		<div>
		  <label for="name" class="tw:label">Name</label>
		  <input
			id="name"
			type="text"
			bind:value={name}
			placeholder="Enter your name"
			class="tw:input tw:input-bordered tw:w-full"
		  />
		</div>
  
		<div>
		  <label for="email" class="tw:label">Email</label>
		  <input
			id="email"
			type="email"
			bind:value={email}
			placeholder="Enter your email"
			class="tw:input tw:input-bordered tw:w-full"
		  />
		</div>
  
		<div>
		  <button type="submit" class="tw:btn tw:btn-primary tw:w-full">Submit</button>
		</div>
	  </form>
	</div>
  
	<!-- Buttons -->
	<div class="tw:flex tw:gap-4">
	  <button class="tw:btn tw:btn-secondary">Secondary Button</button>
	  <button class="tw:btn tw:btn-accent">Accent Button</button>
	</div>
  </div>
