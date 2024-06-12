<script lang="ts">
	import codeIcon from '$lib/assets/code-icon.svg';
	import gameIcon from '$lib/assets/gaming-icon.svg'
	import * as Card from "$lib/components/ui/card";
	import type { HomeCards } from '$lib/interfaces';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	const cards : HomeCards[] = [
		{
			title: "Project",
			description: "Wordle",
			colSpan: "col-span-4",
			imageSrc: "https://material.angular.io/assets/img/examples/shiba2.jpg",
			imageAlt: "Photo of a Shiba Inu"
		},
		{
			title: "Project",
			description: "Wordle",
			colSpan: "col-span-3",
			imageSrc: "https://material.angular.io/assets/img/examples/shiba2.jpg",
			imageAlt: "Photo of a Shiba Inu"
		},
		{
			title: "Project",
			description: "Wordle",
			colSpan: "col-span-3",
			imageSrc: "https://material.angular.io/assets/img/examples/shiba2.jpg",
			imageAlt: "Photo of a Shiba Inu"
		},
		{
			title: "Project",
			description: "Wordle",
			colSpan: "col-span-4",
			imageSrc: "https://material.angular.io/assets/img/examples/shiba2.jpg",
			imageAlt: "Photo of a Shiba Inu"
		}
	]

	let pageLoaded = false;

	onMount(() => {
		pageLoaded = true;
	})
</script>

<svelte:head>
	<title>trasik98 - Home</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
</svelte:head>

{#if pageLoaded}
	<header class="w-full flex justify-center align-center mt-32">
		<div in:fly={{ delay: 250, duration: 1500, y: -200, opacity: 0, easing: quintOut }} class="relative inline-block text-center">
			<h1 class="font-bangers text-8xl tracking-widest sm:text-[2.5rem]">Hi! I'm Torendra.</h1>
			<h1 class="font-bangers text-8xl tracking-widest sm:text-[2.5rem]">An Engineer.</h1>
			<h4 class="italic my-28 font-medium text-lg sm:text-sm sm:my-16">
			I like to break things and make them better.
			</h4>

			<img class="absolute -top-10 -right-20 w-[4rem] sm:w-[2rem] sm:-top-5 sm:-right-8" alt="Coding icon" src={codeIcon} />
			<img class="absolute bottom-56 -left-20 w-[5rem] sm:w-[2rem] sm:bottom-[8.5rem] sm:-left-8" alt="Gaming icon" src={gameIcon} />
		</div>
	</header>
	<main in:fly={{ delay: 1000, duration: 1500, y: -200, opacity: 0, easing: quintOut }} class="grid grid-cols-7 gap-8 w-11/12 mx-auto mt-8 md:grid-cols-1">
		{#each cards as card}
		<Card.Root class="{card.colSpan} hover:scale-105 transition ease-in-out duration-500">
			<Card.Header>
			<Card.Title>{card.title}</Card.Title>
			<Card.Description>{card.description}</Card.Description>
			</Card.Header>
			<Card.Content class="w-full h-[400px] sm:h-[200px]">
			<img class="w-full h-full object-cover" alt={card.imageAlt} src={card.imageSrc}/>
			</Card.Content>
		</Card.Root>
		{/each}
	</main>
	<footer class="mt-28 mb-8">Hello</footer>
{/if}

