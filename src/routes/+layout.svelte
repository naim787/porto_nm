<script>
	import favicon from '$lib/assets/favicon.webp';
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Naim Abdullah</title>
</svelte:head>

{@render children?.()}
