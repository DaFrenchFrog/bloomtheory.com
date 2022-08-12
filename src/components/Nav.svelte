<script>
	import { page } from '$app/stores';
	//   const { page } = stores();
</script>

<nav>
	<div class="logo">
		<a href="/">
			<img
				src={$page.url.pathname == '/' ? '/assets/logoWhite.svg' : '/assets/logoBlack.svg'}
				alt="back to homepage"
			/>
		</a>
	</div>
	<div class="social">
		<a href="https://medium.com/@16ar/" target="_blank">
			<img
				class="social_icon"
				src={$page.url.pathname == '/'
					? '/assets/social/mediumwhite.svg'
					: '/assets/social/mediumblue.svg'}
				alt="linkedin"
			/>
		</a>
		<a href="https://www.linkedin.com/in/romaingle/" target="_blank">
			<img
				class="social_icon"
				src={$page.url.pathname == '/'
					? '/assets/social/linkedinwhite.svg'
					: '/assets/social/linkedinblue.svg'}
				alt="linkedin"
			/>
		</a>
		<a href="https://twitter.com/16ar" target="_blank">
			<img
				class="social_icon"
				src={$page.url.pathname == '/'
					? '/assets/social/twitterwhite.svg'
					: '/assets/social/twitterblue.svg'}
				alt="twitter"
			/>
		</a>
	</div>
</nav>

<style>
	nav {
		padding: 0;
		width: 100%;
		position: fixed;
		z-index: 9100;
		display: flex;
		justify-content: space-between;
	}
	nav a {
		text-decoration: none;
	}
	.social_icon {
		height: 40px;
		width: auto;
		padding: 20px;
	}
	.social {
		display: flex;
	}
	.logo img {
		height: 50px;
		padding: 20px;
	}
	@media (max-width: 400px) {
		img {
			height: 20px;
		}
		a {
			padding: 10px;
		}
	}
</style>
