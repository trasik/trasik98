<script>
	import { ModeWatcher } from 'mode-watcher';
	import Navigation from '$lib/components/Navigation.svelte';
	import Background from '$lib/components/Background.svelte';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<ModeWatcher />
<Navigation />
<Background />

<slot></slot>

<Footer />
