<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import svgIcons from '$lib/assets/svg-icons';
	import { toggleMode } from 'mode-watcher';

	let currentPath: string = $page.url.pathname;
</script>

<nav
	data-sveltekit-reload
	class="sticky top-8 z-10 my-8 flex w-screen justify-center bg-transparent"
>
	<ul
		class="flex gap-4 rounded-full bg-white/[0.5] px-2 py-2 text-lg shadow-lg backdrop-blur dark:bg-black/[0.5] sm:gap-1"
	>
		<li class="rounded-full py-1 transition-colors hover:bg-sky-400 dark:hover:bg-sky-600">
			<a
				class="px-4 py-1 {currentPath == '/'
					? 'rounded-full bg-sky-400 dark:bg-sky-600'
					: ''} sm:text-sm"
				href="/">Home</a
			>
		</li>
		<li class="rounded-full py-1 transition-colors hover:bg-sky-400 dark:hover:bg-sky-600">
			<a
				class="px-4 py-1 {currentPath == '/about'
					? 'rounded-full bg-sky-400 dark:bg-sky-600'
					: ''} sm:text-sm"
				href="/about">About</a
			>
		</li>
		<li class="rounded-full py-1 transition-colors hover:bg-sky-400 dark:hover:bg-sky-600">
			<a
				class="px-4 py-1 {currentPath == '/work'
					? 'rounded-full bg-sky-400 dark:bg-sky-600'
					: ''} sm:text-sm"
				href="/work">Work</a
			>
		</li>
		<li class="rounded-full py-1 transition-colors hover:bg-sky-400 dark:hover:bg-sky-600">
			<a
				class="px-4 py-1 {currentPath == '/notes'
					? 'rounded-full bg-sky-400 dark:bg-sky-600'
					: ''} sm:text-sm"
				href="/notes">Notes</a
			>
		</li>
	</ul>
	<Button
		on:click={toggleMode}
		variant="outline"
		size="icon"
		class="ml-2 mt-2 rounded-full bg-white/[0.5] backdrop-blur hover:bg-sky-400 dark:bg-black/[0.5] dark:hover:bg-sky-600"
		><span class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			>{@html svgIcons.sun}</span
		>
		<span
			class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:fill-white"
			>{@html svgIcons.moon}</span
		></Button
	>
</nav>
