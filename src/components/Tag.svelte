<script>
	export let isOn = false;
	import { page } from '$app/stores';
	// import { stores } from '@sapper/app';
	// const { page } = stores();
</script>

{#if $page.url.pathname == '/'}
	<div class="btn" class:isOnWhite={isOn}>
		<slot />
	</div>
{:else}
	<div class="btn" class:isOnBlue={isOn}>
		<slot />
	</div>
{/if}

<style>
	.btn {
		font-size: 0.6rem;
		margin: 10px 10px 0 0;
		/* border: 1px solid; */
		padding: 5px 15px;
		border-radius: 25px;
		cursor: pointer;
		white-space: nowrap;
		transition: all 500ms;
	}
	.isOnWhite {
		background-color: #ffffff;
		color: #1c1717;
	}
	.isOnBlue {
		background-color: #1c1717;
		color: #ffffff;
	}
</style>
