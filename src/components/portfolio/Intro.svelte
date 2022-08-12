<script>
	import TagList from './TagList.svelte';
	export let tags = [];
</script>

<section>
	<p class="_client">
		<slot name="client">Client</slot>
	</p>
	<h1>
		<slot class="_title" name="title">Title</slot>
	</h1>
	<TagList {tags} />
	<div class="intro">
		<p>
			<slot name="content">Content goes here...</slot>
		</p>
	</div>
</section>

<style>
	._client {
		font-family: 'Raleway', Helvetica, Arial, sans-serif;
		font-size: 1.2rem;
	}
	p {
		font-size: 1.7rem;
		font-family: 'SilkSerif-Regular', serif;
		line-height: 1.1;
	}
	.intro {
		margin-top: 200px;
	}
	h1 {
		margin: 0;
	}
	@media (max-width: 400px) {
		.intro {
			margin-top: 100px;
		}
	}
</style>
