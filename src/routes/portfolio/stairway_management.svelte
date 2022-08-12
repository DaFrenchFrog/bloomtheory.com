<script>
	import { page } from '$app/stores';
	import Intro from '../../components/portfolio/Intro.svelte';
	import FolioImage from '../../components/portfolio/FolioImage.svelte';
	import Text from '../../components/portfolio/Text.svelte';

	import { folioData, imageType } from '../../components/store.ts';
	import PortfolioList from '../../components/PortfolioList.svelte';
	import { fade, fly } from 'svelte/transition';

	let data;
	$folioData.forEach((element) => {
		if (element.projectUrl == $page.url.pathname) data = element;
	});
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<article in:fly={{ duration: 1000 }}>
	<Intro tags={data.tags}>
		<span slot="client">{data.client}</span>
		<span slot="title">{data.title}</span>
		<span slot="content">
			Stairway Management est une entreprise de yield management spécialisée dans l'optimisation de
			la tarification du secteur de l'hôtellerie. Leur activité se base sur un grand nombre de
			données afin de proposer les tarifs les plus attractifs au meilleur moment. J'ai été
			comissionné afin de proposer une refonte de l'identité visuelle de la marque ainsi qu'un
			nouveau site internet.
		</span>
	</Intro>
	<FolioImage type={$imageType.TINY} src={data.assets + 'leonardo_fibonacci.jpg'}>
		Leonardo Fibonacci
	</FolioImage>
	<Text>
		<span slot="title">Le nombre d’or et la "suite" de Fibonacci</span>
		<p>
			L’identité visuelle de Stairway Management est directement inspirée du nombre d’or et des
			proportions de la suite de Fibonacci. Cette formule représente à la fois une dimension
			mathématique forte, symbolique de l’activité de l’entreprise, mais également une notion de
			recherche permanente de perfection, analogue à celle qui consiste à calculer et optimiser à
			son maximum les tarifs et outils des clients de Stairway Management.
		</p>
	</Text>
	<FolioImage type={$imageType.SMALL} src={data.assets + 'fibonacci.svg'} />
	<FolioImage type={$imageType.SMALL} src={data.assets + 'stairs.svg'} />
	<FolioImage type={$imageType.SMALL} src={data.assets + 'logo_stairway.svg'} />
	<FolioImage type={$imageType.H} src={data.assets + 'mood.jpg'} />
	<FolioImage type={$imageType.V} src={data.assets + 'typos.svg'} />
	<FolioImage type={$imageType.H} src={data.assets + 'web_mockup.jpg'} />
	<FolioImage type={$imageType.H} src={data.assets + 'visit_card.jpg'} />
</article>
<PortfolioList container="project" />

<style>
	p {
		margin-top: 0;
	}
</style>
