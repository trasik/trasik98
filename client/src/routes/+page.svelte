<script lang="ts">
	import codeIcon from '$lib/assets/code-icon.svg';
	import gameIcon from '$lib/assets/gaming-icon.svg';
	import spotifyIcon from '$lib/assets/spotify-icon.svg';
	import svgIcons from '$lib/assets/svg-icons';
	import * as Card from '$lib/components/ui/card';
	import type { HomeCard, SpotifySong } from '$lib/interfaces';
	import { fade, fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	const cards: HomeCard[] = [
		{
			title: 'Project',
			description: 'Wordle',
			colSpan: 'col-span-4',
			imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
			imageAlt: 'Photo of a Shiba Inu'
		},
		{
			title: 'Project',
			description: 'Wordle',
			colSpan: 'col-span-3',
			imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
			imageAlt: 'Photo of a Shiba Inu'
		},
		{
			title: 'Project',
			description: 'Wordle',
			colSpan: 'col-span-3',
			imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
			imageAlt: 'Photo of a Shiba Inu'
		},
		{
			title: 'Project',
			description: 'Wordle',
			colSpan: 'col-span-4',
			imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
			imageAlt: 'Photo of a Shiba Inu'
		}
	];

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
	let innerWidth: number = 0;
	let currentSpotifySong: SpotifySong;

	$: isColSpanNeeded = innerWidth >= 992;

	onMount(() => {
		pageLoaded = true;
		currentSpotifySong = spotifySongs[Math.floor(Math.random() * spotifySongs.length)];
	});
</script>

<svelte:head>
	<title>trasik98 - Home</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
</svelte:head>

<svelte:window bind:innerWidth />

{#if pageLoaded}
	<header class="align-center mt-32 flex w-full justify-center">
		<div
			in:fly={{ delay: 250, duration: 1500, y: -200, opacity: 0, easing: quintOut }}
			class="relative inline-block text-center"
		>
			<h1 class="font-bangers text-8xl tracking-widest sm:text-[2.5rem]">Hi! I'm Torendra.</h1>
			<h1 class="font-bangers text-8xl tracking-widest sm:text-[2.5rem]">An Engineer.</h1>
			<h4 class="my-28 text-lg font-medium italic sm:my-16 sm:text-sm">
				I like to break things and make them better.
			</h4>

			<img
				in:scale={{ duration: 1000, delay: 1500, opacity: 0, start: 0.1, easing: quintOut }}
				class="absolute -right-20 -top-10 w-[4rem] sm:-right-8 sm:-top-5 sm:w-[2rem]"
				alt="Coding icon"
				src={codeIcon}
			/>
			<img
				in:scale={{ duration: 1000, delay: 1500, opacity: 0, start: 0.1, easing: quintOut }}
				class="absolute -left-20 bottom-56 w-[5rem] sm:-left-8 sm:bottom-[8.5rem] sm:w-[2rem]"
				alt="Gaming icon"
				src={gameIcon}
			/>
		</div>
	</header>
	{#if isColSpanNeeded}
		<main
			in:fly={{ delay: 1000, duration: 1500, y: -200, opacity: 0, easing: quintOut }}
			class="mx-auto mt-8 grid w-11/12 grid-cols-7 gap-8"
		>
			{#each cards as card}
				<Card.Root class="{card.colSpan} transition duration-500 ease-in-out hover:scale-105">
					<Card.Header>
						<Card.Title>{card.title}</Card.Title>
						<Card.Description>{card.description}</Card.Description>
					</Card.Header>
					<Card.Content class="h-[400px] w-full sm:h-[200px]">
						<img class="h-full w-full object-cover" alt={card.imageAlt} src={card.imageSrc} />
					</Card.Content>
				</Card.Root>
			{/each}
		</main>
	{:else}
		<main
			in:fly={{ delay: 1000, duration: 1500, y: -200, opacity: 0, easing: quintOut }}
			class="mx-auto mt-8 grid w-11/12 grid-cols-1 gap-8"
		>
			{#each cards as card}
				<Card.Root class="transition duration-500 ease-in-out hover:scale-105">
					<Card.Header>
						<Card.Title>{card.title}</Card.Title>
						<Card.Description>{card.description}</Card.Description>
					</Card.Header>
					<Card.Content class="h-[400px] w-full sm:h-[200px]">
						<img class="h-full w-full object-cover" alt={card.imageAlt} src={card.imageSrc} />
					</Card.Content>
				</Card.Root>
			{/each}
		</main>
	{/if}
	<footer class="mx-auto mb-8 mt-28 flex w-11/12">
		<div class="ml-16 flex flex-auto justify-center md:ml-0">
			<div>
				<div
					class=" flex items-center justify-center rounded-full bg-amber-100 p-8 transition duration-500 ease-in-out hover:scale-105"
				>
					<img class="md:w-[48px]" alt="Spotify icon" src={spotifyIcon} />
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
						class="flex transition hover:scale-105 hover:fill-sky-400 hover:text-sky-400"
						href="https://github.com/trasik"
					>
						<span class="my-auto mr-4">{@html svgIcons.github}</span>Github
					</a>
				</li>
				<li>
					<a
						class="flex transition hover:scale-105 hover:fill-sky-400 hover:text-sky-400"
						href="https://www.linkedin.com/in/torendrarasik/"
					>
						<span class="my-auto mr-4">{@html svgIcons.linkedin}</span>LinkedIn
					</a>
				</li>
				<li>
					<a
						class="flex transition hover:scale-105 hover:fill-sky-400 hover:text-sky-400"
						href="https://x.com/DownbadT8"
					>
						<span class="my-auto -ml-[.15rem] mr-4">{@html svgIcons.x}</span>X
					</a>
				</li>
				<li>
					<a
						class="flex transition hover:scale-105 hover:fill-sky-400 hover:text-sky-400"
						href="https://x.com/DownbadT8"
					>
						<span class="my-auto mr-4">{@html svgIcons.email}</span>Email
					</a>
				</li>
			</ul>
		</div>
	</footer>
{/if}
