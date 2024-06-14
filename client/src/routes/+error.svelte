<script lang="ts">
	import { page } from '$app/stores';
	import bgImage from '$lib/assets/error-bg-unsplash.jpg';

	const status = $page.status;
</script>

<div class="relative -mt-32 h-screen w-screen">
	<div class="absolute inset-0 h-full w-full">
		<img class="h-full w-full object-cover" alt="Background" src={bgImage} />
		<div class="absolute left-16 top-1/4 lg:left-4 lg:top-3/4">
			<h1 class="text-4xl font-medium lg:text-2xl">{status}</h1>
			<p class="mt-8 text-2xl italic lg:text-lg">Something went wrong :&#40;</p>
			<p class="mt-4 text-2xl italic lg:text-lg">Please navigate back to the home page.</p>
		</div>
	</div>
</div>
