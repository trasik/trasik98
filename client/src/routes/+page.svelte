<script lang="ts">
	import svgIcons from '$lib/assets/svg-icons';
	import * as Card from '$lib/components/ui/card';
	import type { HomeCard } from '$lib/interfaces';
	import { fly, scale } from 'svelte/transition';
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

	let pageLoaded: boolean = false;
	let innerWidth: number = 0;

	$: isColSpanNeeded = innerWidth >= 992;

	onMount(() => {
		pageLoaded = true;
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

			<span
				in:scale={{ duration: 1000, delay: 1500, opacity: 0, start: 0.1, easing: quintOut }}
				class="absolute -left-20 bottom-56 w-[5rem] stroke-black dark:stroke-white sm:-left-8 sm:bottom-[8.5rem] sm:w-[2rem]"
			>
				{@html svgIcons.gaming}
			</span>

			<span
				in:scale={{ duration: 1000, delay: 1500, opacity: 0, start: 0.1, easing: quintOut }}
				class="absolute -right-20 -top-10 w-[4rem] stroke-black dark:stroke-white sm:-right-8 sm:-top-5 sm:w-[2rem]"
			>
				{@html svgIcons.code}
			</span>
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
{/if}
