<script>
	import Navigation from '$lib/components/Navigation.svelte';
	import Background from '$lib/components/Background.svelte';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navigation />
<Background />

<slot></slot>

<Footer />
