<script>
	import { imageType } from '../store.ts';
	export let type;
	export let src;
	export let captionPos = 'after';
</script>

<section class={type}>
	<figure>
		{#if captionPos == 'before'}
			<figcaption>
				<slot />
			</figcaption>
		{/if}
		<!-- <img src="#" alt={src}/> -->
		<img {src} alt={src} />
		{#if captionPos == 'after'}
			<figcaption>
				<slot />
			</figcaption>
		{/if}
	</figure>
</section>

<style>
	figcaption {
		font-size: 0.5rem;
		color: gray;
		margin: 10px 0 20px 0;
		text-align: center;
	}
	figure {
		margin-block-start: 0;
		margin-block-end: 0;
		margin-inline-start: 0;
		margin-inline-end: 0;
	}
	.small {
		width: 50%;
		max-height: 100vh;
	}
	.tiny {
		width: 25%;
	}
	img {
		width: auto;
		height: auto;
		max-width: 100%;
		max-height: 100%;
	}
	.vertical img {
		display: block;
		max-height: 100vh;
		width: auto;
	}
	@media (max-width: 400px) {
		.tiny {
			width: 50%;
		}
		.small {
			width: 75%;
			max-height: 100vh;
		}
	}
</style>
