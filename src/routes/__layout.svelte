<script>
	import { page } from '$app/stores';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import { bgColor, txtColor } from '../components/store';
	import { afterUpdate } from 'svelte';
	//   import { stores } from "@sapper/app";
	import { fade } from 'svelte/transition';
	export let segment;
	import { onMount } from 'svelte';

	// import GoogleAnalytics from 'sapper-google-analytics/GoogleAnalytics.svelte';
	// let ga_measurment_id = 'UA-168674392-1';

	//   const { page } = stores();
	let isLoaded = false;
	onMount(() => {
		isLoaded = true;
		var e = document.getElementById('loader');
		e.style.display = 'none';
	});
</script>

<svelte:head>
	{#if $page.url.pathname == '/'}
		<style>
			body,
			footer {
				background-color: #1c1717;
				color: #ffffff;
			}
			.bgGradient {
				background-color: red;
			}
		</style>
	{:else}
		<style>
			body,
			footer {
				background-color: #ffffff;
				color: #1c1717;
			}
			.bgGradient {
				background-color: red;
			}
		</style>
	{/if}
</svelte:head>
<svelte:body style="background-color:{$bgColor};color:{$txtColor}" />
<!-- <GoogleAnalytics {stores} id={ga_measurment_id} /> -->
<div class="container" class:isLoaded>
	<Nav {segment} />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	main {
		position: relative;
		max-width: 1440px;
		/* width: 80vw; */
		margin: 0 auto;
		padding: 70px 10vw 0 10vw;
	}
	.isLoaded {
		display: block !important;
	}
	.container {
		display: none;
	}
	@media (max-width: 400px) {
		main {
			padding: 70px 5vw 0 5vw;
		}
	}
</style>
