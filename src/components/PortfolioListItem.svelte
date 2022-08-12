<script>
	// import Tag from './Tag';
	import { projectStatus } from './store.ts';

	export let content;
	export let container;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function onOver(e) {
		dispatch('over', {
			d: content
		});
	}
	function onOut(e) {
		dispatch('out', {
			d: content
		});
	}
	let lockColor = container == 'project' ? 'Blue' : 'White';
</script>

<div
	class={content.status === $projectStatus.READY ? 'item-ready' : 'item-locked'}
	on:focus={onOver}
	on:mouseover={onOver}
	on:mouseout={onOut}
	on:blur={onOut}
>
	<div class="content">
		<div>
			<h6>{content.client}</h6>
			<h3>{content.title}</h3>
		</div>
		{#if content.status == $projectStatus.LOCKED}
			<img class="lock" src={'/assets/lock' + lockColor + '.svg'} alt="locked" />
		{:else if content.status == $projectStatus.SOON}
			<p class="soon">Coming soon...</p>
		{/if}
	</div>
</div>

<style>
	h6 {
		padding: 0;
		margin: 0;
	}
	.content {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
	.soon {
		font-style: italic;
		font-size: 1rem;
		float: right;
		margin: 0;
		right: 0;
	}
	.item-locked {
		display: flex;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;
		opacity: 0.3;
	}
	.item-ready {
		transition: color 500ms;
		display: flex;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;
	}
	.item-ready:hover {
		color: salmon;
		/* mix-blend-mode: difference; */
	}
	h3 {
		margin: 0;
		font-size: 1.3rem;
	}
	h6 {
		margin: 0 0 10px 0;
	}
	.lock {
		width: 25px;
		/* height: 20px; */
	}
</style>
