<script>
	import { bgColor } from './store.ts';
	$bgColor = '#FFFFFF';

	export let segment;
</script>

<nav>
	<ul>
		<li>
			<a aria-current={segment === undefined ? 'page' : undefined} href="."> home </a>
		</li>
		<li>
			<a aria-current={segment === 'casestudies' ? 'page' : undefined} href="casestudies">
				Case studies
			</a>
		</li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li>
			<a rel="prefetch" aria-current={segment === 'blog' ? 'page' : undefined} href="blog">
				blog
			</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		border-bottom: 1px solid rgba(255, 62, 0, 0.1);
		font-weight: 300;
		padding: 0 1em;
		position: fixed;
		z-index: 9100;
		height: 70px;
		top: 0;
		width: 100vw;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
		font-weight: bold;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: black;
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 10px;
		display: block;
	}
</style>
