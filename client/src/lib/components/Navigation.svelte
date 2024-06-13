<script lang="ts">
	import { page } from '$app/stores';

	let currentPath: string = $page.url.pathname;
</script>

<nav
	data-sveltekit-reload
	class="sticky top-8 z-10 my-8 flex w-screen justify-center bg-transparent"
>
	<ul
		class="flex gap-4 rounded-full bg-white/[0.5] px-2 py-2 text-lg shadow-lg backdrop-blur sm:gap-1"
	>
		<li class="rounded-full py-1 transition-colors hover:bg-sky-400">
			<a class="px-4 py-1 {currentPath == '/' ? 'rounded-full bg-sky-400' : ''}" href="/">Home</a>
		</li>
		<li class="rounded-full py-1 transition-colors hover:bg-sky-400">
			<a class="px-4 py-1 {currentPath == '/about' ? 'rounded-full bg-sky-400' : ''}" href="/about"
				>About</a
			>
		</li>
		<li class="rounded-full py-1 transition-colors hover:bg-sky-400">
			<a class="px-4 py-1 {currentPath == '/work' ? 'rounded-full bg-sky-400' : ''}" href="/work"
				>Work</a
			>
		</li>
		<li class="rounded-full py-1 transition-colors hover:bg-sky-400">
			<a class="px-4 py-1 {currentPath == '/notes' ? 'rounded-full bg-sky-400' : ''}" href="/notes"
				>Notes</a
			>
		</li>
	</ul>
</nav>
