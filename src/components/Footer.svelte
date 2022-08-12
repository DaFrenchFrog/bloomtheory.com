<script>
	import { txtColor, bgColor } from './store.ts';
</script>

<footer>
	<small>
		Ce site a été fait main avec passion grâce à&nbsp;
		<a href="https://sapper.svelte.dev/" target="_blank">svelte/sapper</a>
		&nbsp;et&nbsp;
		<a href="https://www.babylonjs.com/" target="_blank">babylonjs</a>
		.
	</small>
</footer>

<style>
	footer {
		margin: 100px 0 20px 0;
		text-align: center;
	}
	small {
		font-size: 0.5rem;

		margin-bottom: 40px;
		margin: 0;
	}
	a {
		text-decoration: wavy !important;
		opacity: 0.5;
	}
	a:hover {
		opacity: 1;
	}
</style>
