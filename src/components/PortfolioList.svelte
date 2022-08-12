<script>
	import { page } from '$app/stores';
	import { projectStatus } from './store.ts';
	import PortfolioListItem from './PortfolioListItem.svelte';
	import { onMount } from 'svelte';
	import { getContext } from 'svelte';
	import { folioData, txtColor } from './store.ts';
	import Tag from './Tag.svelte';
	export let container = '';

	// import { stores } from '@sapper/app';
	// const { page } = stores();

	const TOUS = '#Tous';
	let curTag = TOUS;
	let items = [];
	let tagList = [TOUS];
	let listContainer;
	let curImgUrl;
	for (let i = 0; i < $folioData.length; i++) {
		for (let j = 0; j < $folioData[i].tags.length; j++) {
			if (tagList.indexOf($folioData[i].tags[j]) == -1) {
				tagList.push($folioData[i].tags[j]);
			}
		}
	}
	onMount(() => {
		setTimeout(() => {
			positionItems();
		}, 100);
	});

	function positionItems() {
		var curTop = 0;
		var els = [];
		for (let i = 0; i < $folioData.length; i++) {
			els[i] = document.getElementById('item' + i);
			//       console.log($page.url.pathname,"  ++++   ", $folioData[i].projectUrl,"-> ",$page.url.pathname != $folioData[i].projectUrl);

			if (
				($folioData[i].tags.indexOf(curTag) >= 0 || curTag == TOUS) &&
				$page.url.pathname != $folioData[i].projectUrl
			) {
				els[i].style.top = curTop + 'px';
				els[i].style.display = 'block';
				els[i].style.opacity = 1;
				setTimeout(() => {
					els[i].style.opacity = 1;
				}, 200);
				curTop += els[i].clientHeight + 1;
			} else {
				// els[i].style.top = 0;
				els[i].style.opacity = 0;
				setTimeout(() => {
					els[i].style.display = 'none';
				}, 200);
			}
		}
		listContainer.style.height = curTop + 'px';
	}
	function thumbOver(e) {
		document.getElementById('thumbnail' + e.detail.d.UID).style.width = '50vw';
	}
	function thumbOut(e) {
		document.getElementById('thumbnail' + e.detail.d.UID).style.width = '0';
	}
	function tagClicked(e) {
		curTag = e.currentTarget.getAttribute('name');
		positionItems();
	}
</script>

<svelte:head>
	{#if $page.url.pathname == '/'}
		<style>
			li {
				border-bottom: 1px solid #ffffff;
				border-top: 1px solid #ffffff;
			}
		</style>
	{:else}
		<style>
			li {
				border-bottom: 1px solid #1c1717;
				border-top: 1px solid #1c1717;
			}
		</style>
	{/if}
</svelte:head>

{#if container == 'project'}
	<p>C'est terminé pour ce sujet...</p>
	<h2>On continue ?</h2>
{:else}
	<h2>Etudes de cas</h2>
{/if}
<!-- -------------- THUMBS --------------  -->
{#each $folioData as item, index}
	{#if item.status == $projectStatus.READY}
		<div
			id="thumbnail{item.UID}"
			class="thumbnail"
			style="top:{Math.random() * 40}vh;left:{Math.random() * 40}vw"
		>
			<!-- <img src={'assets/portfolio/enedis/thumbnail.jpg'} alt="" /> -->
			<img src={item.thumbnail} alt="" />
		</div>
	{/if}
{/each}
<!-- -------------- TAGS --------------  -->
<div class="portfolio_container">
	<div class="tag_menu">
		{#each tagList as tag}
			<div on:click={tagClicked} name={tag}>
				<Tag isOn={curTag == tag}>{tag}</Tag>
			</div>
		{/each}
	</div>

	<!-- -------------- LIST --------------  -->
	<ul bind:this={listContainer}>
		{#each $folioData as item, index}
			<li id="item{index}" bind:clientHeight={items[index]} uid={item.UID}>
				{#if item.status == $projectStatus.READY}
					<a href={item.projectUrl}>
						<PortfolioListItem content={item} on:over={thumbOver} on:out={thumbOut} {container} />
					</a>
				{:else}
					<PortfolioListItem content={item} on:over={thumbOver} on:out={thumbOut} {container} />
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		padding-inline-start: 0px;
		position: relative;
	}
	li {
		list-style-type: none;
		padding: 40px 0 40px 0;
		/* margin-top: -1px; */
		position: absolute;
		transition: top 500ms ease-in-out, opacity 200ms;
		top: 0;
		opacity: 1;
		width: 100%;
	}
	h2 {
		margin-top: 0;
	}
	.thumbnail {
		position: fixed;
		/* top: 20vh; */
		max-height: 80vh;
		/* left: 50vw; */
		width: 0vw;
		transition: width 250ms ease-in-out;
		overflow: hidden;
	}
	.thumbnail img {
		width: 50vw;
	}
	.tag_menu {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-bottom: 2rem;
	}
	.portfolio_container {
		position: relative;
	}
	@media (max-width: 400px) {
		li {
			/* margin: 0 0 20px 0; */
			padding: 20px 0 20px 0;
		}
	}
</style>
