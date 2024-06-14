<script lang="ts">
	import type { SpotifySong } from '$lib/interfaces';
	import svgIcons from '$lib/assets/svg-icons';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const spotifySongs: SpotifySong[] = [
		{
			artist: 'Ruth B',
			song: 'Dandelions',
			songHref: 'https://open.spotify.com/track/2eAvDnpXP5W0cVtiI0PUxV'
		},
		{
			artist: 'Camila Cabello',
			song: 'Shameless',
			songHref: 'https://open.spotify.com/track/2ogKhhoMClkFXek7ZgxAhN'
		},
		{
			artist: 'Dave',
			song: 'Psycho',
			songHref: 'https://open.spotify.com/track/0FWAIRd9Uz5uNek7cALYNC'
		},
		{
			artist: 'Topic',
			song: 'Lucid Dream',
			songHref: 'https://open.spotify.com/track/3fXy7UkU64qm5ezMBf0CTh'
		}
	];

	let pageLoaded: boolean = false;
	let currentSpotifySong: SpotifySong;

	onMount(() => {
		pageLoaded = true;
		currentSpotifySong = spotifySongs[Math.floor(Math.random() * spotifySongs.length)];
	});
</script>

{#if pageLoaded}
	<footer in:fade={{ delay: 250, duration: 1000 }} class="relative mx-auto mb-8 mt-28 flex w-11/12">
		<div class="ml-16 flex flex-auto justify-center md:ml-0">
			<div>
				<div
					class=" flex items-center justify-center rounded-full bg-amber-100 p-8 transition duration-500 ease-in-out hover:scale-105 dark:bg-[#978256]"
				>
					<span class="w-[64px] md:w-[48px]">{@html svgIcons.spotify}</span>
					<div class="ml-4">
						<p class="font-medium">On repeat</p>
						<a
							target="_blank"
							href={currentSpotifySong.songHref}
							class="mt-1 text-lg font-bold md:text-base"
							>{currentSpotifySong.artist} - {currentSpotifySong.song}</a
						>
					</div>
				</div>
				<p class="mt-8 text-xl font-medium">&copy; Torendra Rasik &bull; New York</p>
			</div>
		</div>
		<div class="ml-64 flex-auto md:ml-8">
			<ul class="w-[100px] leading-[3rem]">
				<li class="mb-4"><p class="text-xl font-medium">Contact</p></li>
				<li>
					<a
						class="flex transition hover:scale-105 hover:fill-sky-400 hover:text-sky-400 dark:fill-white dark:hover:fill-sky-600 dark:hover:text-sky-600"
						href="https://github.com/trasik"
					>
						<span class="my-auto mr-4">{@html svgIcons.github}</span>Github
					</a>
				</li>
				<li>
					<a
						class="flex transition hover:scale-105 hover:fill-sky-400 hover:text-sky-400 dark:fill-white dark:hover:fill-sky-600 dark:hover:text-sky-600"
						href="https://www.linkedin.com/in/torendrarasik/"
					>
						<span class="my-auto mr-4">{@html svgIcons.linkedin}</span>LinkedIn
					</a>
				</li>
				<li>
					<a
						class="flex transition hover:scale-105 hover:fill-sky-400 hover:text-sky-400 dark:fill-white dark:hover:fill-sky-600 dark:hover:text-sky-600"
						href="https://x.com/DownbadT8"
					>
						<span class="my-auto -ml-[.15rem] mr-4">{@html svgIcons.x}</span>X
					</a>
				</li>
				<li>
					<a
						class="flex transition hover:scale-105 hover:fill-sky-400 hover:text-sky-400 dark:fill-white dark:hover:fill-sky-600 dark:hover:text-sky-600"
						href="https://x.com/DownbadT8"
					>
						<span class="my-auto mr-4">{@html svgIcons.email}</span>Email
					</a>
				</li>
			</ul>
		</div>
	</footer>
{/if}
